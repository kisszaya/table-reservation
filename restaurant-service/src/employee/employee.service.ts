import { Injectable, Logger } from "@nestjs/common";

import { EmployeeRepository } from "@/repositories";
import {
  IEmployee,
  USER_ROLE,
} from "kisszaya-table-reservation/lib/interfaces";
import { EmployeeEntity } from "@/entities";
import {
  EmployeesAdd,
  EmployeesDelete,
  EmployeesGetRestaurant,
  UsersByIdInfo,
  UsersInfo,
  UsersRegister,
} from "kisszaya-table-reservation/lib/contracts";
import {
  RestaurantNotFoundForUserException,
  UserDontHaveAccessException,
} from "@/exceptions";
import { BrokerService } from "@/broker";

@Injectable()
export class EmployeeService {
  private readonly logger = new Logger(EmployeeService.name);

  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly brokerService: BrokerService
  ) {}

  public async findRecord(restaurant_id: number, user_id: number) {
    this.logger.log("find employee record by restaurant_id and user_id");

    return await this.employeeRepository.findEmployeeByRestaurantIdAndUserId(
      restaurant_id,
      user_id
    );
  }

  public async create(
    data: Pick<IEmployee, "roles" | "restaurant_id" | "user_id">
  ): Promise<{ restaurant_id: number; roles: USER_ROLE[] }> {
    this.logger.log("create");
    const newEmployeeEntity = new EmployeeEntity(data);

    const { restaurant_id, roles } =
      await this.employeeRepository.createEmployee(newEmployeeEntity);

    return {
      restaurant_id,
      roles,
    };
  }

  public async getUserRestaurantIds(
    user_id: number
  ): Promise<{ restaurants: { restaurant_id: number; roles: USER_ROLE[] }[] }> {
    this.logger.log("get user restaurantIds");

    const employees = await this.employeeRepository.findEmployeesByUserId(
      user_id
    );

    return {
      restaurants: employees.map((el) => ({
        restaurant_id: el.restaurant_id,
        roles: el.roles,
      })),
    };
  }

  public async addToRestaurant(
    data: EmployeesAdd.Request
  ): Promise<EmployeesAdd.Response> {
    this.logger.log("add employee to restaurant");
    const { user_id, restaurant_id, roles, ...userData } = data;

    await this.checkUserRights({
      user_id,
      role: USER_ROLE.ADMINISTRATOR,
      restaurant_id,
    });

    let user = await this.brokerService.publish<
      UsersInfo.Request,
      UsersInfo.Response
    >(UsersInfo.topic, { email: userData.email });

    // if user dont exist
    if (!user) {
      const { email, lastName, firstName, password, phone } = userData;

      if (!email || !firstName || !lastName || !password) {
        throw new Error();
      }

      const newUser = await this.brokerService.publish<
        UsersRegister.Request,
        UsersRegister.Response
      >(UsersRegister.topic, { email, phone, password, firstName, lastName });

      if (newUser.status !== "success") {
        throw new Error();
      }

      user = await this.brokerService.publish<
        UsersInfo.Request,
        UsersInfo.Response
      >(UsersInfo.topic, { email: userData.email });
    }

    const employeeEntity = new EmployeeEntity({
      restaurant_id,
      user_id: user.user_id,
      roles: roles,
    });

    const newEmployee = await this.employeeRepository.createEmployee(
      employeeEntity
    );

    return {
      employee_id: newEmployee.employee_id,
      user_id: newEmployee.user_id,
      roles: newEmployee.roles,
      email: user.email,
      fullName: user.fullName,
    };
  }

  public async deleteFromRestaurant(
    data: EmployeesDelete.Request
  ): Promise<EmployeesDelete.Response> {
    this.logger.log("remove employee from restaurant");
    const { restaurant_id, user_id, employee_id } = data;

    await this.checkUserRights({
      user_id,
      role: USER_ROLE.ADMINISTRATOR,
      restaurant_id,
    });

    const employee = await this.employeeRepository.findEmployeeById(
      employee_id
    );
    if (!employee) {
      throw new Error();
    }

    const { users } = await this.brokerService.publish<
      UsersByIdInfo.Request,
      UsersByIdInfo.Response
    >(UsersByIdInfo.topic, { userIds: [employee.user_id] });

    const user = users[0];

    if (!user) {
      throw new Error();
    }

    await this.employeeRepository.deleteEmployeeById(employee_id);

    return {
      employee_id: employee.employee_id,
      user_id: user.user_id,
      roles: employee.roles,
      email: user.email,
      fullName: user.fullName,
    };
  }

  public async getAllFromRestaurant(
    data: EmployeesGetRestaurant.Request
  ): Promise<EmployeesGetRestaurant.Response> {
    this.logger.log("get all employees from restaurant");
    const { restaurant_id, user_id } = data;

    await this.checkUserRights({
      user_id,
      role: USER_ROLE.ADMINISTRATOR,
      restaurant_id,
    });

    const employeesRecords =
      await this.employeeRepository.findEmployeesByRestaurantId(restaurant_id);

    const { users } = await this.brokerService.publish<
      UsersByIdInfo.Request,
      UsersByIdInfo.Response
    >(UsersByIdInfo.topic, { userIds: employeesRecords.map((e) => e.user_id) });

    const employees = users.map((user) => {
      const employeeRecord = employeesRecords.find(
        (el) => el.user_id === user.user_id
      );

      return {
        employee_id: employeeRecord.employee_id,
        email: user.email,
        user_id: user.user_id,
        roles: employeeRecord.roles,
        fullName: user.fullName,
      };
    });

    return { employees };
  }

  public async checkUserRights(data: {
    restaurant_id: number;
    user_id: number;
    role: USER_ROLE;
  }) {
    const { restaurant_id, user_id, role } = data;
    const userRecord = await this.findRecord(restaurant_id, user_id);

    if (!userRecord) {
      throw new RestaurantNotFoundForUserException();
    }
    if (!userRecord.roles.includes(role)) {
      throw new UserDontHaveAccessException(user_id);
    }
  }
}

import { IconPlus, IconUsers } from "@tabler/icons-react";
import { IDrawerNavbar, IDrawerNavbarLink } from "widgets/drawer";

import { AddEmployee } from "../ui/add-employee/add-employee";
import { Employees } from "../ui/employees/employees";

export enum EMPLOYEES_DRAWER_NAVBAR_LINKS {
  EMPLOYEES = "employees",
  ADD_EMPLOYEE = "add_employee",
}

const drawerNavbarLinks: IDrawerNavbarLink[] = [
  {
    label: "Сотрудники",
    icon: IconUsers,
    value: EMPLOYEES_DRAWER_NAVBAR_LINKS.EMPLOYEES,
    component: <Employees />,
  },
  {
    label: "Добавить сотрудника",
    icon: IconPlus,
    value: EMPLOYEES_DRAWER_NAVBAR_LINKS.ADD_EMPLOYEE,
    component: <AddEmployee />,
  },
];

export const drawerNavbar: IDrawerNavbar = {
  title: "Сотрудники ресторана",
  links: drawerNavbarLinks,
  defaultLink: EMPLOYEES_DRAWER_NAVBAR_LINKS.EMPLOYEES,
};

import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";

import { IAddEmployeeProps, IFormValues } from "../types";

export const useFormInitialValues = ({
  userInfo,
}: IAddEmployeeProps): IFormValues => ({
  password: "",
  phone: "phone" in userInfo ? userInfo.phone : "",
  lastName: "fullName" in userInfo ? userInfo.fullName.split(" ")[1] : "",
  firstName: "fullName" in userInfo ? userInfo.fullName.split(" ")[0] : "",
  email: userInfo.email,
  roles: USER_ROLE.HOSTESS,
});

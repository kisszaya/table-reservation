import { Responses } from "kisszaya-table-reservation/lib/responses";

export interface IAddEmployeeProps {
  userInfo: Responses.GetUserInfo | { email: string };
}

import { USER_ROLE } from "../users";

export interface IJWTPayload {
  user_id: string;
  expiresIn?: string;
  role: USER_ROLE;
}

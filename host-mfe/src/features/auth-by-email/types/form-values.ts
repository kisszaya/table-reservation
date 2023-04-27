import { IAuthByEmail } from "../model";

export type IFormValues = Omit<IAuthByEmail, "fingerprint">;

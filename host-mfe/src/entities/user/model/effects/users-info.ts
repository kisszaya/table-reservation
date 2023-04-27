import { createEffect } from "effector";
import { getUserInfoByEmail } from "../api";

const findUserByEmailFx = createEffect(
  async (email: string) => await getUserInfoByEmail(email)
);

export { findUserByEmailFx };

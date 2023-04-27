import { createEvent, forward } from "effector";
import { findUserByEmailFx } from "../effects";

const findUserByEmail = createEvent<string>();
forward({ from: findUserByEmail, to: findUserByEmailFx });

const resetUsersInfoStatus = createEvent();

export { findUserByEmail, resetUsersInfoStatus };

import { createStore } from "effector";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { changeMeInfo } from "../events";

export const $meInfo = createStore<Responses.GetMeInfo | null>(null).on(
  changeMeInfo,
  (_, payload) => payload
);

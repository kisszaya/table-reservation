import { createEvent, createStore } from "effector";
import { Responses } from "kisszaya-table-reservation/lib/responses";

const changeMeInfo = createEvent<Responses.GetMeInfo | null>();

const $meInfo = createStore<Responses.GetMeInfo | null>(null).on(
  changeMeInfo,
  (_, payload) => payload
);

export { changeMeInfo, $meInfo };

import { createEvent } from "effector";
import { Responses } from "kisszaya-table-reservation/lib/responses";

export const changeMeInfo = createEvent<Responses.GetMeInfo | null>();

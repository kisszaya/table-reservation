import { createEvent } from "effector";
import { TABLE_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

const changeTableVariant = createEvent<TABLE_VARIANT>();

export { changeTableVariant };

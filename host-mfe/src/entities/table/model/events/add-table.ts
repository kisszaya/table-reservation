import { createEvent } from "effector";
import { ITablePreview } from "kisszaya-table-reservation/lib/interfaces";

const addTable = createEvent<ITablePreview>();

export { addTable };

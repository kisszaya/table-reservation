import { combine } from "effector";
import {
  $tableHeight,
  $tablePersonsCount,
  $tableTitle,
  $tableVariant,
  $tableWidth,
} from ".";
import { $tableDescription } from "./table-description";
import { $tableTags } from "./table-tags";
import { $tableSeats } from "..";
import { ITable } from "../../types";

const $tableFields = combine(
  $tableWidth,
  $tableHeight,
  $tableVariant,
  $tableTitle,
  $tablePersonsCount,
  $tableDescription,
  $tableSeats,
  $tableTags,
  (width, height, variant, title, persons_count, description, seats, tags) => {
    const table: ITable = {
      title,
      height,
      variant,
      width,
      seats,
      description,
      tags,
      persons_count,
    };

    return table;
  }
);

export { $tableFields };

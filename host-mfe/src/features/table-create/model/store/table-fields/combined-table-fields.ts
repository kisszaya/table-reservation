import { combine } from "effector";
import {
  $tableHeight,
  $tablePersonsCount,
  $tableTitle,
  $tableVariant,
  $tableWidth,
} from ".";
import { $tableDescription } from "./table-description";
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
  (width, height, variant, title, persons_count, description, seats) => {
    const table: ITable = {
      title,
      height,
      variant,
      width,
      seats,
      description,
      tags: [],
      persons_count,
    };

    return table;
  }
);

export { $tableFields };

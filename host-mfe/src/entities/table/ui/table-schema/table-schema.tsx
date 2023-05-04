import {
  ITablePreview,
  SEAT_VARIANT,
} from "kisszaya-table-reservation/lib/interfaces";

import { ArmchairIcon, ChairIcon } from "shared/assets";

import { SEAT_POSITION_OPTIONS } from "../../const";

import { useStyles } from "./styles";

interface Props {
  heightUnit: number;
  widthUnit: number;
  table: Omit<
    ITablePreview,
    "table_id" | "title" | "description" | "persons_count" | "restaurant_id"
  >;
}

export const TableSchema = (props: Props) => {
  const { table, widthUnit, heightUnit } = props;
  const { classes } = useStyles({
    tableHeight: table.height,
    tableVariant: table.variant,
    tableWidth: table.width,
    heightUnit,
    widthUnit,
  });

  return (
    <div className={classes.container}>
      <div className={classes.table} />
      {table.seats.map((seat) => {
        const { x, y, angle } = SEAT_POSITION_OPTIONS[seat.position];
        const left = (x(seat.position_id, table.width) - 1) * widthUnit;
        const top = (y(seat.position_id, table.height) - 1) * heightUnit;

        return (
          <div
            key={seat.seat_id}
            className={classes.icon}
            style={{
              transform: `rotate(${angle}deg)`,
              top: `${top}px`,
              left: `${left}px`,
            }}
          >
            {seat.variant === SEAT_VARIANT.CHAR ? (
              <ChairIcon height={heightUnit} width={widthUnit} />
            ) : (
              <ArmchairIcon height={heightUnit} width={widthUnit} />
            )}
          </div>
        );
      })}
    </div>
  );
};

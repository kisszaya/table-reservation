import { createStyles } from "@mantine/core";
import { TABLE_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

interface Props {
  tableWidth: number;
  tableHeight: number;
  tableVariant: TABLE_VARIANT;
  widthUnit: number;
  heightUnit: number;
}

export const useStyles = createStyles(
  (
    theme,
    { tableHeight, tableWidth, tableVariant, widthUnit, heightUnit }: Props
  ) => ({
    container: {
      position: "relative",
      width: `${(tableWidth + 2) * widthUnit}px`,
      height: `${(tableHeight + 2) * heightUnit}px`,
    },
    table: {
      position: "absolute",
      left: `${widthUnit}px`,
      borderRadius: tableVariant === TABLE_VARIANT.SQUARE ? "4px" : "50%",
      top: `${heightUnit}px`,
      background: "#273A9C",
      width: `${tableWidth * widthUnit}px`,
      height: `${tableHeight * heightUnit}px`,
    },
    icon: {
      position: "absolute",
    },
  })
);

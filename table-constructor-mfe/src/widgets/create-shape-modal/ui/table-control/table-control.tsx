import { Group, NativeSelect, NumberInput } from "@mantine/core";
import { Table } from "entities/tables";
import { FC } from "react";

// import { TableFormValues } from "..";
// import { TABLE_VARIANT } from "shared/types";

interface Args {
  table?: Table;
}
//
// const tableVariantData = [
//   {
//     label: "Round",
//     value: TABLE_VARIANT.ROUND,
//   },
//   {
//     label: "Square",
//     value: TABLE_VARIANT.SQUARE,
//   },
// ];

export const TableControl: FC<Args> = (props) => {
  const { table } = props;

  return (
    <Group>
      <NumberInput
        value={table?.width ?? 3}
        onChange={(value) => {
          console.log("TEST width value", value);
          table?.setWidth(Number(value));
        }}
        label="width"
      />
      {/*<NumberInput {...tableForm.getInputProps("tableHeight")} label="height" />*/}
      {/*<NativeSelect*/}
      {/*  data={tableVariantData}*/}
      {/*  {...tableForm.getInputProps("tableVariant")}*/}
      {/*  label="variant"*/}
      {/*/>*/}
    </Group>
  );
};

import { Group, NativeSelect, NumberInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { FC } from "react";

import { TableFormValues } from "..";
import { TABLE_VARIANT } from "shared/types";

interface Args {
  tableForm: UseFormReturnType<
    TableFormValues,
    (values: TableFormValues) => TableFormValues
  >;
}

const tableVariantData = [
  {
    label: "Round",
    value: TABLE_VARIANT.ROUND,
  },
  {
    label: "Square",
    value: TABLE_VARIANT.SQUARE,
  },
];

export const TableControl: FC<Args> = (props) => {
  const { tableForm } = props;
  return (
    <Group>
      <NumberInput {...tableForm.getInputProps("tableWidth")} label="width" />
      <NumberInput {...tableForm.getInputProps("tableHeight")} label="height" />
      <NativeSelect
        data={tableVariantData}
        {...tableForm.getInputProps("tableVariant")}
        label="variant"
      />
    </Group>
  );
};

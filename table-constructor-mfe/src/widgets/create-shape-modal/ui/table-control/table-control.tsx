import { Group, NumberInput } from "@mantine/core";
import { FC } from "react";
import { ShapeCanvas as ShapeCanvasCls } from "entities/shapes";

// import { TableFormValues } from "..";
// import { TABLE_VARIANT } from "shared/types";

interface Args {
  canvas?: ShapeCanvasCls | null;
  setCanvas: (c: ShapeCanvasCls) => void;
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
  const { canvas, setCanvas } = props;

  return (
    <Group>
      <NumberInput
        value={canvas?.shape.table?.width ?? 3}
        onChange={(value) => {
          canvas?.shape.table?.setWidth(Number(value));
          canvas?.setCanvasWidth();
          canvas?.setCanvasHeight();
          canvas?.draw();
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

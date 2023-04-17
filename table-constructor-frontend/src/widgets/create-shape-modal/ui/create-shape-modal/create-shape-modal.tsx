import { createRef, useEffect, useRef } from "react";
import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

import { ShapeCanvas, TableControl } from "..";
import { DEFAULT_SHAPE_CONSTRUCTOR } from "shared/consts";
import { TABLE_VARIANT } from "shared/types";

export interface TableFormValues {
  tableWidth: number;
  tableHeight: number;
  tableVariant: TABLE_VARIANT;
}

const initialTableValues: TableFormValues = {
  tableHeight: DEFAULT_SHAPE_CONSTRUCTOR.TABLE.height,
  tableWidth: DEFAULT_SHAPE_CONSTRUCTOR.TABLE.width,
  tableVariant: DEFAULT_SHAPE_CONSTRUCTOR.TABLE.variant,
};

export const CreateShapeModal = () => {
  const canvasRef = createRef<HTMLCanvasElement>();
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  const tableForm = useForm<TableFormValues>({
    initialValues: initialTableValues,
  });

  const tableHeight = tableForm.values.tableHeight;
  const tableWidth = tableForm.values.tableWidth;
  const tableVariant = tableForm.values.tableVariant;

  const canvasHeight =
    (tableHeight + 2) * DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT;
  const canvasWidth = (tableWidth + 2) * DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT;

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (context) {
      ctx.current = context;
    }
  }, []);

  useEffect(() => {
    const context = ctx.current;
    if (context) {
      context.clearRect(0, 0, canvasWidth, canvasHeight);

      // add vertical lines
      for (let x = 1; x < tableWidth + 2; x++) {
        context.beginPath();
        context.setLineDash([5, 5]);

        context.moveTo(x * DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT, 0);
        context.lineTo(x * DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT, canvasHeight);
        context.stroke();

        const plusSize = DEFAULT_SHAPE_CONSTRUCTOR.PLUS_SIZE;
        const widthUnit = DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT;
        const heightUnit = DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT;

        for (let y = 1; y < tableHeight + 2; y++) {
          // add horizontal lines
          if (x === 1) {
            context.beginPath();
            context.setLineDash([5, 5]);
            context.moveTo(0, y * heightUnit);
            context.lineTo(canvasWidth, y * heightUnit);
            context.stroke();
          }
          if (x === 1 || x === tableWidth + 1) {
            // add plus horizontal line
            context.beginPath();
            context.setLineDash([]);
            context.moveTo(
              (x - 1) * widthUnit + widthUnit / 2,
              (y - 1) * heightUnit + heightUnit / 2 - plusSize / 2
            );
            context.lineTo(
              (x - 1) * widthUnit + widthUnit / 2,
              (y - 1) * heightUnit + heightUnit / 2 + plusSize / 2
            );
            context.stroke();

            // add plus vertical line
            context.beginPath();
            context.setLineDash([]);
            context.moveTo(
                (x - 1) * widthUnit + widthUnit / 2 - plusSize / 2,
                (y - 1) * heightUnit + heightUnit / 2
            );
            context.lineTo(
                (x - 1) * widthUnit + widthUnit / 2 + plusSize / 2,
                (y - 1) * heightUnit + heightUnit / 2
            );
            context.stroke();
          }
        }
      }

      const indent = DEFAULT_SHAPE_CONSTRUCTOR.TABLE_INDENT;

      switch (tableVariant) {
        case TABLE_VARIANT.SQUARE:
          context.beginPath();
          context.setLineDash([]);
          context.rect(
            DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT - indent,
            DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT - indent,
            DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT * tableWidth + indent * 2,
            DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT * tableHeight + indent * 2
          );
          context.fill();
          context.stroke();
          break;
        case TABLE_VARIANT.ROUND:
          context.beginPath();
          context.ellipse(
            canvasWidth / 2,
            canvasHeight / 2,
            (DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT * tableWidth + indent * 2) /
              2,
            (DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT * tableHeight + indent * 2) /
              2,
            0,
            0,
            2 * Math.PI
          );

          context.fill();
          context.stroke();
          break;
      }
    }
  }, [canvasWidth, canvasHeight, tableVariant]);

  return (
    <Stack align="center">
      <ShapeCanvas
        canvasHeight={canvasHeight}
        canvasWidth={canvasWidth}
        ref={canvasRef}
      />
      <TableControl tableForm={tableForm} />
    </Stack>
  );
};

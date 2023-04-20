import React, { useEffect, useRef, useState } from "react";
import { Stack } from "@mantine/core";

import { ShapeCanvas, TableControl } from "..";
import { DEFAULT_SHAPE_CONSTRUCTOR } from "shared/consts";
import {
  ShapeCanvas as ShapeCanvasCls,
  Shape,
  IShapeCanvas,
} from "entities/shapes";
import { Table } from "entities/tables";

export const CreateShapeModal = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [canvas, setCanvas] = useState<ShapeCanvasCls | null>();

  useEffect(() => {
    if (canvasRef.current) {
      const defaultShapeCanvas: IShapeCanvas = {
        shape: new Shape({
          title: "",
          number: 0,
          personsCount: 0,
          description: "",
          seats: [],
          table: new Table({ ...DEFAULT_SHAPE_CONSTRUCTOR.TABLE }),
        }),
        plusSize: DEFAULT_SHAPE_CONSTRUCTOR.PLUS_SIZE,
        widthUnit: DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT,
        heightUnit: DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT,
        tableIndent: DEFAULT_SHAPE_CONSTRUCTOR.TABLE_INDENT,
        canvas: canvasRef.current,
      };

      setCanvas(new ShapeCanvasCls(defaultShapeCanvas));
    }
  }, [canvasRef]);

  console.log("TEST w", canvas?.shape.table.width);

  useEffect(() => {
    console.log("TEST meow");
    canvas?.setCanvasWidth();
    canvas?.setCanvasHeight();
    canvas?.draw();
  }, [
    canvas?.shape.table.width,
    canvas?.shape.table.height,
    canvas?.shape.table.variant,
  ]);

  return (
    <Stack align="center">
      <ShapeCanvas
        canvasHeight={canvas?.canvasHeight ?? 100}
        canvasWidth={canvas?.canvasWidth ?? 100}
        ref={canvasRef}
      />
      <TableControl table={canvas?.shape.table} />
    </Stack>
  );
};

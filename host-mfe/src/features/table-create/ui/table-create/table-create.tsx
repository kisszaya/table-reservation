import { Stack } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

import { TableCanvas, TableControl } from "..";
import { useCanvasDraw } from "../../lib";

export const TableCreate = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  useCanvasDraw({ ctx });

  useEffect(() => {
    if (canvasRef.current) {
      setCtx(canvasRef.current.getContext("2d"));
    }
  }, []);

  return (
    <Stack align="center">
      <TableCanvas ref={canvasRef} />
      <TableControl />
    </Stack>
  );
};

import { useEffect } from "react";
import { useStore } from "effector-react";

import { draw } from "./draw";
import { tableFields, canvasFields, $tableSeats } from "../../model";

interface Props {
  ctx: CanvasRenderingContext2D | null;
}

export const useCanvasDraw = (props: Props) => {
  const { ctx } = props;
  const canvasWidth = useStore(canvasFields.$canvasWidth);
  const tableSeats = useStore($tableSeats);
  const canvasHeight = useStore(canvasFields.$canvasHeight);
  const tableHeight = useStore(tableFields.$tableHeight);
  const tableWidth = useStore(tableFields.$tableWidth);
  const tableVariant = useStore(tableFields.$tableVariant);

  useEffect(() => {
    if (!ctx) return;
    draw({
      ctx,
      canvasWidth,
      canvasHeight,
      tableHeight,
      tableVariant,
      tableWidth,
      tableSeats,
    });
  }, [
    canvasHeight,
    canvasWidth,
    ctx,
    tableHeight,
    tableSeats,
    tableVariant,
    tableWidth,
  ]);
};

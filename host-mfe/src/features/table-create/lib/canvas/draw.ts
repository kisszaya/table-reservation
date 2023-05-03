import { TABLE_VARIANT } from "kisszaya-table-reservation/lib/interfaces";

import { drawVerticalLine, drawHorizontalLine, drawPlus, drawTable } from ".";

interface Props {
  tableWidth: number;
  tableHeight: number;
  ctx: CanvasRenderingContext2D;
  canvasHeight: number;
  canvasWidth: number;
  tableVariant: TABLE_VARIANT;
}

export const draw = (props: Props) => {
  const {
    tableWidth,
    tableHeight,
    canvasHeight,
    canvasWidth,
    ctx,
    tableVariant,
  } = props;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  const lastTableWidth = tableWidth + 2;
  const lastTableHeight = tableHeight + 2;

  for (let x = 1; x <= lastTableWidth; x++) {
    if (x !== lastTableWidth) {
      drawVerticalLine({ x, ctx, canvasHeight });
    }

    for (let y = 1; y <= lastTableHeight; y++) {
      if (x === 1 && y !== lastTableWidth) {
        drawHorizontalLine({ y, ctx, canvasWidth });
      }

      if (x === 1 || x === lastTableWidth || y === 1 || y === lastTableHeight) {
        drawPlus({ x, y, ctx });
      }
    }
  }

  drawTable({
    tableVariant,
    ctx,
    canvasWidth,
    tableHeight,
    canvasHeight,
    tableWidth,
  });
};

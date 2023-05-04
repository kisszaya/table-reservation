import { ISeat } from "../../model";
import { SEAT_POSITION_OPTIONS } from "../../const";
import { drawPlus } from "./draw-plus";
import { drawSeat } from "./draw-seat";

interface Props {
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  tableSeats: ISeat[];
  tableWidth: number;
  tableHeight: number;
}

export const drawCellCenter = (props: Props) => {
  const { ctx, x, y, tableSeats, tableWidth, tableHeight } = props;

  let isDraw = false;
  for (const seat of tableSeats) {
    const seatOptions = SEAT_POSITION_OPTIONS[seat.position];

    if (
      seatOptions.x(seat.position_id, tableWidth) === x &&
      seatOptions.y(seat.position_id, tableHeight) === y
    ) {
      isDraw = true;
      drawSeat({
        ctx,
        x,
        y,
        variant: seat.variant,
        angle: seatOptions.angle,
        dx: seatOptions.dx,
        dy: seatOptions.dy,
      });
      break;
    }
  }

  if (!isDraw) {
    drawPlus({ x, ctx, y });
  }
};

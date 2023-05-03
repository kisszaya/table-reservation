import { TABLE_CONSTRUCTOR_SETTINGS } from "../../const";

interface Props {
  ctx: CanvasRenderingContext2D;
  x: number;
  canvasHeight: number;
}

export const drawVerticalLine = (props: Props) => {
  const { x, ctx, canvasHeight } = props;
  ctx.beginPath();
  ctx.setLineDash([5, 5]);

  ctx.moveTo(x * TABLE_CONSTRUCTOR_SETTINGS.WIDTH_UNIT, 0);
  ctx.lineTo(x * TABLE_CONSTRUCTOR_SETTINGS.WIDTH_UNIT, canvasHeight);
  ctx.stroke();
};

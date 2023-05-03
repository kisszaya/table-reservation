import { TABLE_CONSTRUCTOR_SETTINGS } from "../../const";

interface Props {
  ctx: CanvasRenderingContext2D;
  y: number;
  canvasWidth: number;
}

export const drawHorizontalLine = (props: Props) => {
  const { y, ctx, canvasWidth } = props;

  ctx.beginPath();
  ctx.setLineDash([5, 5]);
  ctx.moveTo(0, y * TABLE_CONSTRUCTOR_SETTINGS.HEIGHT_UNIT);
  ctx.lineTo(canvasWidth, y * TABLE_CONSTRUCTOR_SETTINGS.HEIGHT_UNIT);
  ctx.stroke();
};

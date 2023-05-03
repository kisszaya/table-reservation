import { TABLE_CONSTRUCTOR_SETTINGS } from "../../const";

const heightUnit = TABLE_CONSTRUCTOR_SETTINGS.HEIGHT_UNIT;
const widthUnit = TABLE_CONSTRUCTOR_SETTINGS.WIDTH_UNIT;
const plusSize = TABLE_CONSTRUCTOR_SETTINGS.PLUS_SIZE;

interface Props {
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
}

export const drawPlus = (props: Props) => {
  const { y, x, ctx } = props;

  // add plus horizontal line
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(
    (x - 1) * widthUnit + widthUnit / 2,
    (y - 1) * heightUnit + heightUnit / 2 - plusSize / 2
  );
  ctx.lineTo(
    (x - 1) * widthUnit + widthUnit / 2,
    (y - 1) * heightUnit + heightUnit / 2 + plusSize / 2
  );
  ctx.stroke();

  // add plus vertical line
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.moveTo(
    (x - 1) * widthUnit + widthUnit / 2 - plusSize / 2,
    (y - 1) * heightUnit + heightUnit / 2
  );
  ctx.lineTo(
    (x - 1) * widthUnit + widthUnit / 2 + plusSize / 2,
    (y - 1) * heightUnit + heightUnit / 2
  );
  ctx.stroke();
};

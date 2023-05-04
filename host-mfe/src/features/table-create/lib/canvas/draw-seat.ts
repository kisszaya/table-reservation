import { SEAT_VARIANT } from "kisszaya-table-reservation/lib/interfaces";
import { TABLE_CONSTRUCTOR_SETTINGS } from "../../const";

interface Props {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  variant: SEAT_VARIANT;
  angle: number;
  dx: (imageWidth: number) => number;
  dy: (imageHeight: number) => number;
}

export const drawSeat = (props: Props) => {
  const { ctx, x, y, variant, angle, dy, dx } = props;

  let img = new Image();
  if (variant === SEAT_VARIANT.CHAR) {
    img.src = "/seat/chair.png";
  } else {
    img.src = "/seat/armchair.png";
  }

  img.onload = function () {
    // rotate
    ctx.save();
    ctx.translate(
      (x - 1) * TABLE_CONSTRUCTOR_SETTINGS.WIDTH_UNIT,
      (y - 1) * TABLE_CONSTRUCTOR_SETTINGS.HEIGHT_UNIT
    );
    ctx.rotate((angle * Math.PI) / 180);
    ctx.drawImage(img, dx(img.width), dy(img.height));
    ctx.restore();
  };
};

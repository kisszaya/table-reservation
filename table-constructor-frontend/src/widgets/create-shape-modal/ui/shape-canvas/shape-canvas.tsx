import { forwardRef } from "react";

import { DEFAULT_SHAPE_CONSTRUCTOR } from "shared/consts";

interface Args {
  canvasWidth: number;
  canvasHeight: number;
}

type Ref = HTMLCanvasElement;

export const ShapeCanvas = forwardRef<Ref, Args>((props, ref) => {
  const { canvasHeight, canvasWidth } = props;

  return (
    <canvas
      height={canvasHeight}
      ref={ref}
      width={canvasWidth}
      style={{ background: "cyan" }}
    >
      ShapeCanvas
    </canvas>
  );
});

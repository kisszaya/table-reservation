import React, { forwardRef } from "react";

import { DEFAULT_SHAPE_CONSTRUCTOR } from "shared/consts";

interface Args {
  canvasWidth: number;
  canvasHeight: number;
}

type Ref = HTMLCanvasElement;

export const ShapeCanvas = forwardRef<Ref, Args>((props, ref) => {
  const { canvasHeight, canvasWidth } = props;

  const onMouseDown = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    console.log("TEST mouse down", event);
  };

  return (
    <canvas
      onMouseDown={onMouseDown}
      height={canvasHeight}
      ref={ref}
      width={canvasWidth}
      style={{ background: "cyan" }}
    >
      ShapeCanvas
    </canvas>
  );
});

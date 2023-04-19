import React, { forwardRef } from "react";

import { DEFAULT_SHAPE_CONSTRUCTOR } from "shared/consts";
import { openAddSeatModal } from "../../../add-seat-modal";

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
    // @ts-ignore
    const rect = ref?.current.getBoundingClientRect();

    const coords = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    const widthNumber = Math.ceil(
      coords.x / DEFAULT_SHAPE_CONSTRUCTOR.WIDTH_UNIT
    );
    const heightNumber = Math.ceil(
      coords.y / DEFAULT_SHAPE_CONSTRUCTOR.HEIGHT_UNIT
    );

    openAddSeatModal({ heightNumber, widthNumber });
  };

  return (
    <div>
      <canvas
        onMouseDown={onMouseDown}
        height={canvasHeight}
        ref={ref}
        width={canvasWidth}
        style={{ background: "cyan" }}
      >
        ShapeCanvas
      </canvas>
    </div>
  );
});

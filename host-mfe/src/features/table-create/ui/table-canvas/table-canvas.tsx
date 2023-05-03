import { forwardRef } from "react";
import { useStore } from "effector-react";

import { canvasFields } from "../../model";
import { TABLE_CONSTRUCTOR_SETTINGS } from "../../const";
import { openCreateSeatModal } from "../../lib";

type Ref = HTMLCanvasElement;

interface Props {}

export const TableCanvas = forwardRef<Ref, Props>((props, ref) => {
  const canvasHeight = useStore(canvasFields.$canvasHeight);
  const canvasWidth = useStore(canvasFields.$canvasWidth);

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
      coords.x / TABLE_CONSTRUCTOR_SETTINGS.WIDTH_UNIT
    );
    const heightNumber = Math.ceil(
      coords.y / TABLE_CONSTRUCTOR_SETTINGS.HEIGHT_UNIT
    );

    openCreateSeatModal({ heightNumber, widthNumber });
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

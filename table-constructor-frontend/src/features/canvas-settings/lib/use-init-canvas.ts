import { useLayoutEffect } from "react";

import { useCanvas } from "entities/canvas";
import { useResetCanvasPosition } from "..";

export const useInitCanvas = () => {
  const { canvasRef } = useCanvas();
  const { reset } = useResetCanvasPosition();

  useLayoutEffect(() => {
    if (canvasRef.current) {

      const renderCtx = canvasRef.current.getContext("2d");

      if (renderCtx) {
        reset(renderCtx);
      }
    }
  }, [reset]);

  return {};
};

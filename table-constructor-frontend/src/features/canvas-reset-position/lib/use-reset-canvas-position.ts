import { useCallback } from "react";

import { useCanvas } from "entities/canvas";

import { CANVAS_SETTINGS, DEFAULT_POINT_COORDINATES } from "shared/consts";

const { devicePixelRatio: ratio = 1 } = window;

export const useResetCanvasPosition = () => {
  const {
    setScale,
    setCtx,
    setOffset,
    setMousePosition,
    setViewportTopLeft,
    setLastMousePositionRef,
    setLastOffsetRef,
    isResetRef,
    setIsResetRef,
  } = useCanvas();

  const reset = useCallback((context: CanvasRenderingContext2D) => {
    if (context && !isResetRef.current) {
      context.canvas.width = CANVAS_SETTINGS.WIDTH * ratio;
      context.canvas.height = CANVAS_SETTINGS.HEIGHT * ratio;
      context.scale(ratio * CANVAS_SETTINGS.DEFAULT_SCALE, ratio * CANVAS_SETTINGS.DEFAULT_SCALE);
      setScale(CANVAS_SETTINGS.DEFAULT_SCALE);

      setCtx(context);
      setOffset(DEFAULT_POINT_COORDINATES);
      setMousePosition(DEFAULT_POINT_COORDINATES);
      setViewportTopLeft(DEFAULT_POINT_COORDINATES);
      setLastOffsetRef(DEFAULT_POINT_COORDINATES);
      setLastMousePositionRef(DEFAULT_POINT_COORDINATES);

      setIsResetRef(true);
    }
  }, []);

  return { reset };
};

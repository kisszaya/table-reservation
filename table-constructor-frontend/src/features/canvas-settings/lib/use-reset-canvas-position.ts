import { useCallback } from "react";

import { useCanvas } from "entities/canvas";

import {
  WORKING_AREA_SETTINGS,
  DEFAULT_POINT_COORDINATES,
} from "shared/consts";
import { CANVAS_RESET_SETTINGS } from "../const";

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
      context.canvas.width = CANVAS_RESET_SETTINGS.WIDTH;
      context.canvas.height = CANVAS_RESET_SETTINGS.HEIGHT;
      context.scale(CANVAS_RESET_SETTINGS.SCALE, CANVAS_RESET_SETTINGS.SCALE);
      setScale(WORKING_AREA_SETTINGS.DEFAULT_SCALE);

      setCtx(context);
      setOffset(CANVAS_RESET_SETTINGS.CENTER_POINT_COORDINATES);
      setMousePosition(DEFAULT_POINT_COORDINATES);
      setViewportTopLeft(CANVAS_RESET_SETTINGS.CENTER_POINT_COORDINATES);
      setLastOffsetRef(CANVAS_RESET_SETTINGS.CENTER_POINT_COORDINATES);
      setLastMousePositionRef(CANVAS_RESET_SETTINGS.CENTER_POINT_COORDINATES);

      setIsResetRef(true);
    }
  }, []);

  return { reset };
};

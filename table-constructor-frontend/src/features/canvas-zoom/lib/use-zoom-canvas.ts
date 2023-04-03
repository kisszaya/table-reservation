import { useEffect } from "react";

import { useCanvas } from "entities/canvas";
import { addPoints } from "features/point-handlers";

import { ZOOM } from "shared/consts";

export const useZoomCanvas = () => {
  const {
    canvasRef,
    ctx,
    scale,
    setScale,
    mousePosition,
    viewportTopLeft,
    setViewportTopLeft,
    setIsResetRef,
  } = useCanvas();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) {
      return;
    }

    function handleWheel(event: WheelEvent) {
      event.preventDefault();
      if (ctx) {
        const zoom = 1 - event.deltaY / ZOOM.SCROLL_SENSITIVITY;
        const viewportTopLeftDelta = {
          x: (mousePosition.x / scale) * (1 - 1 / zoom),
          y: (mousePosition.y / scale) * (1 - 1 / zoom),
        };
        const newViewportTopLeft = addPoints(
          viewportTopLeft,
          viewportTopLeftDelta
        );

        ctx.translate(viewportTopLeft.x, viewportTopLeft.y);
        ctx.scale(zoom, zoom);
        ctx.translate(-newViewportTopLeft.x, -newViewportTopLeft.y);

        setViewportTopLeft(newViewportTopLeft);
        setScale(scale * zoom);
        setIsResetRef(false);
      }
    }

    canvas.addEventListener("wheel", handleWheel);
    return () => canvas.removeEventListener("wheel", handleWheel);
  }, [ctx, mousePosition.x, mousePosition.y, viewportTopLeft, scale]);

  return {};
};

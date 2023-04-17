import { useEffect, useLayoutEffect } from "react";
import * as React from "react";

import { useCanvas } from "entities/canvas";
import { diffPoints, scalePoint } from "features/point-handlers";

import { CANVAS_SETTINGS, WORKING_AREA_SETTINGS } from "shared/consts";
import {
  useCanvasMousePosition,
  useInitCanvas,
  useMoveCanvas,
  useResetCanvasPosition,
  useZoomCanvas,
} from "features/canvas-settings";
import { showCanvasGrid } from "features/canvas-grid";
import { openCreateShapeModal } from "../../widgets";

// adjust to device to avoid blur
const { devicePixelRatio: ratio = 1 } = window;

export function MainCanvas() {
  useInitCanvas();
  const { reset } = useResetCanvasPosition();
  useCanvasMousePosition();
  const { startMouseDown } = useMoveCanvas();
  useZoomCanvas();
  const {
    canvasRef,
    ctx,
    scale,
    offset,
    setLastOffsetRef,
    lastOffsetRef,
    setViewportTopLeft,
    viewportTopLeft,
    setIsResetRef,
    mousePosition,
  } = useCanvas();

  // update last offset
  useEffect(() => {
    setLastOffsetRef(offset);
  }, [offset]);

  // pan when offset or scale changes
  useLayoutEffect(() => {
    if (ctx && lastOffsetRef.current) {
      const offsetDiff = scalePoint(
        diffPoints(offset, lastOffsetRef.current),
        scale
      );
      ctx.translate(offsetDiff.x, offsetDiff.y);
      setViewportTopLeft(diffPoints(viewportTopLeft, offsetDiff));
      setIsResetRef(false);
    }
  }, [ctx, offset, scale]);

  // draw
  useLayoutEffect(() => {
    if (ctx) {
      const squareSize = 20;

      // clear canvas-settings but maintain transform
      const storedTransform = ctx.getTransform();
      ctx.canvas.width = ctx.canvas.width;
      ctx.setTransform(storedTransform);

      ctx.fillRect(
        WORKING_AREA_SETTINGS.WIDTH / 2 - squareSize / 2,
        WORKING_AREA_SETTINGS.HEIGHT / 2 - squareSize / 2,
        squareSize,
        squareSize
      );
      ctx.arc(viewportTopLeft.x, viewportTopLeft.y, 5, 0, 2 * Math.PI);
      ctx.fill();

      showCanvasGrid(ctx);
    }
  }, [ctx, scale, offset, viewportTopLeft]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "gray",
      }}
    >
      <div>
        <button onClick={openCreateShapeModal}>Add table</button>
        <button onClick={() => ctx && reset(ctx)}>Reset</button>
        <pre>scale: {scale}</pre>
        <pre>offset: {JSON.stringify(offset)}</pre>
        <pre>viewportTopLeft: {JSON.stringify(viewportTopLeft)}</pre>
        <pre>mousePosition: {JSON.stringify(mousePosition)}</pre>
      </div>
      <canvas
        onMouseDown={startMouseDown}
        ref={canvasRef}
        width={CANVAS_SETTINGS.WIDTH * ratio}
        height={CANVAS_SETTINGS.HEIGHT * ratio}
        style={{
          width: `${CANVAS_SETTINGS.WIDTH}px`,
          height: `${CANVAS_SETTINGS.HEIGHT}px`,
          background: "white",
        }}
      ></canvas>
    </div>
  );
}

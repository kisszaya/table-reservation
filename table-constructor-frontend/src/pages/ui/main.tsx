import { useEffect, useLayoutEffect } from "react";
import * as React from "react";

import { useCanvas } from "entities/canvas";
import { diffPoints, scalePoint } from "features/point-handlers";
import { useInitCanvas } from "features/canvas-init";
import { useCanvasMousePosition } from "features/canvas-mouse-position";
import { useMoveCanvas } from "features/canvas-move";
import { useResetCanvasPosition } from "features/canvas-reset-position";
import { useZoomCanvas } from "features/canvas-zoom";

import { CANVAS_SETTINGS } from "shared/consts";

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
    viewportTopLeft, setIsResetRef, mousePosition
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

      // clear canvas but maintain transform
      const storedTransform = ctx.getTransform();
      ctx.canvas.width = ctx.canvas.width;
      console.log('TEST storedTransform')
      ctx.setTransform(storedTransform);

      ctx.fillRect(
        CANVAS_SETTINGS.WIDTH / 2 - squareSize / 2,
        CANVAS_SETTINGS.HEIGHT / 2 - squareSize / 2,
        squareSize,
        squareSize
      );
      ctx.arc(viewportTopLeft.x, viewportTopLeft.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, CANVAS_SETTINGS.HEIGHT);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(CANVAS_SETTINGS.WIDTH, CANVAS_SETTINGS.HEIGHT);
      ctx.lineTo(CANVAS_SETTINGS.WIDTH, 0);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(CANVAS_SETTINGS.WIDTH, 0);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(CANVAS_SETTINGS.WIDTH, CANVAS_SETTINGS.HEIGHT);
      ctx.lineTo(0, CANVAS_SETTINGS.HEIGHT);
      ctx.stroke();

    }
  }, [ctx, scale, offset, viewportTopLeft]);

  return (
    <div>
      <button onClick={() => ctx && reset(ctx)}>Reset</button>
      <pre>scale: {scale}</pre>
      <pre>offset: {JSON.stringify(offset)}</pre>
      <pre>viewportTopLeft: {JSON.stringify(viewportTopLeft)}</pre>
      <pre>mousePosition: {JSON.stringify(mousePosition)}</pre>
      <canvas
        onMouseDown={startMouseDown}
        ref={canvasRef}
        width={CANVAS_SETTINGS.WIDTH * ratio}
        height={CANVAS_SETTINGS.HEIGHT * ratio}
        style={{
          border: "2px solid #000",
          width: `${CANVAS_SETTINGS.WIDTH}px`,
          height: `${CANVAS_SETTINGS.HEIGHT}px`,
        }}
      ></canvas>
    </div>
  );
}

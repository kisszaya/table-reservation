import React, { useCallback } from "react";

import { addPoints, diffPoints } from "features/point-handlers";
import { useCanvas } from "entities/canvas";
import { IPoint } from "shared/types";

export const useMoveCanvas = () => {
  const {
    ctx,
    lastMousePositionRef,
    setOffset,
    offset,
    setLastMousePositionRef,
  } = useCanvas();

  const mouseMove = useCallback(
    (event: MouseEvent) => {
      if (ctx) {
        const lastMousePos = lastMousePositionRef.current;
        const currentMousePos = { x: event.pageX, y: event.pageY }; // use document so can pan off element
        setLastMousePositionRef(currentMousePos);

        const mouseDiff = diffPoints(currentMousePos, lastMousePos as IPoint);

        console.log('mouseDiff', JSON.stringify(mouseDiff))
        console.log('addPoints(offset, mouseDiff)', JSON.stringify(addPoints(offset, mouseDiff)))
        console.log('offset', JSON.stringify(offset))
        setOffset(offset => addPoints(offset, mouseDiff));
      }
    },
    [ctx]
  );


  const mouseUp = useCallback(() => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }, [mouseMove]);

  const startPan = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      setLastMousePositionRef({ x: event.pageX, y: event.pageY });
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    },
    [mouseMove, mouseUp]
  );

  return { startMouseDown: startPan };
};

import { useEffect } from "react";

import { diffPoints } from "features/point-handlers";
import { useCanvas } from "entities/canvas";

export const useCanvasMousePosition = () => {
  const { canvasRef, setMousePosition } = useCanvas();

  useEffect(() => {
    const canvasElem = canvasRef.current;
    if (canvasElem === null) {
      return;
    }

    function handleUpdateMouse(event: MouseEvent) {
      event.preventDefault();
      if (canvasRef.current) {
        const viewportMousePos = { x: event.clientX, y: event.clientY };
        const topLeftCanvasPos = {
          x: canvasRef.current.offsetLeft,
          y: canvasRef.current.offsetTop,
        };
        setMousePosition(diffPoints(viewportMousePos, topLeftCanvasPos));
      }
    }

    canvasElem.addEventListener("mousemove", handleUpdateMouse);
    canvasElem.addEventListener("wheel", handleUpdateMouse);
    return () => {
      canvasElem.removeEventListener("mousemove", handleUpdateMouse);
      canvasElem.removeEventListener("wheel", handleUpdateMouse);
    };
  }, []);

  return {};
};

import { FC, ReactNode, useCallback, useMemo, useRef, useState } from "react";

import { CanvasContext, ICanvasContext } from "../../lib";
import { IPoint } from "shared/types";
import { CANVAS_SETTINGS, DEFAULT_POINT_COORDINATES } from "shared/consts";

interface Args {
  children: ReactNode;
}

export const CanvasProvider: FC<Args> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [scale, setScale] = useState<number>(CANVAS_SETTINGS.DEFAULT_SCALE);
  const [offset, setOffset] = useState<IPoint>(DEFAULT_POINT_COORDINATES);
  const [mousePosition, setMousePosition] = useState<IPoint>(
    DEFAULT_POINT_COORDINATES
  );
  const [viewportTopLeft, setViewportTopLeft] = useState<IPoint>(
    DEFAULT_POINT_COORDINATES
  );
  const lastMousePositionRef = useRef<IPoint>(DEFAULT_POINT_COORDINATES);
  const lastOffsetRef = useRef<IPoint>(DEFAULT_POINT_COORDINATES);
  const isResetRef = useRef<boolean>(false);

  const changeLastMousePositionRef = useCallback((point: IPoint) => {
    lastMousePositionRef.current = point;
  }, []);

  const changeLastOffsetRef = useCallback((point: IPoint) => {
    lastOffsetRef.current = point;
  }, []);

  const changeIsResetRef = useCallback((value: boolean) => {
    isResetRef.current = value;
  }, []);

  const changeCanvasContext = useCallback(
    (context: CanvasRenderingContext2D | null) => {
      setCtx(context);
    },
    []
  );

  const changeCanvasScale = useCallback((scale: number) => {
    setScale(scale);
  }, []);

  const changeMousePosition = useCallback((mousePosition: IPoint) => {
    setMousePosition(mousePosition);
  }, []);

  const changeViewportTopLeft = useCallback((viewportTopLeft: IPoint) => {
    setViewportTopLeft(viewportTopLeft);
  }, []);

  const contextValue: ICanvasContext = useMemo(
    () => ({
      canvasRef,
      ctx,
      setCtx: changeCanvasContext,
      scale,
      setScale: changeCanvasScale,
      offset,
      setOffset,
      mousePosition,
      setMousePosition: changeMousePosition,
      viewportTopLeft,
      setViewportTopLeft: changeViewportTopLeft,
      lastMousePositionRef,
      lastOffsetRef,
      setLastOffsetRef: changeLastOffsetRef,
      setLastMousePositionRef: changeLastMousePositionRef,
      isResetRef,
      setIsResetRef: changeIsResetRef,
    }),
    [
      canvasRef,
      ctx,
      changeCanvasContext,
      scale,
      changeCanvasScale,
      offset,
      setOffset,
      // changeOffset,
      mousePosition,
      changeMousePosition,
      viewportTopLeft,
      changeViewportTopLeft,
      lastMousePositionRef,
      lastOffsetRef,
      changeLastOffsetRef,
      changeLastMousePositionRef,
      isResetRef,
      changeIsResetRef,
    ]
  );

  return (
    <CanvasContext.Provider value={contextValue}>
      {children}
    </CanvasContext.Provider>
  );
};

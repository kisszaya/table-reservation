import React, { createContext, RefObject } from "react";

import { IPoint } from "shared/types";

export interface ICanvasContext {
  canvasRef: RefObject<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D | null;
  setCtx: (ctx: CanvasRenderingContext2D | null) => void;
  scale: number;
  setScale: (scale: number) => void;
  setOffset:  React.Dispatch<React.SetStateAction<IPoint>>
  offset: IPoint;
  mousePosition: IPoint;
  setMousePosition: (point: IPoint) => void;
  viewportTopLeft: IPoint;
  setViewportTopLeft: (point: IPoint) => void;
  lastMousePositionRef: RefObject<IPoint>;
  setLastMousePositionRef: (point: IPoint) => void;
  lastOffsetRef: RefObject<IPoint>;
  setLastOffsetRef: (point: IPoint) => void;
  isResetRef: RefObject<boolean>
  setIsResetRef: (value: boolean) => void
}

export const CanvasContext = createContext<ICanvasContext | undefined>(
  undefined
);

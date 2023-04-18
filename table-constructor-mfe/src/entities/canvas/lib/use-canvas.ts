import { useContext } from "react";

import { CanvasContext } from ".";

export const useCanvas = () => {
  const contextValue = useContext(CanvasContext);
  if (!contextValue) throw new Error("Error: Canvas context is undefined");

  return contextValue;
};

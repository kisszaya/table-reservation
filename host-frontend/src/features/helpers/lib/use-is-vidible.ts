import { useIsTrue } from "shared/lib";

export const useIsVisible = (defaultValue?: boolean) => {
  const { isTrue, setTrue, setFalse, toggle } = useIsTrue(defaultValue);
  return {
    isVisible: isTrue,
    open: setTrue,
    close: setFalse,
    toggleVisibility: toggle,
  };
};

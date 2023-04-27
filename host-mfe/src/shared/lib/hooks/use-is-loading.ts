import { useIsTrue } from "./use-is-true";

export const useIsLoading = (defaultValue?: boolean) => {
  const { isTrue, setTrue, setFalse, toggle } = useIsTrue(defaultValue);
  return {
    isLoading: isTrue,
    startLoading: setTrue,
    finishLoading: setFalse,
    toggleLoading: toggle,
  };
};

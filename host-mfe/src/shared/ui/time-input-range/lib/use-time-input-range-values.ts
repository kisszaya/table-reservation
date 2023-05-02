import { useMemo, useState } from "react";

import { ITimeInput, ITimeInputRangeProps } from "../types";

export const useTimeInputRangeValues = (
  firstInputInitial: ITimeInput,
  secondInputInitial: ITimeInput
): Omit<ITimeInputRangeProps, "disabled"> => {
  const [firstInput, setFirstInput] = useState<ITimeInput>(firstInputInitial);
  const [secondInput, setSecondInput] =
    useState<ITimeInput>(secondInputInitial);

  const values = useMemo(
    () => ({
      firstInput: {
        value: firstInput,
        setValue: setFirstInput,
      },
      secondInput: {
        value: secondInput,
        setValue: setSecondInput,
      },
    }),
    [firstInput, secondInput]
  );

  return values;
};

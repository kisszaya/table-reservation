import { useEffect, useMemo } from "react";
import { Event, Store } from "effector";
import { useStore } from "effector-react";

import { ITimeInput, ITimeInputRangeProps } from "../types";
import { convertTimeToHoursAndMinutes } from "../../../lib";

interface Props {
  storeFrom: Store<ITimeInput>;
  storeTo: Store<ITimeInput>;
  eventFrom: Event<ITimeInput>;
  eventTo: Event<ITimeInput>;
  firstInputInitial: number | undefined;
  secondInputInitial: number | undefined;
}

export const useTimeInputRangeValues = (
  props: Props
): Omit<ITimeInputRangeProps, "disabled"> => {
  const {
    storeTo,
    storeFrom,
    eventFrom,
    eventTo,
    secondInputInitial,
    firstInputInitial,
  } = props;
  const fromInput = useStore(storeFrom);
  const toInput = useStore(storeTo);

  useEffect(() => {
    eventFrom(convertTimeToHoursAndMinutes(firstInputInitial));
    eventTo(convertTimeToHoursAndMinutes(secondInputInitial));
  }, [firstInputInitial, secondInputInitial]);

  const values = useMemo(
    () => ({
      firstInput: {
        value: fromInput,
        setValue: eventFrom,
      },
      secondInput: {
        value: toInput,
        setValue: eventTo,
      },
    }),
    [eventFrom, eventTo, fromInput, toInput]
  );

  return values;
};

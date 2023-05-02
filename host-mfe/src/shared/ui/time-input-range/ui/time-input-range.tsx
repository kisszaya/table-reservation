import { ChangeEvent } from "react";
import { Group } from "@mantine/core";
import { TimeInput } from "@mantine/dates";

import { useStyles } from "./styles";

import { ITimeInputRangeProps, ITimeInput } from "../types";

export const TimeInputRange = (props: ITimeInputRangeProps) => {
  const { firstInput, secondInput, disabled } = props;
  const { classes } = useStyles();

  const onFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      firstInput.setValue(null);
    }

    const values = event.target.value.split(":");

    firstInput.setValue({
      hours: Number(values[0]),
      minutes: Number(values[1]),
    });
  };

  const onSecondInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      secondInput.setValue(null);
    }

    const values = event.target.value.split(":");
    secondInput.setValue({
      hours: Number(values[0]),
      minutes: Number(values[1]),
    });
  };

  return (
    <Group align="center" spacing="xs">
      <TimeInput
        className={classes.input}
        disabled={disabled}
        value={convertInputValue(firstInput.value)}
        onChange={onFirstInputChange}
      />
      <p>-</p>
      <TimeInput
        className={classes.input}
        disabled={disabled}
        onChange={onSecondInputChange}
        value={convertInputValue(secondInput.value)}
      />
    </Group>
  );
};

const convertInputValue = (value: ITimeInput): string | undefined => {
  if (!value) {
    return undefined;
  }

  const hours = ("0" + value.hours).slice(-2);
  const minutes = ("0" + value.minutes).slice(-2);

  return `${hours}:${minutes}`;
};

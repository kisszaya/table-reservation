import { FC } from "react";
import {
  Stack,
  TextInput as MantineTextInput,
  TextInputProps,
} from "@mantine/core";

import { TEXT_INPUT_TYPE } from "../const/props";
import { Text } from "../../index";

import { useStyles } from "./styles";

type Args = TextInputProps & {
  inputType?: TEXT_INPUT_TYPE;
};
export const TextInput: FC<Args> = (props) => {
  const {
    inputType = TEXT_INPUT_TYPE.DEFAULT,
    label,
    disabled,
    ...defaultProps
  } = props;
  const { classes } = useStyles();

  return (
    <Stack spacing={2} align="start" className={classes.container}>
      {label && inputType === TEXT_INPUT_TYPE.IMMUTABLE && (
        <Text className={classes.label} size="xs">
          {label}
        </Text>
      )}
      <MantineTextInput
        {...defaultProps}
        label={inputType !== TEXT_INPUT_TYPE.IMMUTABLE ? label : undefined}
        disabled={inputType === TEXT_INPUT_TYPE.IMMUTABLE ? true : disabled}
        className={classes.immutable}
      />
    </Stack>
  );
};

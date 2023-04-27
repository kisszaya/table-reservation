import { FC, useRef, useState } from "react";
import { TimeInput, MonthPickerInput } from "@mantine/dates";
import { Affix, Group } from "@mantine/core";

import { useStyles } from "./styles";

export const ReservesTimeControl: FC = () => {
  const { classes } = useStyles();

  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Affix position={{ top: 8, right: 26 }}>
      <Group align="end" spacing="xs">
        <MonthPickerInput
          className={classes.input}
          placeholder="Month"
          value={value}
          onChange={setValue}
          mx="auto"
          maw={400}
          size="md"
        />
        <TimeInput
          className={classes.input}
          placeholder="Day"
          onClick={() => ref.current?.showPicker()}
          ref={ref}
          size="md"
          maw={400}
          mx="auto"
        />
      </Group>
    </Affix>
  );
};

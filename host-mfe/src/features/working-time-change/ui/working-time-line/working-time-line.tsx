import { useState } from "react";
import { Group, Switch } from "@mantine/core";
import { WEEKDAY } from "kisszaya-table-reservation/lib/interfaces";

import { TimeInputRange, useTimeInputRangeValues } from "shared/ui";

import { useStyles } from "./styles";

interface Props {
  weekday: WEEKDAY;
}

export const WorkingTimeLine = (props: Props) => {
  const { classes } = useStyles();
  const { weekday } = props;

  const [checked, setChecked] = useState(false);
  const values = useTimeInputRangeValues(null, null);

  return (
    <Group className={classes.container} position="apart" align="center">
      <Switch
        label={weekday}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
      <TimeInputRange {...values} disabled={!checked} />
    </Group>
  );
};

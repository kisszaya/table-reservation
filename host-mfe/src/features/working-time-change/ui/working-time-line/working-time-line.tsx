import { memo, useState } from "react";
import { Group, Switch } from "@mantine/core";
import { Store, Event } from "effector";
import {
  IWorkingTime,
  WEEKDAY,
} from "kisszaya-table-reservation/lib/interfaces";

import { ITimeInput, TimeInputRange, useTimeInputRangeValues } from "shared/ui";

import { useStyles } from "./styles";

interface Props {
  weekday: WEEKDAY;
  initWorkingTime: IWorkingTime | null;
  storeFrom: Store<ITimeInput>;
  storeTo: Store<ITimeInput>;
  eventFrom: Event<ITimeInput>;
  eventTo: Event<ITimeInput>;
}

export const WorkingTimeLine = memo((props: Props) => {
  const { classes } = useStyles();
  const { weekday, initWorkingTime, storeTo, storeFrom, eventFrom, eventTo } =
    props;

  const [checked, setChecked] = useState(!!initWorkingTime);
  const values = useTimeInputRangeValues({
    eventFrom,
    eventTo,
    storeFrom,
    storeTo,
    firstInputInitial: initWorkingTime?.time_from,
    secondInputInitial: initWorkingTime?.time_to,
  });

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
});

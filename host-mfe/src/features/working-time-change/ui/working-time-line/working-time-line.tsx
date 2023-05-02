import { memo, useState } from "react";
import { Group, Switch } from "@mantine/core";
import { Store, Event } from "effector";
import {
  IWorkingTime,
  WEEKDAY,
} from "kisszaya-table-reservation/lib/interfaces";

import { ITimeInput, TimeInputRange, useTimeInputRangeValues } from "shared/ui";

import { useStyles } from "./styles";
import { WEEKDAY_TEXTS } from "../../const";

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

  const onChangeChecked = () => {
    if (checked) {
      setChecked(false);
      values.firstInput.setValue(null);
      values.secondInput.setValue(null);
    } else {
      setChecked(true);
    }
  };

  return (
    <Group className={classes.container} position="apart" align="center">
      <Switch
        label={WEEKDAY_TEXTS[weekday]}
        checked={checked}
        onChange={onChangeChecked}
      />
      <TimeInputRange {...values} disabled={!checked} />
    </Group>
  );
});

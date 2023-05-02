import { WEEKDAY } from "kisszaya-table-reservation/lib/interfaces";
import { Stack } from "@mantine/core";

import { WorkingTimeLine } from "..";

export const WorkingTimeChange = () => {
  return (
    <Stack spacing="xs">
      <WorkingTimeLine weekday={WEEKDAY.MONDAY} />
      <WorkingTimeLine weekday={WEEKDAY.FRIDAY} />
      <WorkingTimeLine weekday={WEEKDAY.TUESDAY} />
    </Stack>
  );
};

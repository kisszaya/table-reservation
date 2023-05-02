import { WorkingTimeChange } from "features/working-time-change";
import { Stack } from "@mantine/core";

import { Title, TITLE_VARIANT } from "shared/ui";

export const WorkingHoursSettings = () => {
  return (
    <Stack>
      <Title variant={TITLE_VARIANT.DRAWER_TITLE}>Working hours settings</Title>
      <WorkingTimeChange />
    </Stack>
  );
};

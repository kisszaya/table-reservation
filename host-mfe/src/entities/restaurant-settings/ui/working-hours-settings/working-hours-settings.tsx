import { useEffect } from "react";
import { Loader, Stack } from "@mantine/core";
import { useStore } from "effector-react";

import { WorkingTimeChange } from "features/working-time-change";
import { Title, TITLE_VARIANT } from "shared/ui";
import {
  $getWorkingTimeIsLoading,
  getWorkingTime,
  $workingTime,
} from "../../model";

export const WorkingHoursSettings = () => {
  const getWorkingTimeIsLoading = useStore($getWorkingTimeIsLoading);
  const workingTime = useStore($workingTime);

  useEffect(() => {
    getWorkingTime();
  }, []);

  if (getWorkingTimeIsLoading || !workingTime) {
    return <Loader />;
  }

  return (
    <Stack>
      <Title variant={TITLE_VARIANT.DRAWER_TITLE}>Working hours settings</Title>
      <WorkingTimeChange workingTime={workingTime} />
    </Stack>
  );
};

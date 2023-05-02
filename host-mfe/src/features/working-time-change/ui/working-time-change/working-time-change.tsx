import { Stack } from "@mantine/core";

import { IWorkingTime } from "entities/restaurant-settings";
import { Button } from "shared/ui";
import { WorkingTimeLine } from "..";

import { useWorkingTimeInputs } from "../../lib";
import { changeWorkingTime } from "../../model";

interface Props {
  workingTime: IWorkingTime;
}

export const WorkingTimeChange = (props: Props) => {
  const { workingTime } = props;
  const inputs = useWorkingTimeInputs(workingTime);

  const onSubmit = () => {
    changeWorkingTime();
  };

  return (
    <Stack spacing="xs">
      {inputs.map((input) => (
        <WorkingTimeLine {...input} key={input.weekday} />
      ))}
      <Button onClick={onSubmit}>Save</Button>
    </Stack>
  );
};

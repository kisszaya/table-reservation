import { FC, useCallback } from "react";
import { ActionIcon, Popover, Stack } from "@mantine/core";
import { IconCalendar } from "@tabler/icons-react";
import { DateInput, DateValue } from "@mantine/dates";

import { useIsVisible } from "features/helpers";

interface Args {
  date: null | Date;
  setDate: (date: null | Date) => void;
}

export const TimeFilterPopover: FC<Args> = (props) => {
  const { isVisible, close, toggleVisibility } = useIsVisible(false);
  const { date, setDate } = props;

  const onChangeDate = useCallback((value: DateValue) => {
    setDate(value);
    close();
  }, []);

  return (
    <Popover
      width={200}
      position="bottom"
      onChange={toggleVisibility}
      withArrow
      shadow="md"
      opened={isVisible}
    >
      <Popover.Target>
        <ActionIcon color="violet" variant="light" onClick={toggleVisibility}>
          <IconCalendar size={20} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <DateInput
            value={date}
            onChange={onChangeDate}
            placeholder="Date input"
            maw={400}
            mx="auto"
          />
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

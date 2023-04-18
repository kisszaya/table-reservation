import { FC, useCallback, useState } from "react";
import { Group, Stack } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/router";

import { TimeFilterPopover } from "features/time-filter-popover";
import { Button, Title } from "shared/ui";
import { PRIVATE_PATH } from "shared/config";

export const BookingsListHeader: FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const { push } = useRouter();

  // TODO get real data
  const restaurant_id = 6;

  const onRestaurantsMainPageRedirect = useCallback(async () => {
    await push(PRIVATE_PATH.RESTAURANT(restaurant_id));
  }, []);

  return (
    <Group noWrap position="apart" align="center">
      <Button
        size="xs"
        leftIcon={<IconArrowLeft size={16} />}
        color="dark"
        variant="outline"
        onClick={onRestaurantsMainPageRedirect}
      >
        Restaurant settings
      </Button>
      <Group spacing={4}>
        <Title size="h6" mr="xs">
          Restaurant name | {date?.getDate() + ":" + date?.getMonth()}
        </Title>
        <TimeFilterPopover setDate={setDate} date={date} />
      </Group>
    </Group>
  );
};

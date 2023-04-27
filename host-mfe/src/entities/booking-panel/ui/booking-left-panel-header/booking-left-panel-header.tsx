import { FC, useCallback, useState } from "react";
import { Group } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/router";

import { Button, Title } from "shared/ui";
import { PRIVATE_PATH } from "shared/config";
import { TimeFilterPopover } from "widgets/time-filter-popover";
import { useAuthStore } from "shared/lib/hooks";
import { restaurantStore } from "entities/restaurant";

export const BookingLeftPanelHeader: FC = () => {
  const { push } = useRouter();
  const { restaurant_id } = useAuthStore(restaurantStore.$restaurantInfo);

  const [date, setDate] = useState<Date | null>(new Date());

  const onRestaurantsMainPageRedirect = useCallback(async () => {
    await push(PRIVATE_PATH.RESTAURANT(restaurant_id));
  }, [push, restaurant_id]);

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

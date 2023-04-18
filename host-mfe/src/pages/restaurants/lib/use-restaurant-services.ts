import { useDisclosure } from "@mantine/hooks";
import {
  IconCoin,
  IconSettings,
  IconUsers,
  IconDiscount,
} from "@tabler/icons-react";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";
import { useCallback } from "react";
import { useRouter } from "next/router";

import { IRestaurantService } from "shared/types";
import { PRIVATE_PATH } from "shared/config";

export const useRestaurantServices = () => {
  const { push } = useRouter();
  const [openedSettings, { open: openSettings, close: closeSettings }] =
    useDisclosure(false);
  const [openedDiscounts, { open: openDiscounts, close: closeDiscounts }] =
    useDisclosure(false);
  const [openedEmployees, { open: openEmployees, close: closeEmployees }] =
    useDisclosure(false);

  // TODO get real data
  const restaurant_id = 6;

  const redirectToBookingPanel = useCallback(async () => {
    await push(PRIVATE_PATH.RESTAURANT_BOOKING_PANEL(restaurant_id));
  }, []);

  const restaurantServices: IRestaurantService[] = [
    {
      title: "Employees",
      description: "You can add waiters and administrators to the restaurant",
      icon: IconUsers,
      onClick: openEmployees,
      roles: [USER_ROLE.ADMINISTRATOR],
    },
    {
      title: "Settings",
      description: "You can change settings of restaurant",
      icon: IconSettings,
      onClick: openSettings,
      roles: [USER_ROLE.ADMINISTRATOR],
    },
    {
      title: "Discounts",
      description: "You can add or remove discounts of restaurant",
      icon: IconDiscount,
      onClick: openDiscounts,
      roles: [USER_ROLE.ADMINISTRATOR, USER_ROLE.HOSTESS],
    },
    {
      title: "Booking panel",
      description: "You can open booking-panel panel of restaurant",
      icon: IconCoin,
      onClick: redirectToBookingPanel,
      roles: [USER_ROLE.ADMINISTRATOR, USER_ROLE.HOSTESS],
    },
  ];

  return {
    restaurantServices,
    openedSettings,
    closeSettings,
    openedEmployees,
    closeEmployees,
    openedDiscounts,
    closeDiscounts,
  };
};

import { useDisclosure } from "@mantine/hooks";
import {
  IconCoin,
  IconSettings,
  IconUsers,
  IconDiscount,
} from "@tabler/icons-react";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";

import { IRestaurantService } from "shared/types";

export const useRestaurantServices = () => {
  const [openedSettings, { open: openSettings, close: closeSettings }] =
    useDisclosure(false);
  const [openedDiscounts, { open: openDiscounts, close: closeDiscounts }] =
    useDisclosure(false);
  const [openedEmployees, { open: openEmployees, close: closeEmployees }] =
    useDisclosure(false);

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
      description: "You can open booking panel of restaurant",
      icon: IconCoin,
      onClick: () => {},
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

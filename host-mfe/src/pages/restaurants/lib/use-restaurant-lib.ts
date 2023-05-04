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

import { PRIVATE_PATH } from "shared/config";
import { IRestaurantServices, restaurantStore } from "entities/restaurant";
import { useAuthStore } from "shared/lib/hooks";

export const useRestaurantLib = () => {
  const { restaurant_id } = useAuthStore(restaurantStore.$restaurantInfo);
  const { push } = useRouter();

  const [openedSettings, { open: openSettings, close: closeSettings }] =
    useDisclosure(false);
  const [openedDiscounts, { open: openDiscounts, close: closeDiscounts }] =
    useDisclosure(false);
  const [openedEmployees, { open: openEmployees, close: closeEmployees }] =
    useDisclosure(false);

  const redirectToBookingPanel = useCallback(async () => {
    await push(PRIVATE_PATH.RESTAURANT_BOOKING_PANEL(restaurant_id));
  }, [push, restaurant_id]);

  const redirectToProfile = useCallback(async () => {
    await push(PRIVATE_PATH.PROFILE);
  }, [push]);

  const services: IRestaurantServices = [
    {
      title: "Сотрудники",
      description:
        "Вы можете добавить официантов и администраторов в ваш ресторан",
      icon: IconUsers,
      onClick: openEmployees,
      roles: [USER_ROLE.ADMINISTRATOR],
    },
    {
      title: "Настройки",
      description: "Редактируйте столики, время работы и основные настройки",
      icon: IconSettings,
      onClick: openSettings,
      roles: [USER_ROLE.ADMINISTRATOR],
    },
    {
      title: "Акции",
      description: "Добавьте информацию о скидках и акциях",
      icon: IconDiscount,
      onClick: openDiscounts,
      roles: [USER_ROLE.ADMINISTRATOR, USER_ROLE.HOSTESS],
    },
    {
      title: "Панель бронирования",
      description: "Ведите учет броней в режиме реального времени",
      icon: IconCoin,
      onClick: redirectToBookingPanel,
      roles: [USER_ROLE.ADMINISTRATOR, USER_ROLE.HOSTESS],
    },
  ];

  return {
    services,
    openedSettings,
    closeSettings,
    openedEmployees,
    closeEmployees,
    openedDiscounts,
    closeDiscounts,
    redirectToProfile,
  };
};

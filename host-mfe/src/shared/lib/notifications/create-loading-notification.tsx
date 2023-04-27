import { hideNotification, showNotification } from "@mantine/notifications";

import { generateRandomId } from "../generate-random-id";
import { IconCheck } from "@tabler/icons-react";

export const createLoadingNotification = () => {
  const notificationId = generateRandomId();

  const showLoadingNotification = (title: string) => {
    showNotification({
      id: notificationId,
      message: title,
      loading: true,
      radius: "md",
    });
  };

  const updateOnSuccess = (title: string) => {
    hideNotification(notificationId);
    showNotification({
      icon: <IconCheck />,
      message: title,
      radius: "md",
      autoClose: 2000,
      color: "green",
    });
  };

  return {
    showLoadingNotification,
    updateOnSuccess,
  };
};

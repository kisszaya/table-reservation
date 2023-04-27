import { showNotification } from "@mantine/notifications";

export const showSuccessNotification = (title: string, message: string) => {
  showNotification({
    message,
    title,
    color: "green",
    autoClose: 3000,
    radius: "md",
  });
};

import { showNotification } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

export const showErrorNotification = (title: string, message: string) => {
  showNotification({
    message,
    title,
    radius: "md",
    icon: <IconX size={18} />,
    color: "red",
  });
};

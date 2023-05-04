import { createStyles } from "@mantine/core";

import { BOOKING_TABLES_COUNT } from "shared/const";

export const useStyles = createStyles(() => ({
  card: {
    width: `${100 / BOOKING_TABLES_COUNT - 1}%`,
    height: "270px",
    cursor: "pointer",
    position: "relative",
  },

  container: {
    height: "100%",
  },

  badge: {
    position: "absolute",
    top: "10px",
    right: "8px",
  },
}));

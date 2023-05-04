import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    cursor: "pointer",
    width: "45%",
    height: "200px",
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
    },
  },

  content: {
    height: "inherit",
    paddingBottom: "12px",
  },

  icon: {
    transform: "scale(2)",
  },
}));

import { createStyles, MantineTheme } from "@mantine/core";

const defaultStyles = (theme: MantineTheme) => ({
  cursor: "default !important",
  background: `#FFF !important`,
  color: `black !important`,
  opacity: "1",
  fontWeight: 600,
  border: `1px solid ${theme.colors.gray[1]}`,
});

export const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
  },
  immutable: {
    width: '100%',
    "& > div > input:disabled": defaultStyles(theme),
  },

  label: {
    textAlign: "right",
    color: theme.colors.gray[6],
  },
}));

import { Card, Stack } from "@mantine/core";
import { FunctionComponent } from "react";
import { Title } from "shared/ui";

import { useStyles } from "./styles";

interface Props {
  icon: FunctionComponent<{ className?: string }>;
  title: string;
  onClick: () => void;
}

export const SeatVariantCard = (props: Props) => {
  const { classes } = useStyles();
  const { icon: Icon, title, onClick } = props;

  return (
    <Card withBorder className={classes.card} onClick={onClick}>
      <Stack
        align="center"
        justify="center"
        className={classes.content}
        spacing="xl"
      >
        <Icon className={classes.icon} />
        <Title order={4}>{title}</Title>
      </Stack>
    </Card>
  );
};

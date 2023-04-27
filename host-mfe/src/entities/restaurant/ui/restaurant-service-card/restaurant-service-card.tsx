import { UnstyledButton } from "@mantine/core";
import { FC } from "react";
import { Icon } from "@tabler/icons-react";

import { Text, Title } from "shared/ui";
import { IRestaurantServiceCardItem } from "../../types";

import { useStyles } from "./styles";

export const RestaurantServiceCard: FC<IRestaurantServiceCardItem> = (
  props
) => {
  const { icon: Icon, title, onClick, description, isAvailable } = props;
  const { classes } = useStyles();

  if (!isAvailable) return null;

  return (
    <UnstyledButton className={classes.card} onClick={onClick}>
      <Icon size="2rem" />
      <Title order={4}>{title}</Title>
      <Text size="xs" mt={7}>
        {description}
      </Text>
    </UnstyledButton>
  );
};

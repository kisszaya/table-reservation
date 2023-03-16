import { UnstyledButton } from "@mantine/core";
import { FC } from "react";
import { Icon } from "@tabler/icons-react";

import { Text, Title } from "shared/ui";

import { useStyles } from "./styles";
import { IRestaurantService } from "shared/types";

type Args = Omit<IRestaurantService, "roles"> & {
  isAvailable: boolean;
};

export const RestaurantServiceCard: FC<Args> = (props) => {
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

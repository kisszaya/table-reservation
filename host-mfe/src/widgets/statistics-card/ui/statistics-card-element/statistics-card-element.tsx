import React, { FC } from "react";
import { Stack } from "@mantine/core";

import { Text, Title } from "shared/ui";
import { IStatisticsCardElement } from "../..";

import { useStyles } from "./styles";

type Args = {
  widthInPercentage: number;
} & IStatisticsCardElement;

export const StatisticsCardElement: FC<Args> = (props) => {
  const { count, title, widthInPercentage } = props;
  const { classes, theme } = useStyles();

  return (
    <Stack
      align="center"
      spacing={4}
      className={classes.element}
      style={{ width: `${widthInPercentage}%` }}
    >
      <Title order={6} color={theme.colors.gray[0]}>
        {title}
      </Title>
      <Text size="xs" color={theme.colors.gray[0]} fw={500}>
        {count}
      </Text>
    </Stack>
  );
};

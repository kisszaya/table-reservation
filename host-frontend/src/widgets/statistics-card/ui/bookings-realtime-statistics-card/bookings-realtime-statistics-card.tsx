import { FC, Fragment } from "react";
import { Card, Divider, Group } from "@mantine/core";

import { StatisticsCardElement } from "..";
import { IStatisticsCardElement } from "../..";

import { useStyles } from "./styles";

interface Args {
  statisticElements: IStatisticsCardElement[];
}

export const BookingsRealtimeStatisticsCard: FC<Args> = (props) => {
  const { classes } = useStyles();
  const { statisticElements } = props;

  const elementsLength = statisticElements.length;
  const elementWidthInPercentage = 100 / elementsLength - 1;

  return (
    <Card className={classes.card} withBorder p="xs">
      <Group position="apart" spacing={0}>
        {statisticElements.map((el, index) => {
          const isLastElement = index + 1 === elementsLength;

          return (
            <Fragment key={el.title}>
              <StatisticsCardElement
                {...el}
                widthInPercentage={elementWidthInPercentage}
              />
              {!isLastElement && <Divider orientation="vertical" />}
            </Fragment>
          );
        })}
      </Group>
    </Card>
  );
};

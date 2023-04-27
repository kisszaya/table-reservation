import { Fragment } from "react";
import { Card, Divider, Group } from "@mantine/core";

import { useStyles } from "./styles";
import { IStatisticsElem } from "../../types";
import { ReservesStatisticsCardElem } from "..";

const statistics: IStatisticsElem[] = [
  { title: "Expect", count: 2 },
  { title: "Open", count: 2 },
  { title: "Closing", count: 2 },
  { title: "New", count: 2 },
];

export const ReservesStatisticsCard = () => {
  const { classes } = useStyles();

  const elementsLength = statistics.length;
  const elementWidthInPercentage = 100 / elementsLength - 1;

  return (
    <Card className={classes.card} withBorder p="xs">
      <Group position="apart" spacing={0}>
        {statistics.map((el, index) => {
          const isLastElement = index + 1 === elementsLength;

          return (
            <Fragment key={el.title}>
              <ReservesStatisticsCardElem
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

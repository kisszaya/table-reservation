import { FC } from "react";
import { Group, ScrollArea } from "@mantine/core";

import { TablePreview } from "widgets";
import { ITablePreview } from "shared/types";

import { useStyles } from "./styles";

export const BookingTables: FC = () => {
  const { classes } = useStyles();

  const tablesPreviews: ITablePreview[] = [
    {
      title: "",
      tableNumber: 1,
      hall: "Основной",
      personsCount: 4,
    },
    {
      title: "",
      tableNumber: 2,
      hall: "Основной",
      personsCount: 2,
    },
    {
      title: "",
      tableNumber: 3,
      hall: "Основной",
      personsCount: 4,
    },
    {
      title: "",
      tableNumber: 4,
      hall: "Основной",
      personsCount: 4,
    },
    {
      title: "",
      tableNumber: 5,
      hall: "Основной",
      personsCount: 2,
    },
    {
      title: "",
      tableNumber: 6,
      hall: "Основной",
      personsCount: 4,
    },
    {
      title: "",
      tableNumber: 7,
      hall: "Основной",
      personsCount: 4,
    },
    {
      title: "",
      tableNumber: 8,
      hall: "Основной",
      personsCount: 2,
    },
    {
      title: "",
      tableNumber: 9,
      hall: "Основной",
      personsCount: 4,
    },
    {
      title: "",
      tableNumber: 10,
      hall: "Основной",
      personsCount: 2,
    },
  ];

  return (
    <ScrollArea h="100vh" className={classes.container}>
      <Group className={classes.container} position='left' my={40} pr='lg' spacing={'xs'}>
        {tablesPreviews.map((table) => (
          <TablePreview {...table} key={table.tableNumber} />
        ))}
      </Group>
    </ScrollArea>
  );
};

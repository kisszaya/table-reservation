import { useEffect } from "react";
import { Group, Loader, ScrollArea } from "@mantine/core";
import { useStore } from "effector-react";

import { $getTablesIsLoading, $tables, getTables } from "../../model";

import { useStyles } from "./styles";
import { BookingTableCard } from "..";

export const BookingTablesList = () => {
  const { classes } = useStyles();
  const tables = useStore($tables);
  const isLoading = useStore($getTablesIsLoading);

  useEffect(() => {
    getTables();
  }, []);

  if (!tables || isLoading) {
    return <Loader />;
  }

  return (
    <ScrollArea h="100vh" className={classes.container}>
      <Group
        className={classes.container}
        position="left"
        my={40}
        pr="lg"
        spacing={"xs"}
      >
        {tables.map((table, index) => (
          <BookingTableCard table={table} key={table.table_id} index={index} />
        ))}
      </Group>
    </ScrollArea>
  );
};

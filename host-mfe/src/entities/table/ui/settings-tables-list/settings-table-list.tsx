import { useEffect } from "react";
import { Loader, Stack } from "@mantine/core";
import { useStore } from "effector-react";

import { $getTablesIsLoading, $tables, getTables } from "../../model";
import { SettingsTableCard } from "..";

export const SettingsTableList = () => {
  const tables = useStore($tables);
  const isLoading = useStore($getTablesIsLoading);

  useEffect(() => {
    getTables();
  }, []);

  if (!tables || isLoading) {
    return <Loader />;
  }

  return (
    <Stack spacing="xs">
      {tables.map((table) => (
        <SettingsTableCard {...table} key={table.table_id} />
      ))}
    </Stack>
  );
};

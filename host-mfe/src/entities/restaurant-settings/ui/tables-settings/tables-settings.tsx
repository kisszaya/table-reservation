import { Group, Stack } from "@mantine/core";

import { Button, Title, TITLE_VARIANT } from "shared/ui";
import { openCreateTableModal } from "features/table-create";
import { SettingsTableList } from "entities/table";

export const TablesSettings = () => {
  return (
    <Stack>
      <Group position="apart">
        <Title variant={TITLE_VARIANT.DRAWER_TITLE}>Столы</Title>
        <Button size="xs" onClick={openCreateTableModal}>
          Добавить стол
        </Button>
      </Group>
      <SettingsTableList />
    </Stack>
  );
};

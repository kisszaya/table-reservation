import { Card, Group, Stack } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

import { Button, TextInput, Title } from "shared/ui";

export const AddEmployeeSection = () => {
  return (
    <Card withBorder>
      <Stack spacing="xs">
        <Title size="xs">Add employee</Title>
        <Group noWrap>
          <TextInput placeholder="Email" />
          <Button rightIcon={<IconArrowRight size={16} />}>Check email</Button>
        </Group>
      </Stack>
    </Card>
  );
};

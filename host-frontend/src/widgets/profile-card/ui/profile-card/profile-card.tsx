import { FC } from "react";
import { Responses } from "kisszaya-table-reservation/lib/responses";
import { Avatar, Card, Stack } from "@mantine/core";

import { Text, Title } from "shared/ui";

interface Args {
  me: Responses.GetMeInfo;
}

export const ProfileCard: FC<Args> = ({ me }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={5}>Your profile</Title>
      <Avatar radius="xl" size="xl" color="indigo" />
      <Stack spacing="xs">
        <Text>{me.fullName}</Text>
        <Text>{me.email}</Text>
        {me.phone && <Text>{me.phone}</Text>}
        {me.status}
      </Stack>
    </Card>
  );
};

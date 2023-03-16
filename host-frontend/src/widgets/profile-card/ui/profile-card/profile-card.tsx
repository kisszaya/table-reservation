import { FC } from "react";
import { Avatar, Card, Stack } from "@mantine/core";

import { Text, Title } from "shared/ui";

interface Args {
  fullName: string;
  email: string;
  phone?: string;
  role?: string;
}

export const ProfileCard: FC<Args> = (props) => {
  const { role, phone, email, fullName } = props;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={5}>Your profile</Title>
      <Avatar radius="xl" size="xl" color="indigo" />
      <Stack spacing="xs">
        <Text>{fullName}</Text>
        <Text>{email}</Text>
        {phone && <Text>{phone}</Text>}
        {role && <Text>{role}</Text>}
      </Stack>
    </Card>
  );
};

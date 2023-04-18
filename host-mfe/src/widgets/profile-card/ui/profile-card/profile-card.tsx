import { FC } from "react";
import { Avatar, Card, Divider, Group, Stack } from "@mantine/core";

import { TEXT_INPUT_TYPE, TextInput, Title } from "shared/ui";

import { useStyles } from "./styles";

interface Args {
  fullName: string;
  email: string;
  phone?: string;
  role?: string;
  title: string;
  restaurantName?: string;
}

export const ProfileCard: FC<Args> = (props) => {
  const { role, phone, email, fullName, title, restaurantName } = props;
  const { classes } = useStyles();

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >
      <Group align={"start"} position={"apart"}>
        <Title order={6}>{title}</Title>
        <Avatar radius="xl" size="lg" color="indigo" />
      </Group>
      <Divider my="sm" />
      <Stack spacing="xs">
        <TextInput
          inputType={TEXT_INPUT_TYPE.IMMUTABLE}
          label="Full name"
          value={fullName}
          disabled
        />
        <TextInput
          inputType={TEXT_INPUT_TYPE.IMMUTABLE}
          label="Email"
          value={email}
          disabled
        />
        {restaurantName && (
          <TextInput
            inputType={TEXT_INPUT_TYPE.IMMUTABLE}
            label="Restaurant name"
            value={restaurantName}
            disabled
          />
        )}
        {phone && (
          <TextInput
            inputType={TEXT_INPUT_TYPE.IMMUTABLE}
            label="Phone"
            value={phone}
            disabled
          />
        )}
        {role && (
          <TextInput
            inputType={TEXT_INPUT_TYPE.IMMUTABLE}
            label="Role"
            value={role}
            disabled
          />
        )}
      </Stack>
    </Card>
  );
};

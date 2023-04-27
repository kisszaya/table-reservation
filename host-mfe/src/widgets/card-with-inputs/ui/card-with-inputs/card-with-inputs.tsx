import { Avatar, Card, Divider, Group, Stack } from "@mantine/core";

import { TEXT_INPUT_TYPE, TextInput, Title } from "shared/ui";

import { ICardWithInputProps } from "../../types";

import { useStyles } from "./styles";

export const CardWithInputs = (props: ICardWithInputProps) => {
  const { title, fields } = props;

  const { classes } = useStyles();

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >
      <Group align="start" position="apart">
        <Title order={6}>{title}</Title>
        <Avatar radius="xl" size="lg" color="indigo" />
      </Group>
      <Divider my="sm" />
      <Stack spacing="xs">
        {fields.map((field) => (
          <TextInput
            key={field.label}
            inputType={TEXT_INPUT_TYPE.IMMUTABLE}
            label={field.label}
            value={field.value}
            disabled
          />
        ))}
      </Stack>
    </Card>
  );
};

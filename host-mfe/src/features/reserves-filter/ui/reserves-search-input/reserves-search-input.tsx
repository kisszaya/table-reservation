import React from "react";
import { ActionIcon, useMantineTheme } from "@mantine/core";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import { TextInput } from "shared/ui";

export const ReservesSearchInput = () => {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      placeholder="Guest phone number or name"
      radius={theme.radius.xl}
      rightSection={
        <ActionIcon
          size={30}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          <IconArrowRight size="1.1rem" stroke={1.5} />
        </ActionIcon>
      }
    />
  );
};

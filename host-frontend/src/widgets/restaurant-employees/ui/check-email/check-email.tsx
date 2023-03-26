import { FC, useCallback } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { Group } from "@mantine/core";

import { Button, TextInput } from "shared/ui";
import { usersStore } from "entities/users";

const { usersInfo } = usersStore;

interface Args {
  email: string;
  setEmail: (email: string) => void;
  isLoading: boolean;
}

export const CheckEmail: FC<Args> = (props) => {
  const { setEmail, email, isLoading } = props;

  const find = useCallback(() => {
    usersInfo.events.findUserByEmail(email);
  }, [email]);

  return (
    <Group noWrap>
      <TextInput
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button
        rightIcon={<IconArrowRight size={16} />}
        loading={isLoading}
        onClick={find}
      >
        Check email
      </Button>
    </Group>
  );
};

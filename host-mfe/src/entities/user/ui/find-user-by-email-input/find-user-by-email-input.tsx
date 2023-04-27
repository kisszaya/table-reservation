import { ButtonProps, Group, Stack, TextInputProps } from "@mantine/core";
import { useEffect } from "react";
import { useStore } from "effector-react";

import { Button, Text, TextInput } from "shared/ui";

import {
  $usersInfo,
  $usersInfoIsLoading,
  $usersInfoStatus,
  findUserByEmail,
  resetUsersInfoStatus,
} from "../../model";
import { USER_INFO_STATUS } from "../../const";

interface Props {
  inputProps?: TextInputProps;
  buttonProps?: ButtonProps;
  email: string;
  setEmail: (email: string) => void;
}

export const FindUserByEmailInput = (props: Props) => {
  const { inputProps, buttonProps, email, setEmail } = props;

  const status = useStore($usersInfoStatus);
  const isLoading = useStore($usersInfoIsLoading);
  const usersInfo = useStore($usersInfo);

  useEffect(() => {
    resetUsersInfoStatus();
  }, []);

  const onClick = () => {
    findUserByEmail(email);
  };

  return (
    <Stack>
      <Group noWrap>
        <TextInput
          {...inputProps}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={onClick} {...buttonProps} loading={isLoading} />
      </Group>
      {status === USER_INFO_STATUS.NOT_FOUND && (
        <Text>User with existed email not exist</Text>
      )}
      {usersInfo[email] && <Text>User with existed email exist</Text>}
    </Stack>
  );
};

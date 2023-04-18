import { useEffect, useState } from "react";
import { Card, Stack } from "@mantine/core";
import { useStore } from "effector-react";

import { usersStore } from "entities/users";
import { Text, Title } from "shared/ui";
import { AddEmployeeForm, CheckEmail } from "..";

const { usersInfo } = usersStore;
const { USERS_INFO_STATUS } = usersInfo;

export const AddEmployeeSection = () => {
  const [email, setEmail] = useState<string>("");
  const usersInfoStatus = useStore(usersInfo.stores.$usersInfoStatus);
  const isLoading = useStore(usersInfo.stores.$isUsersInfoLoading);
  const users = useStore(usersInfo.stores.$usersInfo);

  useEffect(() => {
    usersInfo.events.resetUsersInfoStatus();
  }, []);

  const isNotFound = usersInfoStatus === USERS_INFO_STATUS.NOT_FOUND;
  const foundUser = users[email];

  return (
    <Card withBorder style={{width: '100%'}}>
      <Stack spacing="xs">
        <Title size="xs">Add employee</Title>
        <CheckEmail email={email} setEmail={setEmail} isLoading={isLoading} />
        {isNotFound && <Text>User with existed email doesn't exist</Text>}
        {foundUser && <Text>User with existed email exist</Text>}
        {(isNotFound || foundUser) && (
          <AddEmployeeForm userInfo={foundUser ?? { email }} />
        )}
      </Stack>
    </Card>
  );
};

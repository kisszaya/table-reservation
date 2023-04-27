import { useState } from "react";
import { Card, Stack } from "@mantine/core";
import { useStore } from "effector-react";

import {
  FindUserByEmailInput,
  USER_INFO_STATUS,
  userStore,
} from "entities/user";
import { Title } from "shared/ui";
import { IconArrowRight } from "@tabler/icons-react";
import { AddEmployeeForm } from "features/employee-add";

export const AddEmployee = () => {
  const [email, setEmail] = useState<string>("");
  const status = useStore(userStore.$usersInfoStatus);
  const users = useStore(userStore.$usersInfo);

  const foundUser = users[email];

  const showForm = foundUser || status === USER_INFO_STATUS.NOT_FOUND;

  return (
    <Card withBorder style={{ width: "100%" }}>
      <Stack spacing="xs">
        <Title size="xs">Add employee</Title>
        <FindUserByEmailInput
          inputProps={{
            placeholder: "Email",
          }}
          buttonProps={{
            rightIcon: <IconArrowRight size={16} />,
          }}
          email={email}
          setEmail={setEmail}
        />
        {showForm && <AddEmployeeForm userInfo={foundUser ?? { email }} />}
      </Stack>
    </Card>
  );
};

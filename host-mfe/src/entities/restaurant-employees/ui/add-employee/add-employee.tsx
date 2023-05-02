import { useState } from "react";
import { Card, Stack } from "@mantine/core";
import { useStore } from "effector-react";
import { IconArrowRight } from "@tabler/icons-react";

import {
  FindUserByEmailInput,
  USER_INFO_STATUS,
  userStore,
} from "entities/user";
import { Title, TITLE_VARIANT } from "shared/ui";
import { AddEmployeeForm } from "features/employee-add";

export const AddEmployee = () => {
  const [email, setEmail] = useState<string>("");
  const status = useStore(userStore.$usersInfoStatus);
  const users = useStore(userStore.$usersInfo);

  const foundUser = users[email];

  const showForm = [
    USER_INFO_STATUS.NOT_FOUND,
    USER_INFO_STATUS.FOUND,
  ].includes(status);

  return (
    <Stack>
      <Title variant={TITLE_VARIANT.DRAWER_TITLE}>Добавление сотрудника</Title>
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
    </Stack>
  );
};

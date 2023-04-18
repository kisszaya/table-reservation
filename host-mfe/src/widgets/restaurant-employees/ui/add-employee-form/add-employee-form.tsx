import { FC } from "react";
import { useForm } from "@mantine/form";
import { NativeSelect, Stack } from "@mantine/core";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { useAddEmployee, FormValues } from "../../lib";
import { Button, TextInput } from "shared/ui";

interface Args {
  userInfo: Responses.GetUserInfo | { email: string };
}

export const AddEmployeeForm: FC<Args> = (props) => {
  const { userInfo } = props;
  const { inputKeys, initialValues, selectKeys } = useAddEmployee({ userInfo });
  const form = useForm<FormValues>({
    initialValues,
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <Stack>
        <TextInput {...inputKeys.email} />
        <TextInput
          {...inputKeys.firstName}
          {...form.getInputProps("firstName")}
        />
        <TextInput
          {...inputKeys.lastName}
          {...form.getInputProps("lastName")}
        />
        <TextInput {...inputKeys.phone} {...form.getInputProps("phone")} />
        {!("fullName" in userInfo) && (
          <TextInput
            {...inputKeys.password}
            {...form.getInputProps("password")}
          />
        )}
        <NativeSelect {...selectKeys.roles} {...form.getInputProps("roles")} />
        <Button fullWidth mt="xl" type="submit">
          Add user
        </Button>
      </Stack>
    </form>
  );
};

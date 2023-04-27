import { FC } from "react";
import { useForm } from "@mantine/form";
import { NativeSelect, Stack } from "@mantine/core";

import { Button, TextInput } from "shared/ui";
import {
  useFormInitialValues,
  formSelectKeys,
  useFormInputKeys,
} from "../../const";
import { IAddEmployeeProps, IFormValues } from "../../types";
export const AddEmployeeForm: FC<IAddEmployeeProps> = (props) => {
  const initialValues = useFormInitialValues(props);
  const inputKeys = useFormInputKeys(props);
  const form = useForm<IFormValues>({
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
        {!("fullName" in props.userInfo) && (
          <TextInput
            {...inputKeys.password}
            {...form.getInputProps("password")}
          />
        )}
        <NativeSelect
          {...formSelectKeys.roles}
          {...form.getInputProps("roles")}
        />
        <Button fullWidth mt="xl" type="submit">
          Add user
        </Button>
      </Stack>
    </form>
  );
};

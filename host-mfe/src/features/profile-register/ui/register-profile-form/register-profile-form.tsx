import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCallback } from "react";

import { Button, PasswordInput, TextInput } from "shared/ui";

import { formInputKeys, formInitialValues } from "../../const";
import { registerFx } from "../../model";
import { IFormValues } from "../../types";

export const RegisterProfileForm = () => {
  const form = useForm<IFormValues>({
    initialValues: formInitialValues,
  });

  const onSubmit = useCallback(async (formValues: IFormValues) => {
    await registerFx({ formValues });
  }, []);

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack>
        <TextInput
          {...formInputKeys.firstName}
          {...form.getInputProps("firstName")}
        />
        <TextInput
          {...formInputKeys.lastName}
          {...form.getInputProps("lastName")}
        />
        <TextInput {...formInputKeys.email} {...form.getInputProps("email")} />
        <PasswordInput
          {...formInputKeys.password}
          {...form.getInputProps("password")}
        />
        <TextInput {...formInputKeys.phone} {...form.getInputProps("phone")} />
        <Button fullWidth mt="xl" type="submit">
          Register
        </Button>
      </Stack>
    </form>
  );
};

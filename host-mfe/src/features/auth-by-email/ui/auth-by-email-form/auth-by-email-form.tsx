import { useForm } from "@mantine/form";
import { Anchor, Stack } from "@mantine/core";
import { useCallback } from "react";
import { useRouter } from "next/router";

import { Button, PasswordInput, TextInput } from "shared/ui";

import { loginFx } from "../../model";
import { IFormValues } from "../../types";
import { formInputKeys, formInitialValues } from "../../const";

export const AuthByEmailForm = () => {
  const { push } = useRouter();
  const form = useForm<IFormValues>({
    initialValues: formInitialValues,
  });

  const login = useCallback(
    async (values: IFormValues) => {
      await loginFx({ formValues: values, push });
    },
    [push]
  );

  return (
    <form onSubmit={form.onSubmit(login)}>
      <Stack>
        <TextInput {...formInputKeys.email} {...form.getInputProps("email")} />
        <PasswordInput
          {...formInputKeys.password}
          {...form.getInputProps("password")}
        />
        <Anchor component="button" size="sm" align="center" mt="xs">
          Forgot password?
        </Anchor>
        <Button fullWidth mt="xl" type="submit">
          Sign in
        </Button>
      </Stack>
    </form>
  );
};

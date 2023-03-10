import { ReactElement } from "react";
import { Anchor, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

import { FormContainer, PublicLayout } from "widgets";
import { TextInput, PasswordInput, Button } from "shared/ui";
import { LoginRedirect } from "./ui";
import { useLogin } from "./lib";
import { FormValues, initialValues, inputKeys } from "./const";

const Login = () => {
  const { login } = useLogin();
  const form = useForm<FormValues>({
    initialValues,
  });

  return (
    <FormContainer title="Login" description={<LoginRedirect />}>
      <form onSubmit={form.onSubmit(login)}>
        <Stack>
          <TextInput {...inputKeys.email} {...form.getInputProps("email")} />
          <PasswordInput
            {...inputKeys.password}
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
    </FormContainer>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Login;

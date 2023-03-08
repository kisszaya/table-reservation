import { ReactElement } from "react";
import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Requests } from "kisszaya-table-reservation/lib/requests";

import { FormContainer, PublicLayout } from "widgets";
import { Button, PasswordInput, TextInput } from "shared/ui";
import { initialValues, inputKeys } from "./const";
import { RegisterRedirect } from "./ui";
import { useRegister } from "./lib";

const Register = () => {
  const { register } = useRegister();
  const form = useForm<Requests.UserRegister>({
    initialValues,
  });

  return (
    <FormContainer title="Register" description={<RegisterRedirect />}>
      <form onSubmit={form.onSubmit(register)}>
        <Stack>
          <TextInput
            {...inputKeys.firstName}
            {...form.getInputProps("firstName")}
          />
          <TextInput
            {...inputKeys.lastName}
            {...form.getInputProps("lastName")}
          />
          <TextInput {...inputKeys.email} {...form.getInputProps("email")} />
          <PasswordInput
            {...inputKeys.password}
            {...form.getInputProps("password")}
          />
          <TextInput {...inputKeys.phone} {...form.getInputProps("phone")} />
          <Button fullWidth mt="xl" type="submit">
            Register
          </Button>
        </Stack>
      </form>
    </FormContainer>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Register;

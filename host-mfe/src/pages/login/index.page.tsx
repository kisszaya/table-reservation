import { ReactElement } from "react";

import {
  AuthByEmailForm,
  RedirectToRegisterLabel,
} from "features/auth-by-email";

import { PublicLayout } from "widgets/public-layout";
import { AuthFormContainer } from "entities/auth";

const Login = () => {
  return (
    <AuthFormContainer title="Login" description={<RedirectToRegisterLabel />}>
      <AuthByEmailForm />
    </AuthFormContainer>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Login;

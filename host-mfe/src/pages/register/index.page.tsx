import { ReactElement } from "react";

import { PublicLayout } from "widgets/public-layout";
import {
  RedirectToLoginLabel,
  RegisterProfileForm,
} from "features/profile-register";
import { AuthFormContainer } from "entities/auth";

const Register = () => {
  return (
    <AuthFormContainer title="Register" description={<RedirectToLoginLabel />}>
      <RegisterProfileForm />
    </AuthFormContainer>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Register;

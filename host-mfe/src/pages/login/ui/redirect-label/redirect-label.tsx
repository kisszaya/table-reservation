import { Anchor } from "@mantine/core";
import { useRouter } from "next/router";

import { PUBLIC_PATH } from "shared/config";

export const LoginRedirect = () => {
  const { push } = useRouter();

  const onRedirect = async () => {
    await push(PUBLIC_PATH.REGISTER);
  };

  return (
    <>
      Do not have an account yet?{" "}
      <Anchor size="sm" component="button" onClick={onRedirect}>
        Create account
      </Anchor>
    </>
  );
};

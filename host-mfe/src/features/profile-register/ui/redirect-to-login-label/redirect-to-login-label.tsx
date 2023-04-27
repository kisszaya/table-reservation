import { useRouter } from "next/router";
import { Anchor } from "@mantine/core";

import { PUBLIC_PATH } from "shared/config";

export const RedirectToLoginLabel = () => {
  const { push } = useRouter();

  const onRedirect = async () => {
    await push(PUBLIC_PATH.LOGIN);
  };

  return (
    <>
      Do you already have an account?{" "}
      <Anchor size="sm" component="button" onClick={onRedirect}>
        Login to account
      </Anchor>
    </>
  );
};

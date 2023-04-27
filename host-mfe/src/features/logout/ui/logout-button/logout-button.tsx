import { Button } from "@mantine/core";
import { useCallback } from "react";
import { useRouter } from "next/router";

import { logoutFx } from "../../model";

export const LogoutButton = () => {
  const { push } = useRouter();

  const onLogout = useCallback(async () => {
    await logoutFx({ push });
  }, [push]);

  return (
    <Button onClick={onLogout} color="dark">
      Logout button
    </Button>
  );
};

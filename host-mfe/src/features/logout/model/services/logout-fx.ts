import { NextRouter } from "next/router";

import { PUBLIC_PATH } from "shared/config";
import { authEvents } from "entities/auth";

import { logoutUser } from "../requests";

interface Props {
  push: NextRouter["push"];
}

export const logoutFx = async (props: Props) => {
  const { push } = props;

  const { data } = await logoutUser();

  if (data.status === "success") {
    authEvents.removeAccessToken();
    await push(PUBLIC_PATH.LANDING);
  }
};

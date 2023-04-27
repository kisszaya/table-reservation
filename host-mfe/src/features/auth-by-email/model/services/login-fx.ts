import { NextRouter } from "next/router";

import { generateFingerprint } from "shared/lib";
import { api, apiWithoutInterceptors } from "shared/api";
import { PRIVATE_PATH } from "shared/config";

import { loginUser } from "..";
import { updateToken } from "shared/lib/auth";
import { IFormValues } from "../../types";

interface Props {
  push: NextRouter["push"];
  formValues: IFormValues;
}

export const loginFx = async (props: Props) => {
  const { push, formValues } = props;

  const fingerprint = await generateFingerprint();

  const values = {
    ...formValues,
    fingerprint,
  };

  const { data } = await loginUser(values);

  if (data.accessToken) {
    updateToken(data.accessToken);

    api.defaults.withCredentials = true;
    apiWithoutInterceptors.defaults.withCredentials = true;
    await push(PRIVATE_PATH.PROFILE);
  }
};

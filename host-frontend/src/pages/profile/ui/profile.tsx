import { FC, useState } from "react";

import { useTranslation } from "features/locales";
import { getFingerprint } from "features/fingerprint";
import { authApi } from "entities/auth";
import { usersApi } from "entities/users";

export const Profile: FC = () => {
  const { t } = useTranslation();
  const [info, setInfo] = useState("");

  const getMeInfo = async () => {
    const res = await usersApi.meInfo();
    setInfo(JSON.stringify(res.data));
  };

  const updateRefresh = async () => {
    const fingerprint = await getFingerprint();
    await authApi.updateTokens({ fingerprint });
  };

  const logout = async () => {
    const res = await authApi.logout();
  };

  return (
    <div>
      <h1>{t("test")}</h1>
      {info}
      <button onClick={getMeInfo}>Get me</button>
      <button onClick={updateRefresh}>Update tokens</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

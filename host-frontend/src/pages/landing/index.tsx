import { useState } from "react";

import { usersApi } from "entities/users";
import { authApi } from "entities/auth";
import { getFingerprint } from "features/fingerprint";

const Landing = () => {
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
      {info}
      <button onClick={getMeInfo}>Get me</button>
      <button onClick={updateRefresh}>Update tokens</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Landing;

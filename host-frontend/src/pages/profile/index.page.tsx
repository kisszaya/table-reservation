import { FC } from "react";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { useServerAuthorization } from "features/authorization";
import { LocaleNamespaces } from "shared/types";
import { Profile as ProfileFC } from "./ui";
import { serverRoutes } from "shared/api";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { isAuthorized, redirect, access } = useServerAuthorization(context);

  if (!isAuthorized) {
    return { redirect };
  }

  const { data: me } = await axios.get<Responses.GetMeInfo>(
    "http://localhost:3333/api" + serverRoutes.me,
    { withCredentials: true, headers: { Authorization: `Bearer ${access}` } }
  );

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LocaleNamespaces.COMMON,
      ])),
      me,
    },
  };
};

export interface ProfileArgs {
  me: Responses.GetMeInfo;
}

const Profile: FC<ProfileArgs> = ({ me }) => {
  return <ProfileFC me={me}/>;
};

export default Profile;

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

import { useServerAuthorization } from "features/authorization";
import { LocaleNamespaces } from "shared/types";
import { Profile as ProfileFC } from "./ui";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { isAuthorized, redirect } = useServerAuthorization(context);

  if (!isAuthorized) {
    return { redirect };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LocaleNamespaces.COMMON,
      ])),
    },
  };
};

const Profile = () => {
  return <ProfileFC />;
};

export default Profile;

import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { LOCAL_NAMESPACES } from "shared/types";
import { updateToken, serverAuthorization } from "shared/lib/auth";
import { meServerApi, meEvents, meStore } from "entities/me";
import { DynamicPageLoader } from "shared/lib/ui";

import { Profile as ProfileFC } from "./ui/profile";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { isAuthorized, redirect, access } = await serverAuthorization(context);

  if (!isAuthorized) {
    return { redirect };
  }

  const { data: me } = await meServerApi.getMeInfo(access as string);
  const {
    data: { restaurants },
  } = await meServerApi.getMeRestaurants(access as string);

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LOCAL_NAMESPACES.COMMON,
      ])),
      me,
      accessToken: access,
      restaurants,
    },
  };
};

export interface ProfileArgs {
  me: Responses.GetMeInfo;
  restaurants: Responses.GetUserRestaurants["restaurants"];
  accessToken: string;
}

const Profile: FC<ProfileArgs> = (props) => {
  const { me, accessToken, restaurants } = props;

  useEffect(() => {
    updateToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    meEvents.changeMeInfo(me);
  }, [me]);

  useEffect(() => {
    meEvents.setRestaurants(restaurants);
  }, [restaurants]);

  return (
    <DynamicPageLoader store={meStore.$meInfo}>
      <DynamicPageLoader store={meStore.$restaurants}>
        <ProfileFC />
      </DynamicPageLoader>
    </DynamicPageLoader>
  );
};

export default Profile;

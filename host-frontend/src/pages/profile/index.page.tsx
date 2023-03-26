import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { updateToken, useServerAuthorization } from "features/authorization";
import { LocaleNamespaces } from "shared/types";
import { Profile as ProfileFC } from "./ui";
import { usersServerSideApi, usersStore } from "entities/users";
import {
  restaurantsServerSideApi,
  restaurantsStore,
} from "entities/restaurants";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { isAuthorized, redirect, access } = await useServerAuthorization(
    context
  );

  if (!isAuthorized) {
    return { redirect };
  }

  const { data: me } = await usersServerSideApi.meInfo(access as string);
  const {
    data: { restaurants },
  } = await restaurantsServerSideApi.getMeRestaurants(access as string);

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LocaleNamespaces.COMMON,
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
    usersStore.changeMeInfo(me);
  }, [me]);

  useEffect(() => {
    restaurantsStore.restaurants.events.setRestaurants(restaurants);
  }, [restaurants]);

  return <ProfileFC />;
};

export default Profile;

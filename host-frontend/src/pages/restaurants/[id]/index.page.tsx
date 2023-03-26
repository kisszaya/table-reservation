import { GetServerSideProps } from "next";
import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { LocaleNamespaces } from "shared/types";
import { Restaurant as RestaurantFC } from "../ui";
import { updateToken, useServerAuthorization } from "features/authorization";
import { usersServerSideApi, usersStore } from "entities/users";
import {
  restaurantsServerSideApi,
  restaurantsStore,
} from "entities/restaurants";
import {query} from "express";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { isAuthorized, redirect, access } = await useServerAuthorization(
    context
  );

  if (!isAuthorized) {
    return { redirect };
  }


  const { data: me } = await usersServerSideApi.meInfo(access as string);
  const { data: restaurant } = await restaurantsServerSideApi.getRestaurantById(
    {
      accessToken: access as string,
      restaurant_id: Number(context.query.id),
    }
  );

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LocaleNamespaces.COMMON,
      ])),
      me,
      restaurant,
      accessToken: access,
    },
  };
};

export interface RestaurantArgs {
  me: Responses.GetMeInfo;
  restaurant: Responses.GetRestaurantById;
  accessToken: string;
}

const Restaurant: FC<RestaurantArgs> = (props) => {
  const { me, accessToken, restaurant } = props;

  useEffect(() => {
    updateToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    usersStore.changeMeInfo(me);
  }, [me]);

  useEffect(() => {
    restaurantsStore.restaurants.events.addRestaurant(restaurant);
  }, [restaurant]);

  return <RestaurantFC />;
};

export default Restaurant;

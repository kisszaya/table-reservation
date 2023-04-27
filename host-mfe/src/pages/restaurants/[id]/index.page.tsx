import { GetServerSideProps } from "next";
import { FC, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Responses } from "kisszaya-table-reservation/lib/responses";

import { LOCAL_NAMESPACES } from "shared/types";
import { meEvents, meServerApi, meStore } from "entities/me";
import {
  restaurantEvents,
  restaurantServerApi,
  restaurantStore,
} from "entities/restaurant";
import { serverAuthorization, updateToken } from "shared/lib/auth";
import { DynamicPageLoader } from "shared/lib/ui";

import { Restaurant as RestaurantFC } from "../ui";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { isAuthorized, redirect, access } = await serverAuthorization(context);

  if (!isAuthorized) {
    return { redirect };
  }

  const { data: me } = await meServerApi.getMeInfo(access as string);
  const { data: restaurant } = await restaurantServerApi.getRestaurantById({
    accessToken: access as string,
    restaurant_id: Number(context.query.id),
  });

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LOCAL_NAMESPACES.COMMON,
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
    meEvents.changeMeInfo(me);
  }, [me]);

  useEffect(() => {
    restaurantEvents.setRestaurantInfo(restaurant);
  }, [restaurant]);

  return (
    <DynamicPageLoader store={meStore.$meInfo}>
      <DynamicPageLoader store={restaurantStore.$restaurantInfo}>
        <RestaurantFC />
      </DynamicPageLoader>
    </DynamicPageLoader>
  );
};

export default Restaurant;

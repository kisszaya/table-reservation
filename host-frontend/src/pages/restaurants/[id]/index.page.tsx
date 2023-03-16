import { GetServerSideProps } from "next";
import { FC } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { LocaleNamespaces } from "shared/types";
import { Restaurant as RestaurantFC } from "../ui";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LocaleNamespaces.COMMON,
      ])),
    },
  };
};

export interface RestaurantArgs {}

const Restaurant: FC<RestaurantArgs> = (props) => {
  return <RestaurantFC />;
};

export default Restaurant;

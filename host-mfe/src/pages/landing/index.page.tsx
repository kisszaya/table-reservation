import { ReactElement } from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { LOCAL_NAMESPACES } from "shared/types";
import { Landing as LandingFC } from "./ui/landing";
import { PublicLayout } from "widgets/public-layout";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LOCAL_NAMESPACES.COMMON,
      ])),
    },
  };
};

const Landing = () => {
  return <LandingFC />;
};

Landing.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Landing;

import { ReactElement } from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { LocaleNamespaces } from "shared/types";
import { Landing as LandingFC } from "./ui";
import { PublicLayout } from "../../widgets";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LocaleNamespaces.COMMON,
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

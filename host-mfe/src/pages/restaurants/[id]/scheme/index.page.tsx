import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { LOCAL_NAMESPACES } from "shared/types";
// import { Scheme as SchemeFC } from "../../ui";

// @ts-ignore
const SampleComponent = dynamic(() => import("tableConstructor/Scheme"), {
  ssr: false,
});

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LOCAL_NAMESPACES.COMMON,
      ])),
    },
  };
};

export interface SchemeArgs {}

const Scheme = (props: SchemeArgs) => {
  // return <SchemeFC />;
  return <SampleComponent />;
};

export default Scheme;

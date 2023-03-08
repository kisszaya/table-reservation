import "@module-federation/nextjs-mf/src/include-defaults";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { PublicLayout } from "widgets";
import { Providers } from "app/providers";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = (props: AppPropsWithLayout) => {
  const { Component, pageProps } = props;

  const getLayout =
    Component.getLayout || ((page) => <PublicLayout>{page}</PublicLayout>);

  return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>;
};

export default appWithTranslation(App);

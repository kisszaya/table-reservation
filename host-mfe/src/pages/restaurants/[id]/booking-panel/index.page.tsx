import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { BookingLayout } from "widgets/booking-layout";
import { LOCAL_NAMESPACES } from "shared/types";
import { BookingPanel as BookingPanelFC } from "../../ui";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        LOCAL_NAMESPACES.COMMON,
      ])),
    },
  };
};

export interface BookingPanelArgs {}

const BookingPanel = (props: BookingPanelArgs) => {
  return <BookingPanelFC />;
};

BookingPanel.getLayout = function getLayout(page: ReactElement) {
  return <BookingLayout>{page}</BookingLayout>;
};

export default BookingPanel;

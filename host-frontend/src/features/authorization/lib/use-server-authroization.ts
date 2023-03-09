import Cookies from "cookies";
import decodeJwt from "jwt-decode";
import { IJWTPayload } from "kisszaya-table-reservation/lib/interfaces";
import { GetServerSidePropsContext, Redirect } from "next/types";

import { PUBLIC_PATH } from "shared/config";

type ReturnedValue =
  | {
      isAuthorized: false;
      redirect: Redirect;
      access: false
    }
  | { isAuthorized: true; redirect: false, access: string };
export const useServerAuthorization = ({
  req,
  res,
}: GetServerSidePropsContext): ReturnedValue => {
  const cookies = new Cookies(req, res);
  const refresh = cookies.get("refresh");
  const access = cookies.get("access")

  if (!refresh || !access) {
    return {
      isAuthorized: false,
      access: false,
      redirect: {
        destination: PUBLIC_PATH.LOGIN,
        permanent: true,
      },
    };
  }

  const { expiresIn } = decodeJwt<IJWTPayload>(refresh ?? "");
  if (!expiresIn || new Date() >= new Date(expiresIn)) {
    return {
      isAuthorized: false,
      access: false,
      redirect: {
        destination: PUBLIC_PATH.LOGIN,
        permanent: true,
      },
    };
  }

  return {
    isAuthorized: true,
    redirect: false,
    access
  };
};

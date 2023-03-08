import Cookies from "cookies";
import decodeJwt from "jwt-decode";
import { IJWTPayload } from "kisszaya-table-reservation/lib/interfaces";
import {GetServerSidePropsContext, Redirect} from "next/types";

import { PUBLIC_PATH } from "shared/config";

type ReturnedValue =
  | {
      isAuthorized: false;
      redirect: Redirect
    }
  | { isAuthorized: true; redirect: false };
export const useServerAuthorization = ({
  req,
  res,
}: GetServerSidePropsContext): ReturnedValue => {
  const cookies = new Cookies(req, res);
  const token = cookies.get("refresh");

  if (!token) {
    return {
      isAuthorized: false,
      redirect: {
        destination: PUBLIC_PATH.LOGIN,
        permanent: true,
      },
    };
  }

  const { expiresIn } = decodeJwt<IJWTPayload>(token ?? "");
  if (!expiresIn || new Date() >= new Date(expiresIn)) {
    return {
      isAuthorized: false,
      redirect: {
        destination: PUBLIC_PATH.LOGIN,
        permanent: true,
      },
    };
  }

  return {
    isAuthorized: true,
    redirect: false,
  };
};

import decodeJwt from "jwt-decode";
import axios from "axios";
import { Responses } from "kisszaya-table-reservation/lib/responses";
import { IJWTPayload } from "kisszaya-table-reservation/lib/interfaces";
import { GetServerSidePropsContext, Redirect } from "next/types";

import { PUBLIC_PATH } from "../../config";
import { serverRoutes } from "../../api";

function getCookie(cookies: string, name: string) {
  const res: string[] = [];
  const parts = cookies.split(`; `);
  parts.forEach((el) => {
    const parts = el.split(`=`);
    if (parts[0] === name) {
      res.push(parts[1]);
    }
  });

  return res[1] ?? res[0];
}

type ReturnedValue =
  | {
      isAuthorized: false;
      redirect: Redirect;
      access: false;
    }
  | { isAuthorized: true; redirect: false; access: string };

export const serverAuthorization = async ({
  req,
  res,
}: GetServerSidePropsContext): Promise<ReturnedValue> => {
  const refresh = getCookie(req.headers.cookie ?? "", "refresh");
  const access = getCookie(req.headers.cookie ?? "", "access");

  if (!refresh) {
    return redirect;
  }

  const { expiresIn: refreshExpiresIn } = decodeJwt<IJWTPayload>(refresh);

  if (!refreshExpiresIn || new Date() >= new Date(refreshExpiresIn)) {
    return redirect;
  }

  if (!access) {
    const { tokens, isRedirect } = await getRefresh(refresh);
    if (isRedirect) {
      return redirect;
    }
    return goodRedirect(tokens.accessToken);
  }

  const { expiresIn: accessExpiresIn } = decodeJwt<IJWTPayload>(access);

  if (!accessExpiresIn) {
    return redirect;
  }

  if (new Date() >= new Date(accessExpiresIn)) {
    const { tokens, isRedirect } = await getRefresh(refresh);
    if (isRedirect) {
      return redirect;
    }
    return goodRedirect(tokens.accessToken);
  }

  return goodRedirect(access);
};

const redirect: {
  isAuthorized: false;
  redirect: Redirect;
  access: false;
} = {
  isAuthorized: false,
  access: false,
  redirect: {
    destination: PUBLIC_PATH.LOGIN,
    permanent: false,
  },
};

const goodRedirect = (
  accessToken: string
): { isAuthorized: true; redirect: false; access: string } => ({
  isAuthorized: true,
  redirect: false,
  access: accessToken,
});

type GetRefresh =
  | { isRedirect: true; tokens: false }
  | {
      isRedirect: false;
      tokens: { accessToken: string; refreshToken: string };
    };

const getRefresh = async (refresh: string): Promise<GetRefresh> => {
  if (!process.env.DEFAULT_SERVER_FINGERPRINT) {
    throw new Error(
      `Environment variable DEFAULT_SERVER_FINGERPRINT is not defined`
    );
  }

  try {
    const { data: tokensData } = await axios.post<Responses.UpdateRefreshToken>(
      "http://localhost:3333/api" + serverRoutes.refresh,
      { fingerprint: "serverFingerprint" },
      {
        withCredentials: true,
        headers: {
          Cookie: `refresh=${refresh}`,
        },
      }
    );

    if (!tokensData?.accessToken || !tokensData?.refreshToken) {
      return { tokens: false, isRedirect: true };
    }

    return { tokens: tokensData, isRedirect: false };
  } catch (e) {
    console.log("TEST USA ERROR", e);
    return { tokens: false, isRedirect: true };
  }
};

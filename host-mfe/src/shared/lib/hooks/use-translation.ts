import { useCallback } from "react";
import { useTranslation as useT } from "next-i18next";

import { LOCAL_NAMESPACES } from "shared/types";

type ReturnT = {
  t: (ts: string, options?: Record<string, unknown>) => string;
};

export const useTranslation = (ns?: LOCAL_NAMESPACES): ReturnT => {
  const { t: tr } = useT(ns || LOCAL_NAMESPACES.COMMON);

  const t = useCallback((ts: string, options = {}) => tr(ts, options), [tr]);

  return { t };
};

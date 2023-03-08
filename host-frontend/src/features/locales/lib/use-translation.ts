import { useCallback } from "react";
import { useTranslation as useT } from "next-i18next";

import { LocaleNamespaces } from "shared/types";

type ReturnT = {
  t: (ts: string, options?: Record<string, unknown>) => string;
};

export const useTranslation = (ns?: LocaleNamespaces): ReturnT => {
  const { t: tr } = useT(ns || LocaleNamespaces.COMMON);

  const t = useCallback((ts: string, options = {}) => tr(ts, options), [tr]);

  return { t };
};

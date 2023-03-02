import { ConfigService } from "@nestjs/config";
import {
  NestedKeyOf,
  resolveValueInObj,
} from "kisszaya-table-reservation/lib/backend-utils";

import { vars, varsDefaultValues } from "@/const/vars";
import * as process from "process";

export const envWrap =
  (configService: ConfigService) => (key: NestedKeyOf<typeof vars>) => {
    const env: string = resolveValueInObj(key, vars);
    const defaultValue: string | undefined = resolveValueInObj(
      key,
      varsDefaultValues
    );

    const value = configService.get(env) ?? defaultValue;
    if (value === undefined)
      throw new Error(`Environment variable ${env} is not defined`);

    return value;
  };

export const processEnv = (key: NestedKeyOf<typeof vars>) => {
  const env: string = resolveValueInObj(key, vars);
  const defaultValue: string | undefined = resolveValueInObj(
    key,
    varsDefaultValues
  );

  const value = process.env[env] ?? defaultValue;
  if (value === undefined)
    throw new Error(`Environment variable ${env} is not defined`);

  return value;
};

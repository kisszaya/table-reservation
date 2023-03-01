import { v4 as uuidV4 } from "uuid";
import { INestApplication } from "@nestjs/common";

import { INJECT_TYPES } from "@/types";

export const loggerMiddleware = (app: INestApplication) => (req, res, next) => {
  const asyncStorage = app.get(INJECT_TYPES.ASYNC_STORAGE);
  const traceId = req.headers["x-request-id"] || uuidV4();
  const store = new Map().set("traceId", traceId);

  asyncStorage.run(store, () => {
    next();
  });
};

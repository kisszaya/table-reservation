import { IEnvDefaultValues } from "kisszaya-table-reservation/lib/backend-utils";

export const vars = {
  SETUP: {
    NODE: "NODE_ENV",
    PORT: "PORT",
  },
  JWT: {
    ACCESS_SECRET: "JWT_ACCESS_TOKEN_SECRET",
    REFRESH_SECRET: "JWT_REFRESH_TOKEN_SECRET",
    ACCESS_EXPIRATION_TIME: "JWT_ACCESS_TOKEN_EXPIRATION_TIME",
    REFRESH_EXPIRATION_TIME: "JWT_REFRESH_TOKEN_EXPIRATION_TIME",
  },
  RMQ: {
    EXCHANGE: "AMQP_EXCHANGE",
    LOGIN: "AMQP_USER",
    PASSWORD: "AMQP_PASSWORD",
    HOST: "AMQP_HOSTNAME",
    PORT: "AMQP_PORT"
  },
};

export const varsDefaultValues: IEnvDefaultValues<typeof vars> = {
  SETUP: {
    PORT: "3001",
  },
};
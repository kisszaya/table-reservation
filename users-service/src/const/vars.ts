import { IEnvDefaultValues } from "kisszaya-table-reservation/lib/backend-utils";

export const vars = {
  SETUP: {
    NODE: "NODE_ENV",
    PORT: "PORT",
  },
  JWT: {
    SECRET: "JWT_SECRET",
  },
  RMQ: {
    EXCHANGE: "AMQP_EXCHANGE",
    LOGIN: "AMQP_USER",
    PASSWORD: "AMQP_PASSWORD",
    HOST: "AMQP_HOSTNAME",
    PORT: "AMQP_PORT",
    QUEUE: "AMQP_QUEUE",
  },
  POSTGRES: {
    USER: "POSTGRES_USER",
    PASSWORD: "POSTGRES_PASSWORD",
    NAME: "POSTGRES_NAME",
    HOST: "POSTGRES_HOST",
    PORT: "POSTGRES_PORT",
  },
};

export const varsDefaultValues: IEnvDefaultValues<typeof vars> = {
  SETUP: {
    PORT: "3000",
  },
};

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
  },
};

export const varsDefaultValues: IEnvDefaultValues<typeof vars> = {
  SETUP: {
    PORT: "3000",
  },
};

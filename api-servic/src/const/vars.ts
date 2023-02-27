import { IEnvDefaultValues } from "kisszaya-table-reservation/lib/backend-utils";

export const vars = {
  mode: "MODE",
  jwt: {
    secret: "JWT_SECRET",
  },
  rmq: {
    exchange: "AMQP_EXCHANGE",
    login: "AMQP_USER",
    password: "AMQP_PASSWORD",
    host: "AMQP_HOSTNAME",
  },
};

export const varsDefaultValues: IEnvDefaultValues<typeof vars> = {
  jwt: {
    secret: "",
  },
};

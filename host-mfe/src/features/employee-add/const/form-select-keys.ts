import { NativeSelectProps } from "@mantine/core";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";

import { IFormValues } from "../types";

export const formSelectKeys: Record<
  keyof Pick<IFormValues, "roles">,
  NativeSelectProps
> = {
  roles: {
    data: [USER_ROLE.HOSTESS, USER_ROLE.ADMINISTRATOR],
    required: true,
  },
};

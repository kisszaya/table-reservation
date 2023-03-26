import { NativeSelectProps, TextInputProps } from "@mantine/core";
import { Requests } from "kisszaya-table-reservation/lib/requests";
import { USER_ROLE } from "kisszaya-table-reservation/lib/interfaces";
import { Responses } from "kisszaya-table-reservation/lib/responses";

export type FormValues = Omit<Requests.AddRestaurantEmployee, "roles"> & {
  roles: USER_ROLE;
};

interface Args {
  userInfo: Responses.GetUserInfo | { email: string };
}

export const useAddEmployee = (props: Args) => {
  const { userInfo } = props;

  const inputKeys: Record<keyof Omit<FormValues, "roles">, TextInputProps> = {
    password: {
      placeholder: "password",
      required: true,
      disabled: "password" in userInfo,
    },
    email: {
      placeholder: "email",
      required: true,
      disabled: true,
      value: userInfo.email,
    },
    phone: {
      placeholder: "phone",
      required: true,
      disabled: "phone" in userInfo,
    },
    lastName: {
      placeholder: "last name",
      required: true,
      disabled: "fullName" in userInfo,
    },
    firstName: {
      placeholder: "first name",
      required: true,
      disabled: "fullName" in userInfo,
    },
  };

  const selectKeys: Record<keyof Pick<FormValues, "roles">, NativeSelectProps> =
    {
      roles: {
        data: [USER_ROLE.HOSTESS, USER_ROLE.ADMINISTRATOR],
        required: true,
      },
    };

  const initialValues: FormValues = {
    password: "",
    phone: "phone" in userInfo ? userInfo.phone : "",
    lastName: "fullName" in userInfo ? userInfo.fullName.split(" ")[1] : "",
    firstName: "fullName" in userInfo ? userInfo.fullName.split(" ")[0] : "",
    email: userInfo.email,
    roles: USER_ROLE.HOSTESS,
  };

  return { inputKeys, initialValues, selectKeys };
};

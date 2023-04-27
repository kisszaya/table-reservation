import { IFormValues } from "../../types";

import { registerProfile } from "..";

interface Props {
  formValues: IFormValues;
}

export const registerFx = async (props: Props) => {
  const { formValues } = props;
  await registerProfile(formValues);
};

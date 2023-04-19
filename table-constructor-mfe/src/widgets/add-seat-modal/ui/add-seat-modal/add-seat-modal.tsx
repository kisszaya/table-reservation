import { FC } from "react";

import { IAddSeatModalProps } from "../../types";

export const AddSeatModal: FC<IAddSeatModalProps> = (props) => {
  return <div>{JSON.stringify(props)}</div>;
};

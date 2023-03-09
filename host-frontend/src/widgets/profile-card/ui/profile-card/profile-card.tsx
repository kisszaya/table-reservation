import { FC } from "react";
import { Responses } from "kisszaya-table-reservation/lib/responses";

interface Args {
  me: Responses.GetMeInfo;
}

export const ProfileCard: FC<Args> = ({ me }) => {
  return <div>ProfileCard</div>;
};

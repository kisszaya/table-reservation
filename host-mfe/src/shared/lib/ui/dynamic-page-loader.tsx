import { Loader } from "@mantine/core";
import { Store } from "effector";
import { useStore } from "effector-react";
import { ReactNode } from "react";

interface Props {
  store: Store<any>;
  children: ReactNode;
}

export const DynamicPageLoader = (props: Props) => {
  const value = useStore(props.store);

  if (!value) return <Loader />;

  return <>{props.children}</>;
};

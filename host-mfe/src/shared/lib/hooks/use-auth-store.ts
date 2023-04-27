import { Store } from "effector";
import { useStore } from "effector-react";
import { useRouter } from "next/router";

export const useAuthStore = <Type>(store: Store<Type>): NonNullable<Type> => {
  const { push } = useRouter();
  const values = useStore(store);

  if (!values) {
    throw new Error("meow");
  }

  return values;
};

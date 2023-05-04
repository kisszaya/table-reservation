import { createEffect } from "effector";
import { getTags } from "../api";

const getTagsFx = createEffect(async () => {
  return await getTags();
});

export { getTagsFx };

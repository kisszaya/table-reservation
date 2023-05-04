import { createStore } from "effector";

import { getTagsFx } from "../effects";
import { addTag, addTags } from "../events";

const $tags = createStore<{ value: string; label: string }[]>([]);
$tags.on(getTagsFx.doneData, (_, payload) => {
  return payload.data.tags
    .sort((t1, t2) => t1.popularity - t2.popularity)
    .map((tag) => ({
      value: tag.text,
      label: tag.text,
    }));
});

$tags.on(addTag, (state, payload) => [...state, payload]);
$tags.on(addTags, (state, payload) => [...state, ...payload]);

export { $tags };

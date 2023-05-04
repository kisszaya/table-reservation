import { createEvent, forward } from "effector";
import { getTagsFx } from "../effects";

const getTags = createEvent();

forward({ from: getTags, to: getTagsFx });

export { getTags };

import { createEvent } from "effector";

const addTag = createEvent<{ value: string; label: string }>();
const addTags = createEvent<{ value: string; label: string }[]>();

export { addTag, addTags };

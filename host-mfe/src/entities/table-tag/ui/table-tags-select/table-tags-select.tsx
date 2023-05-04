import { useEffect } from "react";
import { Loader, MultiSelect, MultiSelectProps } from "@mantine/core";
import { useStore } from "effector-react";

import {
  $getTagsIsLoading,
  $tags,
  addTag,
  addTags,
  getTags,
} from "../../model";
import { ITableTagsSelectProps } from "../../types";

export const TableTagsSelect = (
  props: ITableTagsSelectProps & Omit<MultiSelectProps, "data">
) => {
  const { tags, setTags, ...selectProps } = props;
  const tagsData = useStore($tags);
  const isLoading = useStore($getTagsIsLoading);

  useEffect(() => {
    getTags();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      addTags(tags.map((tag) => ({ value: tag, label: tag })));
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MultiSelect
      {...selectProps}
      data={tagsData}
      value={tags}
      onChange={setTags}
      searchable
      creatable
      getCreateLabel={(query) => `+ Добавить тэг: ${query}`}
      onCreate={(query) => {
        const item = { value: query, label: query };
        addTag(item);
        return item;
      }}
    />
  );
};

import { Injectable, Logger } from "@nestjs/common";
import {
  TagsGet,
  TagsGetRestaurant,
} from "kisszaya-table-reservation/lib/contracts";

import {
  TableRepository,
  TableTagRepository,
  TagRepository,
} from "@/repositories";
import { BrokerService } from "@/broker";
import { TableTagEntity, TagEntity } from "@/entities";

@Injectable()
export class TagsService {
  private readonly logger = new Logger(TagsService.name);

  constructor(
    private readonly tableTagRepository: TableTagRepository,
    private readonly tagRepository: TagRepository,
    private readonly tableRepository: TableRepository,
    private readonly brokerService: BrokerService
  ) {}

  public async addTagsToTable(data: {
    table_id: number;
    tags: string[];
  }): Promise<string[]> {
    const { table_id, tags } = data;

    for (const tag of tags) {
      let foundTag = await this.tagRepository.findTagByText(tag);
      if (!foundTag) {
        const tagEntity = new TagEntity({ text: tag });
        foundTag = await this.tagRepository.createTag(tagEntity);
      }

      const tableTagEntity = new TableTagEntity({
        tag_id: foundTag.tag_id,
        table_id,
      });
      await this.tableTagRepository.createTableTag(tableTagEntity);
    }

    return tags;
  }

  public async removeTagsByTable(data: { table_id: number }) {
    const { table_id } = data;

    await this.tableTagRepository.deleteTableTagsByTableId(table_id);
  }

  public async getTags(data: TagsGet.Request): Promise<TagsGet.Response> {
    const res: TagsGet.Response["tags"] = [];

    const tags = await this.tagRepository.getAllTags();

    for (const tag of tags) {
      const tableTags = await this.tableTagRepository.findTableTagsByTagId(
        tag.tag_id
      );
      res.push({
        ...tag,
        popularity: tableTags.length,
      });
    }

    return {
      tags: res,
    };
  }

  public async getRestaurantTags(
    data: TagsGetRestaurant.Request
  ): Promise<TagsGetRestaurant.Response> {
    const { restaurant_id } = data;

    const tags: Record<string, number> = {};

    const tables = await this.tableRepository.findTablesByRestaurantId(
      restaurant_id
    );

    for (const table of tables) {
      const tableTags = await this.tableTagRepository.findTableTagsByTagId(
        table.table_id
      );

      for (const tableTag of tableTags) {
        const tag = await this.tagRepository.getTagByTagId(tableTag.tag_id);

        tags[tag.text] = tags[tag.text] ? tags[tag.text] + 1 : 0;
      }
    }

    return {
      tags: Object.entries(tags).map(([key, value]) => ({
        popularity: value,
        text: key,
      })),
    };
  }
}

import { Responses } from "../../responses";

export namespace TagsGet {
  export const topic = "tags.get.command";

  export class Request {}

  export class Response implements Responses.GetTags {
    tags: Responses.GetTags["tags"];
  }
}

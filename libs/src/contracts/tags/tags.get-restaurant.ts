import { IsNumber } from "class-validator";
import { IPreviewTag } from "../../interfaces";

export namespace TagsGetRestaurant {
  export const topic = "tags.get-restaurant.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;
  }

  export class Response {
    tags: IPreviewTag[];
  }
}

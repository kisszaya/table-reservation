import { IsString, IsOptional, IsArray, IsBoolean } from "class-validator";

import { Responses } from "../../responses";

export namespace AggregatorRestaurantsGet {
  export const topic = "aggregator-restaurants.get.command";

  export class Request {
    @IsString()
    @IsOptional()
    search?: string;

    @IsArray()
    @IsOptional()
    tags?: string[];

    @IsOptional()
    @IsBoolean()
    opened?: boolean;
  }

  export class Response implements Responses.GetAggregatorRestaurantPreviews {
    restaurants: Responses.GetAggregatorRestaurantPreviews["restaurants"];
  }
}

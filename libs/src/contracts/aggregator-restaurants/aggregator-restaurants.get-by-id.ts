import { IsNumber } from "class-validator";

import { Responses } from "../../responses";

export namespace AggregatorRestaurantsGetById {
  export const topic = "aggregator-restaurants.get-by-id.command";

  export class Request {
    @IsNumber()
    restaurant_id: number;
  }

  export class Response implements Responses.GetAggregatorRestaurant {
    restaurant: Responses.GetAggregatorRestaurant["restaurant"];
  }
}

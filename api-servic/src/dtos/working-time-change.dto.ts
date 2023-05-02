import { Requests } from "kisszaya-table-reservation/lib/requests";

export class WorkingTimeChangeDto
  implements Requests.ChangeRestaurantWorkingTime
{
  workingTime: Requests.ChangeRestaurantWorkingTime["workingTime"];
}

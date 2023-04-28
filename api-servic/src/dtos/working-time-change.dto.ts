import { IWorkingTime } from "kisszaya-table-reservation/lib/interfaces";
import { Requests } from "kisszaya-table-reservation/lib/requests";

export class WorkingTimeChangeDto
  implements Requests.ChangeRestaurantWorkingTime
{
  workingTimes: IWorkingTime[];
}

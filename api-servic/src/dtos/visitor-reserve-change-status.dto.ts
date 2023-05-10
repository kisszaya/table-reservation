import { Requests } from "kisszaya-table-reservation/lib/requests";
import { RESERVE_STATUS } from "kisszaya-table-reservation/lib/interfaces";
import { IsEnum } from "class-validator";

export class VisitorReserveChangeStatusDto
  implements Requests.ChangeReserveVisitorStatus
{
  @IsEnum(RESERVE_STATUS)
  status: RESERVE_STATUS.CANCELED;
}

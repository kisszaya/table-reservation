import { Requests } from "kisszaya-table-reservation/lib/requests";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTokensDto implements Requests.UpdateRefreshToken {
  @IsNotEmpty()
  @IsString()
  fingerprint: string;
}

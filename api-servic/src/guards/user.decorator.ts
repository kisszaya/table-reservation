import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { IJWTPayload } from "kisszaya-table-reservation/lib/interfaces";

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const user: IJWTPayload = ctx.switchToHttp().getRequest()?.user;
    return Number(user.user_id)
  }
);

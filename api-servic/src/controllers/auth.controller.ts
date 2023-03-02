import { BrokerService } from "@/broker";
import { Controller, Get, Logger } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly brokerService: BrokerService) {}

  @Get("login")
  async getHello(): Promise<string> {
    this.logger.log("start /auth/login");
    await this.brokerService.publish<{}, {}>("", {});
    return "";
  }
}

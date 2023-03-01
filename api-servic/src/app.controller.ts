import {Controller, Logger} from '@nestjs/common';
import { AppService } from './app.service';
import {RMQRoute} from "nestjs-rmq";

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name)

  constructor(private readonly appService: AppService) {}

  @RMQRoute('')
  getHello(): string {
    this.logger.log('Log in hello method')
    return this.appService.getHello();
  }
}

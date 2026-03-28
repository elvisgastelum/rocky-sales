import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('consumer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  getConsumerHomeData() {
    return this.appService.getConsumerHomeData();
  }
}

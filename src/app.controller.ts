import { Controller, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getHello(@Res() response) {
    const data = this.appService.getHello();

    return response.status(200).send(data);
  }
}

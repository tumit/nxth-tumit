import { Body, Controller, Get, Post, Render } from '@nestjs/common';

import { AppService } from './app.service';
import { ChatRequest } from '@nxth-tumit/bc3bot-data';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getData() {
    return this.appService.getData('สวย');
  }

  @Post()
  @Render('index')
  chat(@Body() req: ChatRequest) {
    return this.appService.getData(req.command);
  }

}

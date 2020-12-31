import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';

import { AppService } from './app.service';
import { ChatRequest } from '@nxth-tumit/bc3bot-data';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getChat(@Query('trigger') trigger) {
    return this.appService.getData({ command: trigger });
  }

  @Post()
  postChat(@Body() req: ChatRequest): Observable<string> {
    return this.appService.getData(req);
  }

}

import { Body, Controller, Get, Post, Render } from '@nestjs/common';

import { AppService } from './app.service';
import { ChatRequest } from '@nxth-tumit/bc3bot-data';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData({ command: 'สวย' });
  }

  @Post()
  postChat(@Body() req: ChatRequest): Observable<string> {
    return this.appService.getData(req);
  }

}

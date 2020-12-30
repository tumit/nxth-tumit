import { Module } from '@nestjs/common';
import { FaunadbModule, FaunadbModuleOptions } from 'nestjs-faunadb';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const fdbConfig: FaunadbModuleOptions = {
  secret: process.env.FAUNA_TOKEN,
};

@Module({
  imports: [FaunadbModule.forRoot(fdbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

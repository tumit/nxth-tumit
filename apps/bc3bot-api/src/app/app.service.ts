import { Injectable } from '@nestjs/common';
import { FaunadbService, query as q, Client, values } from 'nestjs-faunadb';

export interface BotResponse {
  data: [];
}

@Injectable()
export class AppService {

  client: Client;

  constructor(private readonly fauna: FaunadbService) {
    this.client = this.fauna.getClient();
  }

  async getData(trigger: string): Promise<BotResponse> {
    const query = q.Paginate(
      q.Match(q.Index('responses_by_triggers'), trigger)
    );
    const result = await this.client.query<BotResponse>(query);
    return result;
  }

}

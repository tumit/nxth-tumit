import { Injectable } from '@nestjs/common';
import { ChatRequest } from '@nxth-tumit/bc3bot-data';
import { FaunadbService, query as q, Client, values } from 'nestjs-faunadb';
import { from, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AppService {

  client: Client;

  constructor(private readonly fauna: FaunadbService) {
    this.client = this.fauna.getClient();
  }

  getData(req: ChatRequest): Observable<string> {
    return from(this.getFaunaDbData(req.command)).pipe(
      filter( r => r?.data?.length > 0),
      map(r => (r?.data[0]))
    );
  }

  async getFaunaDbData(trigger: string): Promise<{ data: string[]}> {
    const query = q.Paginate(
      q.Match(q.Index('responses_by_triggers'), trigger)
    );
    const result = await this.client.query<{ data: []}>(query);
    return result;
  }

}

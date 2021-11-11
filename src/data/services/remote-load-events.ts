import { UnexpectedError, AccessDeniedError } from '@/data/errors'
import { HttpClient, HttpStatusCode } from '@/data/contracts'
import { LoadEvents } from '@/domain/usecases'
import { EventModel } from '@/domain/models'

export class RemoteLoadEvents implements LoadEvents {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadEventList.Response>
  ) {}

  async loadAll (): Promise<EventModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body.data || []
      case HttpStatusCode.noContent: return []
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadEventList {
  export type Response = {
    items: number
    data: EventModel[]
  }
}

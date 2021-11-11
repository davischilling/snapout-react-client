import { UnexpectedError, AccessDeniedError } from '@/data/errors'
import { HttpClient, HttpStatusCode } from '@/data/contracts'
import { LoadMedias } from '@/domain/usecases'
import { MediaModel } from '@/domain/models'

export class RemoteLoadMedias implements LoadMedias {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadMediaList.Response>
  ) {}

  async loadAll (): Promise<MediaModel[]> {
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

export namespace RemoteLoadMediaList {
  export type Response = {
    items: number
    data: MediaModel[]
  }
}

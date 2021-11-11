import { UnexpectedError, AccessDeniedError } from '@/data/errors'
import { HttpClient, HttpStatusCode } from '@/data/contracts'
import { LoadParagraphs } from '@/domain/usecases'
import { ParagraphModel } from '@/domain/models'

export class RemoteLoadParagraphs implements LoadParagraphs {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadParagraphList.Response>
  ) {}

  async loadAll (): Promise<ParagraphModel[]> {
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

export namespace RemoteLoadParagraphList {
  export type Response = {
    items: number
    data: ParagraphModel[]
  }
}

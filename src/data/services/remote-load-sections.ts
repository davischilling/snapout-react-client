import { UnexpectedError, AccessDeniedError } from '@/data/errors'
import { HttpClient, HttpStatusCode } from '@/data/contracts'
import { LoadSections } from '@/domain/usecases'
import { SectionModel } from '@/domain/models'

export class RemoteLoadSections implements LoadSections {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadSectionList.Response>
  ) {}

  async loadAll (): Promise<SectionModel[]> {
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

export namespace RemoteLoadSectionList {
  export type Response = {
    items: number
    data: SectionModel[]
  }
}

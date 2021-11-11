import { UnexpectedError, AccessDeniedError } from '@/data/errors'
import { HttpClient, HttpStatusCode } from '@/data/contracts'
import { LoadMembers } from '@/domain/usecases'
import { MemberModel } from '@/domain/models'

export class RemoteLoadMembers implements LoadMembers {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadMemberList.Response>
  ) {}

  async loadAll (): Promise<MemberModel[]> {
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

export namespace RemoteLoadMemberList {
  export type Response = {
    items: number
    data: MemberModel[]
  }
}

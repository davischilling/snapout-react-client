import { UnexpectedError, AccessDeniedError } from '@/data/errors'
import { HttpClient, HttpStatusCode } from '@/data/contracts'
import { LoadContact } from '@/domain/usecases'
import { ContactModel } from '@/domain/models'

export class RemoteLoadContact implements LoadContact {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadContactList.Response>
  ) {}

  async loadOne (): Promise<ContactModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const contact = httpResponse.body.data.find(ele => ele.active)
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return contact
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadContactList {
  export type Response = {
    items: number
    data: ContactModel[]
  }
}

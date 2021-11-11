import { HttpStatusCode, ResolveAllHttpClient, LoadAllHttpClient } from '@/data/contracts'
import { AccessDeniedError, UnexpectedError } from '@/data/errors'

export class RemoteLoadAllHttpClient implements LoadAllHttpClient {
  constructor (
    private readonly resolveAll: ResolveAllHttpClient
  ) {}

  async loadAll (): Promise<any> {
    const promises = this.resolveAll.getPromises()
    return await Promise.all(promises).then(responses => {
      return responses.map(response => {
        switch (response.statusCode) {
          case HttpStatusCode.ok: return response.body
          case HttpStatusCode.forbidden: throw new AccessDeniedError()
          default: throw new UnexpectedError()
        }
      })
    })
  }
}

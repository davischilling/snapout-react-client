import { HttpClient, HttpRequest, HttpResponse, ResolveAllHttpClient } from '@/data/contracts/http'

export class ResolveAll implements ResolveAllHttpClient {
  constructor (
    private readonly httpClient: HttpClient,
    private readonly requests: HttpRequest[]
  ) {}

  getPromises (): Array<Promise<HttpResponse>> {
    const promiseArray = [] as Array<Promise<HttpResponse>>
    this.requests.forEach(request => promiseArray.push(
      this.httpClient.request({
        url: request.url,
        method: request.method
      })
    ))
    return promiseArray
  }
}

import { HttpRequest } from '@/data/contracts'
import { ResolveAll } from '@/infra/http'
import { makeAxiosHttpClient } from '.'

export const makeResolveAll = (requests: HttpRequest[]): ResolveAll => {
  return new ResolveAll(
    makeAxiosHttpClient(),
    requests
  )
}

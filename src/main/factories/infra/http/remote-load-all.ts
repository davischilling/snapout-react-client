import { makeApiUrl } from './api-url-factory'
import { HttpRequest } from '@/data/contracts'
import { RemoteLoadAllHttpClient } from '@/infra/http'
import { makeResolveAll } from './resolve-all'

export const makeRemoteLoadAllHttpClient = (): RemoteLoadAllHttpClient => {
  const requests: HttpRequest[] = [{
    url: makeApiUrl('/contacts'),
    method: 'get'
  },{
    url: makeApiUrl('/events'),
    method: 'get'
  },{
    url: makeApiUrl('/medias'),
    method: 'get'
  },{
    url: makeApiUrl('/members'),
    method: 'get'
  },{
    url: makeApiUrl('/paragraphs'),
    method: 'get'
  },{
    url: makeApiUrl('/sections'),
    method: 'get'
  }]
  return new RemoteLoadAllHttpClient(
    makeResolveAll(requests)
  )
}

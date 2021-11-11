import { RemoteLoadSections } from '@/data/services'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/infra/http'

export const makeRemoteLoadSections = (): RemoteLoadSections =>
  new RemoteLoadSections(makeApiUrl('/sections'), makeAxiosHttpClient())

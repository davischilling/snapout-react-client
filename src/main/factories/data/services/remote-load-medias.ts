import { RemoteLoadMedias } from '@/data/services'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/infra/http'

export const makeRemoteLoadMedias = (): RemoteLoadMedias =>
  new RemoteLoadMedias(makeApiUrl('/medias'), makeAxiosHttpClient())

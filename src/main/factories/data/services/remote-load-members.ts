import { RemoteLoadMembers } from '@/data/services'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/infra/http'

export const makeRemoteLoadMembers = (): RemoteLoadMembers =>
  new RemoteLoadMembers(makeApiUrl('/members'), makeAxiosHttpClient())

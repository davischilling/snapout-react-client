import { RemoteLoadContact } from '@/data/services'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/infra/http'

export const makeRemoteLoadContact = (): RemoteLoadContact =>
  new RemoteLoadContact(makeApiUrl('/contacts'), makeAxiosHttpClient())

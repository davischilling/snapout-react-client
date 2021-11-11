import { RemoteLoadEvents } from '@/data/services'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/infra/http'

export const makeRemoteLoadEvents = (): RemoteLoadEvents =>
  new RemoteLoadEvents(makeApiUrl('/events'), makeAxiosHttpClient())

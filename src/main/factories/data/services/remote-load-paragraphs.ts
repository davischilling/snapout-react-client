import { RemoteLoadParagraphs } from '@/data/services'
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/infra/http'

export const makeRemoteLoadParagraphs = (): RemoteLoadParagraphs =>
  new RemoteLoadParagraphs(makeApiUrl('/paragraphs'), makeAxiosHttpClient())

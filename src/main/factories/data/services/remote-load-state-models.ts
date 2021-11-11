import { RemoteLoadAllModels } from '@/data/services'
import { makeRemoteLoadAllHttpClient } from '@/main/factories/infra/http'

export const makeRemoteLoadAllModels = (): RemoteLoadAllModels =>
  new RemoteLoadAllModels(makeRemoteLoadAllHttpClient())

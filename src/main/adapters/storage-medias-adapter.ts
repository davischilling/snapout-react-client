import { makeLocalStorageAdapter } from '@/main/factories/infra/cache'
import { MediaModel } from '@/domain/models'

export const setMediasAdapter = (medias: MediaModel[]): void => {
  makeLocalStorageAdapter().set('medias', medias)
}

export const getMediasAdapter = (): MediaModel[] => {
  return makeLocalStorageAdapter().get('medias')
}

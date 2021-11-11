import { MediaModel } from '@/domain/models'

export interface LoadMedias {
  loadAll: () => Promise<MediaModel[]>
}

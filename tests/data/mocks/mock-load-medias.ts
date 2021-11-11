import { MediaModel } from '@/domain/models'
import { LoadMedias } from '@/domain/usecases'

import { mockMediaModelList } from '@/tests/domain/mocks'

export class LoadMediaListStub implements LoadMedias {
  async loadAll (): Promise<MediaModel[]> {
    return mockMediaModelList()
  }
}

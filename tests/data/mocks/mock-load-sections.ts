import { SectionModel } from '@/domain/models'
import { LoadSections } from '@/domain/usecases'

import { mockSectionModelList } from '@/tests/domain/mocks'

export class LoadSectionListStub implements LoadSections {
  async loadAll (): Promise<SectionModel[]> {
    return mockSectionModelList()
  }
}

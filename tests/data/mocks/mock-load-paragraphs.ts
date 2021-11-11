import { ParagraphModel } from '@/domain/models'
import { LoadParagraphs } from '@/domain/usecases'

import { mockParagraphModelList } from '@/tests/domain/mocks'

export class LoadParagraphListStub implements LoadParagraphs {
  async loadAll (): Promise<ParagraphModel[]> {
    return mockParagraphModelList()
  }
}

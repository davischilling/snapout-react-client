import { EventModel } from '@/domain/models'
import { LoadEvents } from '@/domain/usecases'

import { mockEventModelList } from '@/tests/domain/mocks'

export class LoadEventListStub implements LoadEvents {
  async loadAll (): Promise<EventModel[]> {
    return mockEventModelList()
  }
}

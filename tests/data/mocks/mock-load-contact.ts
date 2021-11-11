import { ContactModel } from '@/domain/models'
import { LoadContact } from '@/domain/usecases'

import { mockContactModel } from '@/tests/domain/mocks'

export class LoadContactStub implements LoadContact {
  async loadOne (): Promise<ContactModel> {
    return mockContactModel()
  }
}

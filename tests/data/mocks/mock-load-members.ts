import { MemberModel } from '@/domain/models'
import { LoadMembers } from '@/domain/usecases'

import { mockMemberModelList } from '@/tests/domain/mocks'

export class LoadMemberListStub implements LoadMembers {
  async loadAll (): Promise<MemberModel[]> {
    return mockMemberModelList()
  }
}

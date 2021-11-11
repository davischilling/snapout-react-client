import { MemberModel } from '@/domain/models'
import { mockMemberPageInfoModel } from './mock-member-page-info'

import faker from 'faker'

export const mockMemberModel = (): MemberModel => ({
  id: faker.datatype.uuid().toString(),
  name: faker.name.firstName(),
  role: faker.lorem.word(),
  image: faker.image.imageUrl(),
  alt: faker.lorem.words(3),
  memberUrlPage: faker.image.imageUrl(),
  memberPageInfo: mockMemberPageInfoModel()
})

export const mockMemberModelList = (): MemberModel[] => ([
  mockMemberModel(),
  mockMemberModel(),
  mockMemberModel()
])

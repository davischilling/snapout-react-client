import { MemberPageInfoModel } from '@/domain/models'
import { mockParagraphModelList } from './mock-paragraph'
import { mockSocialModelList } from './mock-social'

import faker from 'faker'

export const mockMemberPageInfoModel = (): MemberPageInfoModel => ({
  pageTitlePicture: faker.datatype.number.toString(),
  title: faker.name.title(),
  paragraphs: mockParagraphModelList(),
  socialsPhrase: faker.lorem.sentence(),
  socials: mockSocialModelList()
})

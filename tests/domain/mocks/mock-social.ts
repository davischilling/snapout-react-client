import { SocialModel, SocialTypes } from '@/domain/models'

import faker from 'faker'

export const mockSocialModel = (): SocialModel => ({
  id: faker.datatype.uuid().toString(),
  socialType: SocialTypes.facebook,
  socialUrl: faker.internet.url()
})

export const mockSocialModelList = (): SocialModel[] => ([
  mockSocialModel(),
  mockSocialModel(),
  mockSocialModel()
])

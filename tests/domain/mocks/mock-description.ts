import { DescriptionModel } from '@/domain/models'

import faker from 'faker'

export const mockDescriptionModel = (): DescriptionModel => ({
  description: faker.lorem.paragraph()
})

export const mockDescriptionModelList = (): DescriptionModel[] => ([
  mockDescriptionModel(),
  mockDescriptionModel(),
  mockDescriptionModel()
])

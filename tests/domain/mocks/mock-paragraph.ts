import { ParagraphModel } from '@/domain/models'

import faker from 'faker'

export const mockParagraphModel = (): ParagraphModel => ({
  id: faker.datatype.uuid().toString(),
  paragraph: faker.lorem.paragraph()
})

export const mockParagraphModelList = (): ParagraphModel[] => ([
  mockParagraphModel(),
  mockParagraphModel(),
  mockParagraphModel()
])

import { MediaModel } from '@/domain/models'

import faker from 'faker'

export const mockMediaModel = (): MediaModel => ({
  id: faker.datatype.uuid().toString(),
  youtubeUrlId: faker.datatype.uuid(),
  videoTitle: faker.name.title()
})

export const mockMediaModelList = (): MediaModel[] => ([
  mockMediaModel(),
  mockMediaModel(),
  mockMediaModel()
])

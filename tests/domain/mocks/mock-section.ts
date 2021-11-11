import { SectionModel } from '@/domain/models'

import faker from 'faker'

export const mockSectionModel = (): SectionModel => ({
  id: faker.datatype.uuid().toString(),
  menuName: faker.name.title(),
  entityName: faker.name.findName(),
  sectionTitle: faker.name.title()
})

export const mockSectionModelList = (): SectionModel[] => ([
  mockSectionModel(),
  mockSectionModel(),
  mockSectionModel()
])

import { EventModel } from '@/domain/models'

import faker from 'faker'

export const mockEventModel = (): EventModel => ({
  id: faker.datatype.uuid().toString(),
  weekDay: faker.date.weekday(),
  dayMonth: faker.date.month(),
  city: faker.address.cityName(),
  local: faker.address.city()
})

export const mockEventModelList = (): EventModel[] => ([
  mockEventModel(),
  mockEventModel(),
  mockEventModel()
])

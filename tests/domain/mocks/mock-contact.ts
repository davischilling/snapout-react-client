import { ContactModel } from '@/domain/models'

import faker from 'faker'

export const mockContactModel = (): ContactModel => ({
  id: faker.datatype.uuid().toString(),
  message: faker.random.words(4),
  email: faker.internet.email(),
  eventManager: faker.random.word(),
  phone: faker.phone.phoneNumber(),
  active: true
})

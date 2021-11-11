import { makeLocalStorageAdapter } from '@/main/factories/infra/cache'
import { ContactModel } from '@/domain/models'

export const setContactAdapter = (contact: ContactModel): void => {
  makeLocalStorageAdapter().set('contact', contact)
}

export const getContactAdapter = (): ContactModel => {
  return makeLocalStorageAdapter().get('contact')
}

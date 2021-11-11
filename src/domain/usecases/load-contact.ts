import { ContactModel } from '@/domain/models'

export interface LoadContact {
  loadOne: () => Promise<ContactModel>
}

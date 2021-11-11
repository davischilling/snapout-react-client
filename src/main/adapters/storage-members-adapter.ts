import { makeLocalStorageAdapter } from '@/main/factories/infra/cache'
import { MemberModel } from '@/domain/models'

export const setMembersAdapter = (members: MemberModel[]): void => {
  makeLocalStorageAdapter().set('members', members)
}

export const getMembersAdapter = (): MemberModel[] => {
  return makeLocalStorageAdapter().get('members')
}

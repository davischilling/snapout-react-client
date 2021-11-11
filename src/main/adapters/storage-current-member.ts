import { makeLocalStorageAdapter } from '@/main/factories/infra/cache'
import { MemberModel } from '@/domain/models'

export const setCurrentMemberAdapter = (member: MemberModel): void => {
  makeLocalStorageAdapter().set('member', member)
}

export const getCurrentMemberAdapter = (): MemberModel => {
  return makeLocalStorageAdapter().get('member')
}

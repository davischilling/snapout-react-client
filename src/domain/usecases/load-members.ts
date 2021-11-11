import { MemberModel } from '@/domain/models'

export interface LoadMembers {
  loadAll: () => Promise<MemberModel[]>
}

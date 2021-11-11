import { MemberPageInfoModel } from '@/domain/models'

export type MemberModel = {
  id: string
  name: string
  role: string
  image: string
  alt: string
  memberUrlPage: string
  memberPageInfo: MemberPageInfoModel
}

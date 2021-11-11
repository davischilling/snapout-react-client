import { SocialModel, ParagraphModel } from '@/domain/models'

export type MemberPageInfoModel = {
  pageTitlePicture: string
  title: string
  paragraphs: ParagraphModel[]
  socialsPhrase: string
  socials: SocialModel[]
}

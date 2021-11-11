import {
  ContactModel,
  EventModel,
  MediaModel,
  MemberModel,
  ParagraphModel,
  SectionModel
} from '@/domain/models'

export interface LoadStateModels {
  getStateModels: () => Promise<LoadStateModels.Response>
}

export namespace LoadStateModels {
  export type Response = Array<(
    ContactModel[]|
    EventModel[]|
    MediaModel[]|
    MemberModel[]|
    ParagraphModel[]|
    SectionModel[]
  )>
}

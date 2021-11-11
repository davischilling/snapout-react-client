import { LoadAllHttpClient } from '@/data/contracts'
import { ContactModel, EventModel, MediaModel, MemberModel, ParagraphModel, SectionModel } from '@/domain/models'
import { LoadStateModels } from '@/domain/usecases'

export class RemoteLoadAllModels implements LoadStateModels {
  constructor (
    private readonly remoteLoadAllModels: LoadAllHttpClient<remoteLoadAllModels.Response>
  ) {}

  async getStateModels (): Promise<LoadStateModels.Response> {
    const responses = await this.remoteLoadAllModels.loadAll()
    return responses.map(response => response.data)
  }
}

export namespace remoteLoadAllModels {
  export type Response = [
    ContactType,
    EventType,
    MediaType,
    MemberType,
    ParagraphType,
    SectionType
  ]
}

type ContactType = {
  items: number
  data: ContactModel[]
}

type EventType = {
  items: number
  data: EventModel[]
}

type MediaType = {
  items: number
  data: MediaModel[]
}

type MemberType = {
  items: number
  data: MemberModel[]
}

type ParagraphType = {
  items: number
  data: ParagraphModel[]
}

type SectionType = {
  items: number
  data: SectionModel[]
}

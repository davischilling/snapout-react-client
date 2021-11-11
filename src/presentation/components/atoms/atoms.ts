import { ContactModel, EventModel, MediaModel, MemberModel, ParagraphModel, SectionModel } from '@/domain/models'

import { atom } from 'recoil'

export const appState = atom({
  key: 'appState',
  default: {
    isLoading: false,
    isMenuActive: true,
    contact: {} as ContactModel,
    events: [] as EventModel[],
    medias: [] as MediaModel[],
    members: [] as MemberModel[],
    paragraphs: [] as ParagraphModel[],
    sections: [] as SectionModel[],
    currentMember: {} as MemberModel,
    getCurrentMember: null as () => MemberModel,
    setCurrentMember: null as (member: MemberModel) => void
    // getContact: null as () => ContactModel,
    // setContact: null as (contact: ContactModel) => void,
    // getEvents: null as () => EventModel[],
    // setEvents: null as (events: EventModel[]) => void,
    // getMedias: null as () => MediaModel[],
    // setMedias: null as (medias: MediaModel[]) => void,
    // getMembers: null as () => MemberModel[],
    // setMembers: null as (members: MemberModel[]) => void,
    // getParagraphs: null as () => ParagraphModel[],
    // setParagraphs: null as (paragraphs: ParagraphModel[]) => void,
    // getSections: null as () => SectionModel[],
    // setSections: null as (sections: SectionModel[]) => void
  }
})

import {
// getContactAdapter,
// getEventsAdapter,
// getMediasAdapter,
// getMembersAdapter,
// getParagraphsAdapter,
// getSectionsAdapter,
  setCurrentMemberAdapter,
  getCurrentMemberAdapter
} from '@/main/adapters'
import { ContactModel, EventModel, MediaModel, MemberModel, ParagraphModel, SectionModel } from '@/domain/models'
import { makeMainPage, makeMemberPage } from '@/main/factories/presentation'
import { MenuActiveRoute } from '@/main/proxies'
import { appState } from '@/presentation/components'
import React from 'react'
import {
  BrowserRouter,
  Switch
} from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ScrollToTop } from '@/presentation/hooks'

const Router: React.FC = () => {
  const state = {
    isLoading: false,
    isMenuActive: true,
    contact: {} as ContactModel,
    events: [] as EventModel[],
    medias: [] as MediaModel[],
    members: [] as MemberModel[],
    paragraphs: [] as ParagraphModel[],
    sections: [] as SectionModel[],
    currentMember: {} as MemberModel,
    setCurrentMember: setCurrentMemberAdapter,
    getCurrentMember: getCurrentMemberAdapter
    // getContact: getContactAdapter,
    // getEvents: getEventsAdapter,
    // getMedias: getMediasAdapter,
    // getMembers: getMembersAdapter,
    // getParagraphs: getParagraphsAdapter,
    // getSections: getSectionsAdapter
  }
  return (
    <RecoilRoot initializeState={({ set }) => set(appState, state)}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <MenuActiveRoute
            path="/"
            exact
            component={makeMainPage}
          />
          <MenuActiveRoute
            path="/"
            component={makeMemberPage}
          />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router

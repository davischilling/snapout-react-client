import { LoadStateModels } from '@/domain/usecases'
import { ContactModel, EventModel, MediaModel, MemberModel, ParagraphModel, SectionModel } from '@/domain/models'
import { appState, Loading } from '@/presentation/components'
import {
  AboutSection,
  BandMembersSection, ContactSection, EventSection, MasterSlider, VideoGridSection
} from './sections'

import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

type Props = {
  loadStateModels: LoadStateModels
}

const MainPage: React.FC<Props> = ({ loadStateModels }: Props) => {
  const [state, setState] = useRecoilState(appState)

  useEffect(() => {
    if (state.contact?.id !== undefined) {
      return
    }
    setState(old => ({ ...old, isLoading: true }))
    loadStateModels.getStateModels()
      .then(models => {
        setState(old => ({
          ...old,
          contact: models[0][0] as ContactModel,
          events: models[1] as EventModel[],
          medias: models[2] as MediaModel[],
          members: models[3] as MemberModel[],
          paragraphs: models[4] as ParagraphModel[],
          sections: models[5] as SectionModel[],
          isLoading: false
        }))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {state.isLoading && <Loading />}
      <MasterSlider />
      <AboutSection />
      <BandMembersSection />
      <EventSection />
      <VideoGridSection />
      <ContactSection />
    </>
  )
}

export default MainPage

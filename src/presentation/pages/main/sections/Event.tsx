import { EventModel } from '@/domain/models'
import {
  appState,
  CustomBackground,
  Event,
  // PageBtn,
  PageContent,
  SectionTitle
} from '@/presentation/components'
import React from 'react'
import { useRecoilValue } from 'recoil'

export const EventSection: React.FC = () => {
  const { events, sections } = useRecoilValue(appState)
  const eventSection = sections.find(section => section.entityName === 'events')

  return (
        <div id="events">
            <CustomBackground img={'bkg-img01'} />
            <PageContent
            pageContentClasses={'custom-background'}
            rowClasses={'mb-80'}
            // pageBtn={<PageBtn url={'#'} text={'View all dates'} />}
            >
            <SectionTitle title={eventSection?.sectionTitle} />
            <div className="col-md-12">
                <div className="pi-events events-style-02">
                    {
                        events?.map(({
                          id,
                          weekDay,
                          dayMonth,
                          city,
                          local
                        }: EventModel) => (
                            <Event
                                key={id}
                                subtitle={weekDay}
                                date={dayMonth}
                                locationSubtitle={city}
                                locationUrl={'#'}
                                locationText={local}
                                tickets={[
                                  { name: 'Fan club', isSoldOut: true, ticketUrl: '' },
                                  { name: 'Vip tickets', isSoldOut: true, ticketUrl: '' },
                                  { name: 'Common Ticket', isSoldOut: false, ticketUrl: '' }
                                ]}
                            />
                        ))
                    }
                </div>
            </div>
            </PageContent>
        </div>
  )
}

import {
  appState,
  PageContent,
  TeamMember
} from '@/presentation/components'
import React from 'react'
import { useRecoilValue } from 'recoil'

export const BandMembersSection: React.FC = () => {
  const { members, sections } = useRecoilValue(appState)
  const memberSection = sections.find(section => section.entityName === 'members')

  return (
        <div id="members">
            <br/>
            <br/>
            <br/>
            <br/>
            <PageContent>
                <div className="col-md-12 centered clearfix mb-0">
                    <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                        <h2>{memberSection?.sectionTitle}</h2>
                    </div>
                </div>
                {
                    members?.map(member => (
                        <TeamMember
                            key={member.id}
                            member={member}
                        />
                    ))
                }
            </PageContent>
        </div>
  )
}

import React from 'react'
import {
  appState,
  PageContent
} from '@/presentation/components'
import { useRecoilValue } from 'recoil'

export const AboutSection: React.FC = () => {
  const { paragraphs, sections } = useRecoilValue(appState)
  const aboutSection = sections.find(section => section.entityName === 'paragraphs')

  return (
    <div id="aboutSnapOut">
      <br/>
      <br/>
      <br/>
      <br/>
      <PageContent>
        <div className="col-md-2 hidden-xs hidden-sm">
        </div>
        <div className="col-md-8 centered">
          <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
              <h2>{aboutSection?.sectionTitle}</h2>
          </div>
          {
            paragraphs?.map(p => (
              <p key={p.id}>
                {
                  p.paragraph
                }
              </p>
            ))
          }
        </div>
        <div className="col-md-2 hidden-xs hidden-sm">
        </div>
      </PageContent>
    </div>
  )
}

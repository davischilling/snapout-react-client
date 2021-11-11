import {
  appState,
  // CustomBackground,
  PageContent,
  PageTitle
} from '@/presentation/components'
import React from 'react'
import { useRecoilValue } from 'recoil'

const MemberPage: React.FC = () => {
  const { getCurrentMember } = useRecoilValue(appState)

  return (
      <div>
        <PageTitle
          title={getCurrentMember().name}
          subtitle={getCurrentMember().role}
          pageStyle={'02'}
          pageTitle={getCurrentMember().memberPageInfo.pageTitlePicture}
        />
        <PageContent>
          <div className="col-md-2 hidden-xs hidden-sm">
          </div>
          <div className="col-md-8 centered">
              <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                  <h2>{getCurrentMember().memberPageInfo.title}</h2>
              </div>
              {
                getCurrentMember().memberPageInfo.paragraphs.map(p => (
                  <p key={p.id}>{p.paragraph}</p>
                ))
              }
          </div>
          <div className="col-md-2 hidden-xs hidden-sm">
          </div>
        </PageContent>
        {/* <CustomBackground img={'bkg-img11'} /> */}
        {/* <PageContent>
          <div className="col-md-12 centered">
            <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                <h2>{getCurrentMember().memberPageInfo.socialsPhrase}</h2>
            </div>
          </div>
          <div className="col-md-12 centered">
            <ul className="social-links filled-circles">
              {
                getCurrentMember().memberPageInfo.socials.map(social => (
                  <li key={social.socialUrl}><a href={social.socialUrl} className="triggerAnimation animated" data-animate="fadeInUp"><i className={`fa fa-${social.socialType.toLowerCase()}`}></i></a></li>
                ))
              }
            </ul>
          </div>
        </PageContent> */}

      </div>
  )
}

export default MemberPage

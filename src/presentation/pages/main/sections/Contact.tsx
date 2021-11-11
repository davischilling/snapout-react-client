import { appState, CustomBackground, PageContent } from '@/presentation/components'
import React from 'react'
import { useRecoilValue } from 'recoil'

export const ContactSection: React.FC = () => {
  const { contact, sections } = useRecoilValue(appState)
  const contactSection = sections.find(section => section.entityName === 'contacts')

  return (
    <div id="contact">
      <CustomBackground img={'bkg-img02'}/>
      <PageContent>
        <div className="col-md-12 mb-0">
            <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                <h2>
                  {contactSection?.sectionTitle}
                </h2>
            </div>
        </div>
        <div className="col-md-2 hidden-xs">
        </div>
        <div className="col-md-12 col-sm-12 centered">
            <h3>{contact?.message}</h3>
            <ul className="default-list">
                <li>{contact?.email}</li>
                <li><br /></li>
                <li>Manager di eventi: {contact?.eventManager}</li>
                <li>telefono: {contact?.phone}</li>
            </ul>
        </div>
        <div className="col-md-2 hidden-xs">
        </div>
      </PageContent>
    </div>
  )
}

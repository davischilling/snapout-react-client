import React from 'react'

import Styles from './PageTitle.styles.scss'

type Props = {
  title: string
  subtitle?: string
  pageStyle: string
  pageTitle: string
}

const PageTitle: React.FC<Props> = ({ title, subtitle, pageStyle, pageTitle }: Props) =>
<div className={`page-title page-title-style-${pageStyle} page-title-${pageTitle}`}>
  <div className={['container', Styles.pageTitleWrapper].join(' ')}>
      <div className="row">
          <div className="col-md-12">
              <div className={['pt-heading triggerAnimation animated', Styles.pageTitleHeader].join(' ')} data-animate="fadeInUp">
                  {
                    title && <h1>{title}</h1>
                  }
                  {
                    subtitle && <span style={{ color: 'white' }}>{subtitle}</span>
                  }
              </div>
          </div>
      </div>
  </div>
</div>

export default PageTitle

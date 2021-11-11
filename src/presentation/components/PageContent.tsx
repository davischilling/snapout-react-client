import React, { ReactNode } from 'react'

type Props = {
  pageContentClasses?: string
  containerClasses?: string
  rowClasses?: string
  pageBtn?: ReactNode
  children: ReactNode
}

export const PageContent: React.FC<Props> = ({
  pageContentClasses,
  containerClasses,
  rowClasses,
  pageBtn,
  children
}: Props) =>
  <div className={`page-content ${pageContentClasses}`}>
    <div className={`container ${containerClasses}`}>
      <div className={`row ${rowClasses}`}>
        {children}
      </div>
      {pageBtn}
    </div>
  </div>

import React from 'react'

type Props = {
  img: string
}

export const CustomBackground: React.FC<Props> = ({ img }: Props) =>
  <div className={`page-content custom-background custom-section-padding ${img} mb-130 bkg-border`}>
    <div className="container">
        <div className="row">
        </div>
    </div>
  </div>

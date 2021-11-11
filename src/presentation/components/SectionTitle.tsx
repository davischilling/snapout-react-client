import React from 'react'

type Props = {
  title: string
}

export const SectionTitle: React.FC<Props> = ({ title }: Props) =>
  <div className="col-md-12 mb-0 centered clearfix">
    <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
      <h2>{title}</h2>
    </div>
  </div>

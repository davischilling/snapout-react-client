import React from 'react'

type paragraphs = {
  key: string
  paragraph: string
}

type Props = {
  title: string
  paragraphs: paragraphs[]
}

export const About: React.FC<Props> = ({
  title,
  paragraphs
}: Props) =>
  <div id="about">
    <div className="col-md-8 centered">
      <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
          <h2>{title}</h2>
      </div>
      {
        paragraphs.map(({ key, paragraph }: paragraphs) => (
          <p key={key}>{paragraph}</p>
        ))
      }
    </div>
  </div>

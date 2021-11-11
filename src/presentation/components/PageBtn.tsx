import React from 'react'

type Props = {
  url: string
  text: string
}

export const PageBtn: React.FC<Props> = ({ url, text }: Props) =>
  <div className="row">
    <div className="col-md-12 centered">
      <a href={url} className="btn btn-center triggerAnimation animated centered" data-animate="fadeInUp">
        <span>
            {text}
        </span>
      </a>
    </div>
  </div>

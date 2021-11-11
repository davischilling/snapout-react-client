import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type Props = {
  url: string
  image: string
  subject: string
}

export const Section: React.FC<Props> = ({ url, image, subject }: Props) =>
  <div className="col-md-4 col-sm-4 col-xs-12 mb-0">
    <a href={url} className="block-button">
      <LazyLoadImage
          alt={'Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry.'}
          width={1920}
          height={592}
          src={image}
      />
      {/* <img src={`${image}?size=1920x592`} alt="Snap-Out, Rock, indie, italiano, musician, band, musicians, blog, music, music industry"/> */}
      <h3>{subject}</h3>
    </a>
  </div>

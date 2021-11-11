import React from 'react'

type social = {
  url: string
  icon: string
}

type Props = {
  socials: social[]
}

export const SocialLinks: React.FC<Props> = ({
  socials
}: Props) =>
  <ul className="social-links">
    {
      socials.map(({ url, icon }: social) => (
        <li key={`${url}-${icon}`}>
            <a target="_blank" rel="noreferrer" href={url} className={icon} > </a>
        </li>
      ))
    }
  </ul>

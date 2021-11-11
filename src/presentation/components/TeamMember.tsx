import React from 'react'
import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MemberModel } from '@/domain/models'
import { useRecoilValue } from 'recoil'
import { appState } from '.'

type Props = {
  member: MemberModel
}

export const TeamMember: React.FC<Props> = ({
  member
}: Props) => {
  const { id, alt, memberUrlPage, image, name, role } = member
  const history = useHistory()
  // const setState = useRecoilState(appState)[1]
  const { setCurrentMember } = useRecoilValue(appState)
  const buttonClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault()
    setCurrentMember(member)
    // setState((old: any) => ({ ...old, currentMember: member }))
    // history.replace(`${memberUrlPage}${id}`)
    history.push(`${memberUrlPage}${id}`)
  }

  return (
    <div className="col-md-3 col-sm-6 col-xs-12 mb-0 centered">
      <div className="team-member triggerAnimation animated" data-animate="fadeInUp" style={{ marginBottom: 20 }}>
      <a data-testid="logout" href="#" onClick={buttonClick}>
      <LazyLoadImage
              alt={alt}
              width={262}
              height={262}
              src={image}
            />
            {/* <img src={`${image}?size=262x262`} alt={alt} /> */}
            <h2>
              {name}
            </h2>
            <span>{role}</span>
      </a>

        {/* <Link to={`${memberUrlPage}-${id}`}>
            <LazyLoadImage
              alt={alt}
              width={262}
              height={262}
              src={image}
            />
            <img src={`${image}?size=262x262`} alt={alt} />
            <h2>
              {name}
            </h2>
            <span>{role}</span>
        </Link> */}
      </div>
    </div>
  )
}

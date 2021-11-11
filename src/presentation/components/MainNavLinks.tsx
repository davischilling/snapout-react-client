import React, { useState } from 'react'

type child = {
  url: string
  childName: string
}

type item = {
  itemClasses: string | null
  hasChildren: boolean
  name: string
  children: child[] | null
  noChildrenUrl: string | null
}

type Props = {
  items: item[]
}

export const MainNavLinks: React.FC<Props> = ({ items }: Props) => {
  // const { toggleMenuOpen, menuOpen } = useContext(MenuContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = (): void => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div id="main-nav" className={`navbar-collapse collapse ${menuOpen ? 'in' : ''}`}>
      <ul className="nav navbar-nav">
        {
          items.map(({ itemClasses, hasChildren, name, children, noChildrenUrl }: item) => (
            hasChildren
              ? (
              <li key={name} className={`menu-item-has-children dropdown ${itemClasses}`}>
                <a href="/" data-toggle="dropdown" className="dropdown-toggle" role="button">{name}</a>
                <ul className="dropdown-menu">
                  {
                    children.map(({ url, childName }: child) => (
                      <li key={childName}><a href={url}>{childName}</a></li>
                    ))
                  }
                </ul>
              </li>
                )
              : (
              <li key={name} onClick={toggleMenuOpen}>
                <a href={noChildrenUrl} role="button">{name}</a>
              </li>
                )
          ))
        }
      </ul>
    </div>
  )
}

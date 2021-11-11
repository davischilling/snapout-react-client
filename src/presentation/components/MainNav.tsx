import React, { useState } from 'react'
import { bubble as Menu } from 'react-burger-menu'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MainNavLinks } from './MainNavLinks'

type Props = {
  logoUrl: string
  logoImgPath: string
  menuActive: boolean
  isMobile: boolean | undefined
}

export const MainNav: React.FC<Props> = ({
  logoUrl,
  logoImgPath,
  menuActive,
  isMobile
}: Props) => {
  // const {menuOpen, toggleMenuOpen} = useContext(MenuContext)
  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMobileMenu = (): void => {
    setMobileMenu(!mobileMenu)
  }

  return (
        <div className="main-nav">
            <nav className="navbar navbar-default nav-left pi-mega">
                <div>

                    <div id="logo">
                        <a href={`${logoUrl}`} style={{ position: 'absolute', paddingTop: `${isMobile ? '5px' : '20px'}` }}>
                            <LazyLoadImage
                                alt={'gruppo rock indie italiano, hanno tra i 14 ed i 18 anni, si sono conosciuti  alle elementari e da allora suonano insieme. Studiano musica da 7 anni e nonostante la loro giovanissima età posseggono tecnica e competenze musicali di veri musicisti professionisti.'}
                                width={119}
                                height={29}
                                src={logoImgPath}
                            />
                            {/* <img src={`${logoImgPath}?size=119x29`} alt="gruppo rock indie italiano, hanno tra i 14 ed i 18 anni, si sono conosciuti  alle elementari e da allora suonano insieme. Studiano musica da 7 anni e nonostante la loro giovanissima età posseggono tecnica e competenze musicali di veri musicisti professionisti."/> */}
                        </a>
                    </div>

                    {/* <button className="hamburger navbar-toggle hamburger--slider-r" type="button" data-toggle="collapse" data-target="#main-nav" aria-expanded="false"> */}

                    {
                        menuActive && isMobile && (
                            <Menu
                                right
                                width={'60vw'}
                                onOpen={toggleMobileMenu}
                                onClose={toggleMobileMenu}
                                isOpen={mobileMenu}
                                styles={{
                                  bmBurgerButton: {
                                    position: 'absolute',
                                    width: '26px',
                                    height: '20px',
                                    right: '36px',
                                    top: '15px'
                                  },
                                  bmBurgerBars: {
                                    background: '#fff'
                                  },
                                  bmCrossButton: {
                                    height: '40px',
                                    width: '40px',
                                    left: '15px',
                                    top: '25px'
                                  },
                                  bmCross: {
                                    background: '#bdc3c7'
                                  },
                                  bmMenuWrap: {
                                    position: 'fixed',
                                    height: '100vh'
                                  },
                                  bmMenu: {
                                    background: '#171719',
                                    padding: '3.5em 1em 0',
                                    fontSize: '1.20em'
                                  },
                                  bmMorphShape: {
                                    fill: '#171719'
                                  },
                                  bmItemList: {
                                    color: '#fff',
                                    padding: '0.8em',
                                    marginTop: '5',
                                    right: '10px'
                                  },
                                  bmOverlay: {
                                    background: 'rgba(0, 0, 0, 0)'
                                  }
                                }}
                            >
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  justifyContent: 'flex-end',
                                  flexDirection: 'column',
                                  textAlign: 'right',
                                  float: 'right'
                                }}>
                                    {/* <a
                                        style={{ marginTop: 10 }}
                                        href="#home"
                                        onClick={toggleMobileMenu}>
                                            Home
                                    </a> */}
                                    <a
                                        style={{ marginTop: 10 }}
                                        href="#aboutSnapOut"
                                        onClick={toggleMobileMenu}>
                                            Riguardo Snap
                                    </a>
                                    <a
                                        style={{ marginTop: 10 }}
                                        href="#members"
                                        onClick={toggleMobileMenu}>
                                            Membri
                                    </a>
                                    <a
                                        style={{ marginTop: 10 }}
                                        href="#events"
                                        onClick={toggleMobileMenu}>
                                            Eventi
                                    </a>
                                    <a
                                        style={{ marginTop: 10 }}
                                        href="#media"
                                        onClick={toggleMobileMenu}>
                                            Video
                                    </a>
                                    <a
                                        style={{ marginTop: 10 }}
                                        href="#contact"
                                        onClick={toggleMobileMenu}>
                                            Contanttaci
                                    </a>
                                    {/* <a onClick={ showSettings } className="menu-item--small" href="">Settings</a> */}
                                </div>
                            </Menu>
                        )
                    }
                </div>
                {
                    menuActive && (
                        <MainNavLinks
                            items={[
                              {
                                itemClasses: 'current-menu-item',
                                hasChildren: false,
                                name: 'Home',
                                children: [],
                                noChildrenUrl: '#'
                              },
                              {
                                itemClasses: null,
                                hasChildren: false,
                                name: 'Sulla Band',
                                children: [],
                                noChildrenUrl: '#aboutSnapOut'
                              },
                              {
                                itemClasses: null,
                                hasChildren: false,
                                name: 'Membri',
                                children: [],
                                noChildrenUrl: '#members'
                              },
                              {
                                itemClasses: null,
                                hasChildren: false,
                                name: 'Eventi',
                                children: [],
                                noChildrenUrl: '#events'
                              },
                              {
                                itemClasses: null,
                                hasChildren: false,
                                name: 'Media',
                                children: [],
                                noChildrenUrl: '#media'
                              },
                              {
                                itemClasses: null,
                                hasChildren: false,
                                name: 'Contatto',
                                children: null,
                                noChildrenUrl: '#contact'
                              }
                            ]} />
                    )
                }
            </nav>
        </div>

  )
}

import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { useMediaPredicate } from 'react-media-hook'
import { Fader } from '@/presentation/pages/main/components'
import { useRecoilState } from 'recoil'
import { sliderState } from '../components/atoms'

export const MasterSlider: React.FC = () => {
  const [state, setState] = useRecoilState(sliderState)
  const timer: MutableRefObject<any> = useRef()
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    duration: 1500,
    dragStart: () => {
      setState(old => ({ ...old, pause: true }))
    },
    dragEnd: () => {
      setState(old => ({ ...old, pause: false }))
    }
  })

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!state.pause && slider) {
        setState(old => ({ ...old, fadeOut: !state.fadeOut }))
        slider.next()
      }
    }, 10000)
    return () => {
      clearInterval(timer.current)
    }
  }, [state.pause, slider, state.fadeOut])

  const toggleFadeOut = (): void => {
    setState(old => ({ ...old, fadeOut: !state.fadeOut }))
  }

  const [
    isMobile,
    setIsMobile
  ] = useState<boolean | undefined>(undefined)
  const isMobileScreen = useMediaPredicate('(max-width: 767px)')
  const isLargeScreen = useMediaPredicate('(min-width: 991px)')

  useEffect(() => {
    setIsMobile(isMobileScreen)
  }, [isMobileScreen])

  useEffect(() => {
    setIsMobile(isMobileScreen)
  }, [isMobileScreen, isLargeScreen])

  return (
    <div id="home">
      {
        isMobile
          ? (
          <div style={{ maxHeight: '100vh' }}>
            <div
              style={{
                backgroundImage: `url(${process.env.NODE_ENV === 'production' ? '/public/' : ''}img/slider/mobile-slider.png)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                opacity: '55%',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
            </div>
          </div>
            )
          : (
          <div ref={sliderRef} className="keen-slider">
            <div
              className="keen-slider__slide number-slide"
              style={{
                backgroundImage: `url(${process.env.NODE_ENV === 'production' ? '/public/' : ''}img/slider/musician-music-band-slide-01.webp)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '100vw',
                height: '100vh',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <Fader
                fadeOut={state.fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#e21f2f'}
                text={'Snap - Out'}
                timer={2000}
              />
              <Fader
                fadeOut={state.fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#fff'}
                text={'GRUPPO DI ROCK INDIE ITALIANO'}
                timer={3500}
                textStyle={'-02'}
              />
            </div>
            <div
              className="keen-slider__slide number-slide"
              style={{
                backgroundImage: `url(${process.env.NODE_ENV === 'production' ? '/public/' : ''}img/slider/musician-music-band-slide-02.webp)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '100vw',
                height: '100vh',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <Fader
                fadeOut={state.fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#e21f2f'}
                text={'Snap - Out'}
                timer={2000}
              />
              <Fader
                fadeOut={state.fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#fff'}
                text={'GRUPPO DI ROCK INDIE ITALIANO'}
                timer={3500}
                textStyle={'-02'}
              />
            </div>
            <div
              className="keen-slider__slide number-slide"
              style={{
                backgroundImage: `url(${process.env.NODE_ENV === 'production' ? '/public/' : ''}img/slider/musician-music-band-slide-03.webp)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '100vw',
                height: '100vh',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <Fader
                fadeOut={state.fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#e21f2f'}
                text={'Snap - Out'}
                timer={2000}
              />
              <Fader
                fadeOut={state.fadeOut}
                toggleFadeOut={toggleFadeOut}
                color={'#fff'}
                text={'GRUPPO DI ROCK INDIE ITALIANO'}
                timer={3500}
                textStyle={'-02'}
              />
            </div>
          </div>
            )
      }
    </div>
  )
}

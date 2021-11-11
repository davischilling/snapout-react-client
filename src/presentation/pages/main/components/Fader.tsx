import { FaderBase } from '@/presentation/components'
import React, { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { sliderState } from './atoms'

type Props = {
  text: string
  timer: number
  textStyle?: string
  color: string
  fadeOut: boolean
  toggleFadeOut: () => void
}

const Fader: React.FC<Props> = ({ text, timer, textStyle, color, fadeOut, toggleFadeOut }: Props) => {
  const [state, setState] = useRecoilState(sliderState)

  const fadeOutLogic = useCallback(
    () => {
      if (state.fadeText.fade === 'fade-in-fader') {
        setState(old => ({
          ...old,
          fadeText: {
            fade: 'fade-out-fader'
          }
        }))
        toggleFadeOut()
      } else {
        const timeOut = setInterval(() => {
          setState(old => ({
            ...old,
            fadeText: {
              fade: 'fade-in-fader'
            }
          }))
        }, timer)
        return () => clearInterval(timeOut)
      }
    },
    [state.fadeText.fade, timer, toggleFadeOut]
  )

  useEffect(() => {
    fadeOutLogic()
    // eslint-disable-next-line
  }, [fadeOut])

  return <FaderBase text={text} color={color} fade={state.fadeText.fade} textStyle={textStyle} />
}

export default Fader

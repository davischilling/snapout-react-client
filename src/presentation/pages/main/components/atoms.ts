import { atom } from 'recoil'

export type FadeText = 'fade-in-fader' | 'fade-out-fader'

export const sliderState = atom({
  key: 'sliderState',
  default: {
    fadeText: {
      fade: '' as FadeText
    },
    pause: false,
    fadeOut: true
  }
})

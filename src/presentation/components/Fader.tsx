import React from 'react'

type Props = {
  text: string
  textStyle?: string
  color: string
  fade: string
}

const Fader: React.FC<Props> = ({ text, textStyle, color, fade }: Props) => {
  return (
    <div style={{ textAlign: 'center', display: 'block' }}>
      <h1
        className={`fader-text${textStyle || ''} ${fade}`}
        style={{ color }}
      >
        {text}
      </h1>
    </div>
  )
}

export default Fader

import React from 'react'
import ReactDOM from 'react-dom'
import 'keen-slider/keen-slider.min.css'
import '@/presentation/styles/styles.scss'
import '@/presentation/styles/slider.scss'
import Router from '@/main/routes/router'

ReactDOM.render(
  <Router />,
  document.getElementById('main')
)

import { appState } from '@/presentation/components'
import Layout from '@/presentation/themes/Layout'

import React, { useEffect } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useRecoilState } from 'recoil'

const MenuActiveRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const [state, setState] = useRecoilState(appState)
  useEffect(() => {
    setState(old => ({
      ...old,
      isLoading: true
    }))
    if (props.exact) {
      setState(old => ({
        ...old,
        isMenuActive: true
      }))
    } else {
      setState(old => ({
        ...old,
        isMenuActive: false
      }))
    }
    setState(old => ({
      ...old,
      isLoading: false
    }))
  }, [props.exact])
  return (
    <Layout menuActive={state.isMenuActive}>
      <Route {...props} />
    </Layout>
  )
}

export default MenuActiveRoute

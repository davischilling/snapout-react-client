import { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const ScrollToTop: React.FC<ChildComponentProps> = ({ history }: ChildComponentProps) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      unlisten()
    }
  }, [])

  return (null)
}

export default withRouter(ScrollToTop)

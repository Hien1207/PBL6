/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '@hooks'
import Loading from '@components/loading'
import Approutes from './Routes'
import { useEffect } from 'react'

function App() {
  const { isLoading, loadProfileAction } = useAuth()

  useEffect(() => {
    loadProfileAction()
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <Approutes />
  )
}

export default App

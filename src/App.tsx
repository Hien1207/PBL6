/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '@hooks'
import Loading from '@components/loading'
import Approutes from './Routes'
import { useEffect ,useState} from 'react'
import "./index.css";
import { getProfile } from '@apis';
import { setLocalStorage, STORAGE } from '@utils'

function App() {
  const { isLoading, loadProfileAction } = useAuth()
  const [dataInfor, setDataInfor] = useState<any>([])
  useEffect(() => {
    loadProfileAction()
    getProfile(setDataInfor)
  }, [])
  setLocalStorage(STORAGE.PROFILE_USER,JSON.stringify(dataInfor))

  return isLoading ? (
    <Loading />
  ) : (
    <Approutes />
  )
}

export default App

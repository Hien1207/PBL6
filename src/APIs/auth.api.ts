import AxiosClient from './api'
import END_POINT from './constants'

function login(data: any) {
  return AxiosClient.post(END_POINT.LOGIN, data)
    .then((res) => res)
}

function getProfile({ userId }: any) {
  return AxiosClient.get(`${END_POINT.PROFILE_USER}?userId=${userId}`)
    .then((res) => res)
}

export {
  login,
  getProfile
}

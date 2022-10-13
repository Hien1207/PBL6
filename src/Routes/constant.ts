import { USER_ROLE } from '@constants/auth'
import HomeLayout from '@layouts/home'

import HomeScreen from '@modules/home'

const RoutesName = {
  HOME: '/',
}

export const ROUTES = [
  {
    path: RoutesName.HOME,
    component: HomeScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
]

export default RoutesName

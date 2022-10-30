import { USER_ROLE } from '@constants/auth'
import HomeLayout from '@layouts/home'

import HomeScreen from '@modules/home'
import TintucScreen from '@modules/tintuc'
import GioithieuScreen from '@modules/gioithieu'
import LienheScreen from '@modules/lienhe'
import DanhgiaScreen from '@modules/danhgia'

const RoutesName = {
  HOME: '/',
  TINTUC :'/tintuc',
  GIOITHIEU : '/gioithieu',
  LIENHE : '/lienhe',
  DANHGIA : '/danhgia',
}

export const ROUTES = [

  {
    path: RoutesName.HOME,
    component: HomeScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.TINTUC,
    component: TintucScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.GIOITHIEU,
    component: GioithieuScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.LIENHE,
    component: LienheScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
  {
    path: RoutesName.DANHGIA,
    component: DanhgiaScreen,
    layout: HomeLayout,
    rules: [USER_ROLE.ADMIN],
    exact: true,
  },
]

export default RoutesName

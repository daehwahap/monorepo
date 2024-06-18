import { NavigatorScreenParams } from '@react-navigation/native'
import { BOTTOM_TAP_ROUTE_TYPE } from '../BottomTab/type'

export type NATIVE_STACK_LIST_TYPE = {
  BottomTab: NavigatorScreenParams<BOTTOM_TAP_ROUTE_TYPE>
  LanguageChange: undefined
  SignIn: undefined
  ShareCode: undefined
  AcceptInvite: undefined
}

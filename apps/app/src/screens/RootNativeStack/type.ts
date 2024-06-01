import { NavigatorScreenParams } from '@react-navigation/native'

import { ExampleProps } from '@/screens/RootNativeStack/Example'

import { BOTTOM_TAP_ROUTE_TYPE } from '../BottomTab/type'

export type NativeStackList = {
  BottomTab: NavigatorScreenParams<BOTTOM_TAP_ROUTE_TYPE>
  LanguageChange: undefined
  SignIn: undefined
  ShareCode: undefined
  AcceptInvite: undefined
}

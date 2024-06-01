import { NavigatorScreenParams } from '@react-navigation/native'

import { BottomTabRoute } from '@/screens/BottomTab/type'
import { ExampleProps } from '@/screens/RootNativeStack/Example/type'

export type NativeStackList = {
  BottomTab: NavigatorScreenParams<BOTTOM_TAP_ROUTE_TYPE>
  LanguageChange: undefined
  SignIn: undefined
  ShareCode: undefined
  AcceptInvite: undefined
}

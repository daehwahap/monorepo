import { NavigatorScreenParams } from '@react-navigation/native'

import { BottomTabRoute } from '@/screens/BottomTab/type'

export type NativeStackList = {
  BottomTab: NavigatorScreenParams<BottomTabRoute>
  LanguageChange: undefined
  SignIn: undefined
  ShareCode: undefined
  AcceptInvite: undefined
}

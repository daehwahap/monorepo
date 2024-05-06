import { NavigatorScreenParams } from '@react-navigation/native'
import { BOTTOM_TAP_ROUTE_TYPE } from './BottomTab/type'
import { NATIVE_STACK_LIST_TYPE } from './NativeStack/type'

export type AllScreenType = BOTTOM_TAP_ROUTE_TYPE | NATIVE_STACK_LIST_TYPE
export type AllNaivigatorScreenType = NavigatorScreenParams<
  BOTTOM_TAP_ROUTE_TYPE | NATIVE_STACK_LIST_TYPE
>

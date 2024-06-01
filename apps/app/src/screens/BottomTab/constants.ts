import { FunctionComponent } from 'react'

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

import { First } from '@/screens/BottomTab/First'
import { Second } from '@/screens/BottomTab/Second'

type BottomTabParams = {
  name: string
  component: FunctionComponent
  options?: BottomTabNavigationOptions
}

export const BOTTOM_TAB_LIST = [
  { name: 'First', component: First, options: undefined },
  { name: 'Second', component: Second, options: undefined },
] as const

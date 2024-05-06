import { FunctionComponent } from 'react'

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

import { FirstScreen } from './First'
import { SecondScreen } from './Second'

type BottomTabParams = {
  name: string
  component: FunctionComponent
  options?: BottomTabNavigationOptions
}

export const BOTTOM_TAB_LIST: BottomTabParams[] = [
  { name: 'First', component: FirstScreen },
  { name: 'Second', component: SecondScreen },
] as const

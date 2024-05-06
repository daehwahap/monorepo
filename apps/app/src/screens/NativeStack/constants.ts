import { FunctionComponent } from 'react'

import { ExampleScreen, ExampleProps } from './Example'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

type NativeStackParams = {
  name: string
  component: FunctionComponent
  options?: NativeStackNavigationOptions
}

export const NATIVE_STACK_LIST: NativeStackParams[] = [
  { name: 'Example', component: ExampleScreen },
] as const

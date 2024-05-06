import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { NATIVE_STACK_LIST } from './constants'

const NativStack = createNativeStackNavigator()

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

const NativeStackNavigation = () => {
  return (
    <NativStack.Navigator screenOptions={defaultOptions}>
      {NATIVE_STACK_LIST.map((item) => (
        <NativStack.Screen
          name={item.name}
          component={item.component}
          options={item.options}
          key={item.name}
        />
      ))}
    </NativStack.Navigator>
  )
}

export default NativeStackNavigation

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { NATIVE_STACK_LIST_TYPE } from './RootNativeStack/type'
import { NATIVE_STACK_LIST } from './RootNativeStack/constants'
import BottomTabNavigation from './BottomTab'

const RootNativeStack = createNativeStackNavigator<NATIVE_STACK_LIST_TYPE>()

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

const RootNativeStackNavigation = () => {
  return (
    <RootNativeStack.Navigator screenOptions={defaultOptions}>
      <RootNativeStack.Screen
        name="BottomTab"
        component={BottomTabNavigation}
        options={defaultOptions}
      />

      {NATIVE_STACK_LIST.map((item) => (
        <RootNativeStack.Screen
          name={item.name}
          component={item.component}
          options={item.options}
          key={item.name}
        />
      ))}
    </RootNativeStack.Navigator>
  )
}

export default RootNativeStackNavigation

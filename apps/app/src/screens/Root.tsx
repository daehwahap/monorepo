import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { NATIVE_STACK_LIST_TYPE } from './RootNativeStack/type'
import { NATIVE_STACK_LIST } from './RootNativeStack/constants'
import BottomTabNavigation from './BottomTab'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { GOOGLE_AUTH_KEY } from '@env'

import BottomTabNavigation from '@/screens/BottomTab'
import { NATIVE_STACK_LIST } from '@/screens/RootNativeStack/constants'
import { NativeStackList } from '@/screens/RootNativeStack/type'

const RootNativeStack = createNativeStackNavigator<NativeStackList>()

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

GoogleSignin.configure({
  iosClientId: GOOGLE_AUTH_KEY,
})

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

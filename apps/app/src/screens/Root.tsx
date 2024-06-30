import { GOOGLE_AUTH_KEY } from '@env'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { NATIVE_STACK_LIST } from '@/screens/root-native-stack/constants'
import { NativeStackList } from '@/screens/root-native-stack/type'

import BottomTabNavigation from './bottom-tab'

const RootNativeStack = createNativeStackNavigator<NativeStackList>()

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

GoogleSignin.configure({
  iosClientId: GOOGLE_AUTH_KEY,
})

const RootNativeStackNavigation = () => (
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

export default RootNativeStackNavigation

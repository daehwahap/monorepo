import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { NATIVE_STACK_LIST_TYPE } from './RootNativeStack/type'
import { NATIVE_STACK_LIST } from './RootNativeStack/constants'
import BottomTabNavigation from './BottomTab'
import { useAsyncEffect } from '@pinit/shared/src/hooks'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createRef, useEffect } from 'react'
import { pushNotification } from '../shared/notification/pushNotification'
import { localNotification } from '../shared/notification/localNotification'
import { pushLinkFromKilledStorage } from '../shared/storage/PushLinkFromKilled'
import { Linking } from 'react-native'

const RootNativeStack = createNativeStackNavigator<NATIVE_STACK_LIST_TYPE>()

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

export const navigationRef = createRef<NavigationContainerRef<NATIVE_STACK_LIST_TYPE>>()

const RootNativeStackNavigation = () => {
  useAsyncEffect(async () => {
    await pushNotification.handleMessageFromKilled()
  }, [])

  useAsyncEffect(() => {
    const unsubscribeLocalForeground = localNotification.subscribeForegroundEvent()
    const unsubscribeForeground = pushNotification.subscribeForegroundMessage()
    const unsubscribeBackground = pushNotification.subscribeBackgroundMessage()

    return () => {
      unsubscribeForeground()
      unsubscribeBackground()
      unsubscribeLocalForeground()
    }
  }, [])

  useEffect(() => {
    const link = pushLinkFromKilledStorage.getPushLink()
    pushLinkFromKilledStorage.removePushLink()

    if (!link) {
      return
    }

    setTimeout(() => {
      Linking.openURL(link)
    }, 200)
  }, [])

  return (
    <NavigationContainer ref={navigationRef}>
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
    </NavigationContainer>
  )
}

export default RootNativeStackNavigation

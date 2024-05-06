import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTab'
import NativeStackNavigation from './NativeStack'

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
      <NativeStackNavigation />
    </NavigationContainer>
  )
}

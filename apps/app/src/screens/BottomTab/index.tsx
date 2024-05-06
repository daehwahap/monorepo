import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './TabBar'
import { BOTTOM_TAB_LIST } from './constants'

const BottomTab = createBottomTabNavigator()

const defaultOptions: BottomTabNavigationOptions = {
  headerShown: false,
}

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={defaultOptions} tabBar={(props) => <TabBar {...props} />}>
      {BOTTOM_TAB_LIST.map((item) => (
        <BottomTab.Screen name={item.name} component={item.component} key={item.name} />
      ))}
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigation

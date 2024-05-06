import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './TabBar'
import { BOTTOM_TAB_LIST } from './constants'
import { BOTTOM_TAP_ROUTE_TYPE } from './type'

const BottomTab = createBottomTabNavigator<BOTTOM_TAP_ROUTE_TYPE>()

const defaultOptions: BottomTabNavigationOptions = {
  headerShown: false,
}

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={defaultOptions} tabBar={(props) => <TabBar {...props} />}>
      {BOTTOM_TAB_LIST.map((item) => (
        <BottomTab.Screen
          name={item.name}
          component={item.component}
          options={item.options}
          key={item.name}
        />
      ))}
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigation

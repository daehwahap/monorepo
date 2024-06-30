import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BOTTOM_TAB_LIST } from './constants'
import TabBar from './TabBar'
import { BottomTabRoute } from './type'

const BottomTab = createBottomTabNavigator<BottomTabRoute>()

const defaultOptions: BottomTabNavigationOptions = {
  headerShown: false,
}

const BottomTabNavigation = () => (
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

export default BottomTabNavigation

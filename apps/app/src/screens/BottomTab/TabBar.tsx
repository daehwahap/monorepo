import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppRouter } from '../../shared/hooks/useAppRouter'
import { AllScreenType } from '../type'
import { BOTTOM_TAP_ROUTE_TYPE } from './type'

const TabBar = (props: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()

  const { navigate } = useAppRouter()

  const handlePress = (routeName: keyof BOTTOM_TAP_ROUTE_TYPE) => {
    return navigate('BottomTab', { screen: routeName, params: {} })
  }

  return (
    <View style={StyleSheet.flatten([styles.container, { paddingBottom: bottom || 32 }])}>
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index

        const routeName = route.name as keyof BOTTOM_TAP_ROUTE_TYPE

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.item}
            onPress={() => handlePress(routeName)}
          >
            <Text>아이콘~~~~~~~~</Text>
            {/* <SvgICon
              iconName={BOTTOM_TAB_UI_INFOS[routeName].iconName}
              color={isFocused ? 'black900' : 'black600'}
            /> */}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TabBar

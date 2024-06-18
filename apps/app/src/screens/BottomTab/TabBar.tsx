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
    return navigate('BottomTab', { screen: routeName })
  }

  return (
    <View style={StyleSheet.flatten([styles.container, { paddingBottom: bottom || 32 }])}>
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index

        const routeName = route.name as keyof BOTTOM_TAP_ROUTE_TYPE

        return (
          <TouchableOpacity
            key={route.key}
            style={[styles.item, { backgroundColor: isFocused ? 'gray' : undefined }]}
            onPress={() => handlePress(routeName)}
          >
            <Text>{route.name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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

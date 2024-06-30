import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { useAppRouter } from '@/shared/hooks/useAppRouter'

import { BottomTabRoute } from './type'

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

const TabBar = ({ state }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()

  const { navigate } = useAppRouter()

  const handlePress = (routeName: keyof BottomTabRoute) =>
    navigate('BottomTab', { screen: routeName })

  return (
    <View style={StyleSheet.flatten([styles.container, { paddingBottom: bottom || 32 }])}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index

        const routeName = route.name as keyof BottomTabRoute

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

export default TabBar

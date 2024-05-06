import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AllBottomTabProps } from '.'

type TabBarProps = BottomTabBarProps

const BOTTOM_TAB_UI_INFOS: Record<
  keyof AllBottomTabProps,
  {
    label: string
    iconName: string
  }
> = {
  First: {
    iconName: 'book',
    label: '홈',
  },
  Second: {
    iconName: 'person',
    label: '내 정보',
  },
}

const TabBar = (props: TabBarProps) => {
  const { bottom } = useSafeAreaInsets()

  const { navigate } = useNavigationService()

  const handlePress = (routeName: keyof AllBottomTabProps) => {
    return navigate(routeName)
  }

  return (
    <View style={StyleSheet.flatten([styles.container, { paddingBottom: bottom || 32 }])}>
      {props.state.routes.map((route, index) => {
        const isFocused = props.state.index === index

        const routeName = route.name as keyof AllBottomTabProps

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

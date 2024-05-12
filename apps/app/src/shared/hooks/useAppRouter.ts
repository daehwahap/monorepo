import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { AllScreenType } from '../../screens/type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useAppRouter = (_route?: string) => {
  const navigation = useNavigation<NativeStackNavigationProp<AllScreenType>>()
  const route = useRoute<RouteProp<AllScreenType>>()

  return { ...navigation, ...route }
}

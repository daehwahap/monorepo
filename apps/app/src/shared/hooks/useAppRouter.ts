import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AllScreenType } from '@/screens/type'

export const useAppRouter = (_route?: string) => {
  const navigation = useNavigation<NativeStackNavigationProp<AllScreenType>>()
  const route = useRoute<RouteProp<AllScreenType>>()

  return { ...navigation, ...route }
}

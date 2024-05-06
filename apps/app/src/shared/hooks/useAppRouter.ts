import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { AllNaivigatorScreenType, AllScreenType } from '../../screens/type'

export const useAppRouter = () => {
  const navigation = useNavigation<NavigationProp<AllNaivigatorScreenType>>()
  const route = useRoute<RouteProp<AllScreenType>>()

  return { ...navigation, ...route }
}

import { Button, Text, View } from 'react-native'
import { useAppRouter } from '../../../shared/hooks/useAppRouter'

export type FirstProps = undefined

export const First = () => {
  const { navigate } = useAppRouter()

  return (
    <View style={{ backgroundColor: 'red', width: 100, height: 100, margin: 100 }}>
      <Text>first</Text>
      <Button onPress={() => navigate('Example', { test: '야호~~~~~' })} title="example로~~" />
    </View>
  )
}

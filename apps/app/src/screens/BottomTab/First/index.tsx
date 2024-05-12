import { Button, Text, View } from 'react-native'
import { useAppRouter } from '../../../shared/hooks/useAppRouter'
import { Toast } from '../../../shared/global-component/Toast'

export type FirstProps = undefined

export const First = () => {
  const { navigate } = useAppRouter()

  return (
    <View style={{ backgroundColor: 'red', width: 100, height: 100, margin: 100 }}>
      <Text>first</Text>
      <Button onPress={() => navigate('Example', { test: '야호~~~~~' })} title="example로~~" />
      <Text>first</Text>
      <Text>first</Text>
      <Text>first</Text>
      <Text>first</Text>
      <Button
        onPress={() => {
          Toast.show({ text: 'aaaaaa' })
        }}
        title="global compnents"
      />
    </View>
  )
}

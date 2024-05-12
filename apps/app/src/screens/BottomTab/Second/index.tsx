import { Text, View } from 'react-native'

export type SecondProps = undefined

export const Second = () => {
  return (
    <View style={{ backgroundColor: 'yellow', width: 100, height: 100, margin: 100 }}>
      <Text>second</Text>
    </View>
  )
}

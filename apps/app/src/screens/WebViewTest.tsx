import { Text, View } from 'react-native'
import { WebView } from '../shared/app-post-message-bridge'

export function WebViewTest(): JSX.Element {
  return (
    <View style={{ height: '100%' }}>
      <WebView
        source={{
          uri: 'http://localhost:3000',
        }}
      />

      <View>
        <Text>asdfsadf</Text>
      </View>
    </View>
  )
}

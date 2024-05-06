import { Button, Text, View } from 'react-native'
import { useAppRouter } from '../../../shared/hooks/useAppRouter'
import { Route, RouteProp } from '@react-navigation/native'

export type ExampleProps = {
  test: string
}

// 이거는 스크린 이동시 props같걸
// 1. 인자로 받기
// 2. useRoute에서 받기

// 둘중에 뭐가 더 좋을지 고민이넹
export const Example = (props: { route: Route<'Example', ExampleProps> }) => {
  const { goBack, params: _params } = useAppRouter()
  const params = _params as ExampleProps

  return (
    <View style={{ backgroundColor: 'blue', width: 100, height: 100, margin: 100 }}>
      <Text>test </Text>
      <Button title="goback" onPress={goBack} />
    </View>
  )
}

import { Alert, Button, Text, TextInput, View } from 'react-native'
import { Header } from '../../../shared/components/custom-header'
import { useState } from 'react'
import { trpc } from '../../../shared/trpc'

export const AcceptInvite = () => {
  const [codeInput, setCodeInput] = useState('')
  return (
    <View>
      <Header />
      <Text>잘부탁드립니다 쓰앵님</Text>
      <TextInput
        value={codeInput}
        onChangeText={(e) => {
          setCodeInput(e)
        }}
        style={{
          borderRadius: 12,
          borderWidth: 1,
          borderColor: 'red',
          padding: 20,
        }}
      />
      <Button
        title="초대권 입력"
        onPress={async () => {
          try {
            const { success } = await trpc.invite.acceptInvite.mutate({ code: codeInput })
            Alert.alert('성공', '성공', [{ text: '성공했습니다' }])
          } catch {
            Alert.alert('실패', '실패', [{ text: '실패했습니다' }])
          }
        }}
      />
    </View>
  )
}

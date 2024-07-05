import { Alert, Button, View } from 'react-native'
import { Header } from '../../../shared/components/custom-header'
import { trpc, trpcQuery } from '../../../shared/trpc'
import Clipboard from '@react-native-clipboard/clipboard'

export const ShareCode = () => {
  const { data } = trpcQuery.invite.getInviteInfo.useQuery()
  const handle = async () => {
    const code = await trpc.invite.getInviteInfo.query()

    console.log('초대권 정보', code)
  }

  const handleCopyInviteCode = () => {
    if (!data) {
      Alert.alert('code없음', 'code 없음', [{ text: '네' }])
      return
    }
    Clipboard.setString(data.code)
    Alert.alert('복사성공', '', [{ text: '네' }])
  }

  return (
    <View>
      <Header />
      <Button title="내 초대권 조회" onPress={handle} />
      <Button title={`내 초대권 코드 복사: ${data?.code}`} onPress={handleCopyInviteCode} />
    </View>
  )
}

import { Button, View } from 'react-native'

import { Header } from '../../../shared/components/custom-header'
import { trpc } from '../../../shared/trpc'

export const ShareCode = () => {
  const handle = async () => {
    const code = await trpc.invite.getInviteInfo.query()

    console.log('초대권 정보', code)
  }

  return (
    <View>
      <Header />
      <Button title="내 초대권 조회" onPress={handle} />
    </View>
  )
}

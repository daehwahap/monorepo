import { Button, View } from 'react-native'

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'

import { Header } from '@/shared/components/custom-header'
import authStorage from '@/shared/storage/Auth'
import { trpc } from '@/shared/trpc'

export const SignIn = () => {
  const handleLoginPress = async () => {
    // TODO bongsu TODO error TODO 에러핸들링 해야함
    await GoogleSignin.signIn()
    const token = await GoogleSignin.getTokens()
    const response = await trpc.user.getAccessToken.query({
      type: 'google',
      accessToken: token.accessToken,
    })

    authStorage.setToken(response.accessToken)
  }

  return (
    <View>
      <Header />

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleLoginPress}
      />

      <Button
        title="aaaaa"
        onPress={async () => {
          const aa = await trpc.user.getUser.query()
          console.log(aa, typeof aa.createdAt, aa.createdAt)
        }}
      />
    </View>
  )
}

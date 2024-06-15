import { View } from 'react-native'
import { Header } from '../../../shared/components/custom-header'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { trpc } from '../../../shared/trpc'
import authStorage from '../../../shared/storage/Auth'

export const SignIn = () => {
  const handleLoginPress = async () => {
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
    </View>
  )
}

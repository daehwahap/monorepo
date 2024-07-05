import { Alert, Button, View } from 'react-native'
import { Header } from '../../../shared/components/custom-header'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { trpc, trpcQuery } from '../../../shared/trpc'
import authStorage from '../../../shared/storage/Auth'

export const SignIn = () => {
  const handleLoginPress = async () => {
    try {
      await GoogleSignin.signIn()
      const token = await GoogleSignin.getTokens()
      const response = await trpc.user.getAccessToken.query({
        type: 'google',
        accessToken: token.accessToken,
      })
      console.log(response)
      Alert.alert('로그인 성공')

      authStorage.setToken(response.accessToken)
    } catch (e) {
      console.error(e)
      Alert.alert('로그인 실패')
    }
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
        title="로그아웃"
        onPress={() => {
          authStorage.removeItem()
          Alert.alert('로그아웃')
        }}
      />
    </View>
  )
}

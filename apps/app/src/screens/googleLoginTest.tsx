import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import React from 'react'
import { Button, View } from 'react-native'
import { trpc, trpcQuery } from '../shared/trpc'
import { GOOGLE_AUTH_KEY } from '@env'
import authStorage from '../shared/storage/Auth'

GoogleSignin.configure({
  iosClientId: GOOGLE_AUTH_KEY,
})

export const GoogleLoginTest = () => {
  const { data } = trpcQuery.user.getUser.useQuery(undefined, { enabled: false })
  console.log('------')
  console.log(data)
  console.log('------')
  const handleLoginPress = async () => {
    await GoogleSignin.signIn()
    console.log(2)
    const token = await GoogleSignin.getTokens()
    const response = await trpc.user.getAccessToken.query({
      type: 'google',
      accessToken: token.accessToken,
    })

    authStorage.setToken(response.accessToken)
  }

  const handleGetUserInfo = async () => {
    const info = await trpc.user.getUser.query()
    console.log(info)
  }

  return (
    <View
      style={{
        padding: 32,
        backgroundColor: 'white',
        marginTop: 48,
      }}
    >
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleLoginPress}
      />

      <View style={{ height: 100 }} />
      <Button title="유저정보 가져오기 버튼" onPress={handleGetUserInfo} />
      <View style={{ height: 100 }} />
    </View>
  )
}

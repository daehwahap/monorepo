import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Button, View} from 'react-native';
import {trpc, trpcQuery} from '../trpc';
import {GOOGLE_AUTH_KEY} from '@env';
import authStorage from '../storage/Auth';

GoogleSignin.configure({
  iosClientId: GOOGLE_AUTH_KEY,
});

export const GoogleLoginTest = () => {
  const {data} = trpcQuery.getUser.useQuery(undefined, {enabled: false});
  console.log('------');
  console.log(data);
  console.log('------');
  const handleLoginPress = async () => {
    //
    // GoogleSignin.
    console.log(1);
    await GoogleSignin.signIn();
    console.log(2);
    const token = await GoogleSignin.getTokens();
    console.log(3);
    const response = await trpc.createUser.mutate({
      type: 'google',
      accessToken: token.accessToken,
    });

    authStorage.setToken(response.accessToken);
  };

  const handleGetUserInfo = async () => {
    const info = await trpc.getUser.query();
    console.log(info);
  };

  const handleGetUserInfononAuth = async () => {
    // try {
    //   const info = await trpc.getUsernonAuth.query();
    //   console.log(info);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <View
      style={{
        padding: 32,
        backgroundColor: 'white',
        marginTop: 48,
      }}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleLoginPress}
      />

      <View style={{height: 100}} />
      <Button title="유저정보 가져오기 버튼" onPress={handleGetUserInfo} />
      <View style={{height: 100}} />
      <Button
        title="유저정보 가져오기 버튼 non auth"
        onPress={handleGetUserInfononAuth}
      />
    </View>
  );
};

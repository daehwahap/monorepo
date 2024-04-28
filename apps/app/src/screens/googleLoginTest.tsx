import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Button, View} from 'react-native';
import {trpc} from '../trpc';
import {GOOGLE_AUTH_KEY} from '@env';

GoogleSignin.configure({
  iosClientId: GOOGLE_AUTH_KEY,
});

export const GoogleLoginTest = () => {
  const handleLoginPress = async () => {
    //
    // GoogleSignin.
    await GoogleSignin.signIn();
    const token = await GoogleSignin.getTokens();
    const response = await trpc.createUser.mutate({
      type: 'google',
      accessToken: token.accessToken,
    });
    console.log(response);
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
      <Button title="구글 로그인 버튼" onPress={handleLoginPress} />
    </View>
  );
};

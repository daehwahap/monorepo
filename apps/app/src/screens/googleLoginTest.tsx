import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Button, View} from 'react-native';

GoogleSignin.configure({
  iosClientId:
    '67810102731-171m3q6smdkn63u9afjqk49l6ql1i1mi.apps.googleusercontent.com',
});

export const GoogleLoginTest = () => {
  const handleLoginPress = async () => {
    //
    // GoogleSignin.
    console.log('aaa');
    GoogleSignin.signIn();
    console.log('token', await GoogleSignin.getTokens());
    console.log('currentUser', await GoogleSignin.getCurrentUser());
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

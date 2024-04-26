import React from 'react';
import {Button, View} from 'react-native';

export const GoogleLoginTest = () => {
  const handleLoginPress = () => {
    const OAuthUrl =
      'https://oauth2.googleapis.com/tokeninfo?id_token=%7BID_TOKEN%7D%22%EC%9C%BC%EB%A1%9C';
  };
  return (
    <View
      style={{
        padding: 32,
        backgroundColor: 'white',
        marginTop: 48,
      }}>
      <Button title="구글 로그인 버튼" onPress={() => console.log('aa')} />
    </View>
  );
};

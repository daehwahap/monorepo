import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {GoogleLoginTest} from './src/screens/googleLoginTest';
import {trpcOption, trpcQuery} from './src/trpc';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {WebView} from './src/AppPostMessageBridge';

const App = () => {
  const queryClient = useRef(new QueryClient());
  const trpcClient = useRef(trpcQuery.createClient(trpcOption));
  return (
    <trpcQuery.Provider
      client={trpcClient.current}
      queryClient={queryClient.current}>
      <QueryClientProvider client={queryClient.current}>
        <View>
          <GoogleLoginTest />
        </View>
        <WebView
          source={{
            uri: 'http://localhost:3000',
          }}
        />
      </QueryClientProvider>
    </trpcQuery.Provider>
  );
};

export default App;

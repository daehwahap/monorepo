import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {GoogleLoginTest} from './src/screens/googleLoginTest';
import {trpcOption, trpcQuery} from './src/trpc';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const queryClient = useRef(new QueryClient());
  const trpcClient = useRef(trpcQuery.createClient(trpcOption));
  return (
    <trpcQuery.Provider
      client={trpcClient.current}
      queryClient={queryClient.current}>
      <QueryClientProvider client={queryClient.current}>
        <View>
          {/* Your app here */}
          <View style={{marginTop: 100, backgroundColor: 'red'}} />
          <Text>asdfsf</Text>
          <GoogleLoginTest />
        </View>
      </QueryClientProvider>
    </trpcQuery.Provider>
  );
};

export default App;

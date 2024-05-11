import React, { useRef } from 'react'
import { trpcOption, trpcQuery } from './src/shared/trpc'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GlobalComponentProvider from './src/shared/global-component'
import { NavigationContainer } from '@react-navigation/native'
import RootNativeStackNavigation from './src/screens/Root'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  const queryClient = useRef(new QueryClient())
  const trpcClient = useRef(trpcQuery.createClient(trpcOption))
  return (
    <View style={{ flex: 1 }}>
      <trpcQuery.Provider client={trpcClient.current} queryClient={queryClient.current}>
        <QueryClientProvider client={queryClient.current}>
          <NavigationContainer>
            <GlobalComponentProvider>
              <RootNativeStackNavigation />
            </GlobalComponentProvider>
          </NavigationContainer>
        </QueryClientProvider>
      </trpcQuery.Provider>
    </View>
  )
}

export default App

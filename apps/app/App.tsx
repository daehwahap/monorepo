import React, { useRef } from 'react'
import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GlobalComponentProvider from './src/shared/global-component'
import { NavigationContainer } from '@react-navigation/native'
import RootNativeStackNavigation from './src/screens/Root'
import { View } from 'react-native'


import RootNativeStackNavigation from '@/screens/Root'
import GlobalComponentProvider from '@/shared/global-component'
import { trpcOption, trpcQuery } from '@/shared/trpc'

function App() {
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

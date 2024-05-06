import React, { useRef } from 'react'
import { trpcOption, trpcQuery } from './src/shared/trpc'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RootNavigation } from './src/screens/Root'
import GlobalComponentProvider from './src/shared/global-component'

const App = () => {
  const queryClient = useRef(new QueryClient())
  const trpcClient = useRef(trpcQuery.createClient(trpcOption))
  return (
    <trpcQuery.Provider client={trpcClient.current} queryClient={queryClient.current}>
      <QueryClientProvider client={queryClient.current}>
        <GlobalComponentProvider>
          <RootNavigation />
        </GlobalComponentProvider>
      </QueryClientProvider>
    </trpcQuery.Provider>
  )
}

export default App

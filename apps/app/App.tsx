import React, { useRef } from 'react'
import { trpcOption, trpcQuery } from './src/shared/trpc'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RootNavigation } from './src/screens/Root'

const App = () => {
  const queryClient = useRef(new QueryClient())
  const trpcClient = useRef(trpcQuery.createClient(trpcOption))
  return (
    <trpcQuery.Provider client={trpcClient.current} queryClient={queryClient.current}>
      <QueryClientProvider client={queryClient.current}>
        <RootNavigation />
      </QueryClientProvider>
    </trpcQuery.Provider>
  )
}

export default App

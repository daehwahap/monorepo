import React, { PropsWithChildren, useRef } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { trpcOption, trpcQuery } from '@/shared/trpc'


const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useRef(new QueryClient())
  const trpcClient = useRef(trpcQuery.createClient(trpcOption))

  return (
    <trpcQuery.Provider client={trpcClient.current} queryClient={queryClient.current}>
      <QueryClientProvider client={queryClient.current}>{children}</QueryClientProvider>
    </trpcQuery.Provider>
  )
}

export default ReactQueryProvider

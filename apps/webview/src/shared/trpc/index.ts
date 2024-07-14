import { AppRouter } from '@pinit/server/src/trpc/trpc.router'

import { createTRPCProxyClient, createTRPCReact, httpBatchLink } from '@trpc/react-query'
import superjson from 'superjson'

export const trpcOption = {
  transformer: superjson,
  links: [
    httpBatchLink({
      url: 'http://localhost:8080/trpc', // you should update this to use env variables
    }),
  ],
}

export const trpcQuery = createTRPCReact<AppRouter>()

export const trpc = createTRPCProxyClient<AppRouter>(trpcOption)

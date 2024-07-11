import { AppRouter } from '@pinit/server/src/trpc/trpc.router'

import { createTRPCProxyClient } from '@trpc/client'
import { createTRPCReact, httpBatchLink } from '@trpc/react-query'

import authStorage from '@/shared/storage/Auth'

export const trpcOption = {
  links: [
    httpBatchLink({
      // url: 'http://172.30.1.54:8080/trpc', // you should update this to use env variables
      url: 'http://localhost:8080/trpc', // you should update this to use env variables
      // url: 'http://localhost:8080/trpc', // you should update this to use env variables
      // url, // you should update this to use env variables
      headers() {
        return {
          Authorization: `Bearer ${authStorage.getToken()}`,
        }
      },
    }),
  ],
}

export const trpcQuery = createTRPCReact<AppRouter>()
export const trpc = createTRPCProxyClient<AppRouter>(trpcOption)

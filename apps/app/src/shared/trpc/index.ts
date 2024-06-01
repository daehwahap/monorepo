import { AppRouter } from '@pinit/server/src/trpc/trpc.router'

import { createTRPCProxyClient } from '@trpc/client'
import { createTRPCReact, httpBatchLink } from '@trpc/react-query'

import authStorage from '@/shared/storage/Auth'

export const trpcOption = {
  links: [
    httpBatchLink({
      url: 'http://localhost:8080/trpc', // you should update this to use env variables
      headers() {
        return {
          Authorization: `Bearer ${authStorage.getToken()}`,
        }
      },
    }),
  ],
}

export const trpcQuery = createTRPCReact<AppRouter>()
// react-query 같이쓰게하면 해당 api가 deprecated되는데
// 사용상에는 지장이 없어서 사용.
// 후에 버전올릴 때 이슈 있으면 대응 필요
export const trpc = createTRPCProxyClient<AppRouter>(trpcOption)

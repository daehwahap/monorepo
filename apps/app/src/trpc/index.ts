import {AppRouter} from '@repo/server/src/trpc/trpc.router';
import {createTRPCProxyClient, httpBatchLink} from '@trpc/client';
import authStorage from '../storage/Auth';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8080/trpc', // you should update this to use env variables
      headers() {
        return {
          Authorization: `Bearer ${authStorage.getToken()}`,
        };
      },
    }),
  ],
});

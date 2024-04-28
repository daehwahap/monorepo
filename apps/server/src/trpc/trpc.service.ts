import { Injectable, Req, UseGuards } from '@nestjs/common';
import { TRPCError, initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

// Create your context based on the request object
// Will be available as `ctx` in all your resolvers
// This is just an example of something you might want to do in your ctx fn

@Injectable()
export class TrpcService {
  private createContext = async ({ req }: FetchCreateContextFnOptions) => {
    if (!req.headers.get('authenticate')) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    // 여기서 디코딩하고 유저 받아주는 로직
    console.log(req);
    const user = { userId: 'aa' };
    return user;
  };

  trpc = initTRPC.context<typeof this.createContext>().create();
  auth = this.trpc.middleware(async ({ next, ctx }) => {
    console.log(ctx);
    // if (!ctx.userId) {
    //   throw new TRPCError({ code: 'UNAUTHORIZED' })
    // }
    return next({ ctx });
  });

  procedure = this.trpc.procedure;

  @UseGuards(JwtAuthGuard)
  authProcedure() {
    return this.procedure.use(this.auth);
  }

  router = this.trpc.router;
  mergeRouters = this.trpc.mergeRouters;
}

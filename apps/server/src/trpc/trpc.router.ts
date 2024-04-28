import { UserController } from './user/user.controller';
import { HttpException, INestApplication, Injectable } from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';
import { TrpcService } from './trpc.service';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly userController: UserController,
    private readonly trpcService: TrpcService,
  ) {}

  mergeRouter = this.trpcService.mergeRouters(this.userController.router);

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.mergeRouter,
        createContext: this.trpcService.createContext as any,
        onError(opts) {
          const { error, type, path, input, ctx, req } = opts;
          console.error('Error:', error);
        },
      }),
    );
  }
}

export type AppRouter = TrpcRouter['mergeRouter'];

import { UserController } from './user/user.controller';
import { INestApplication, Injectable } from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';
import { NodeHTTPHandlerOptions } from '@trpc/server/dist/adapters/node-http';
import express from 'express';
import { AnyRouter } from '@trpc/server';
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
      } as NodeHTTPHandlerOptions<
        AnyRouter,
        express.Request,
        express.Response
      >),
    );
  }
}

export type AppRouter = TrpcRouter['mergeRouter'];

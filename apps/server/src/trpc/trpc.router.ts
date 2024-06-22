import { UserController } from './user/user.controller'
import { INestApplication, Injectable } from '@nestjs/common'
import * as trpcExpress from '@trpc/server/adapters/express'
import { TrpcService } from './trpc.service'
import { AwsController } from './aws/aws.controller'
import { InviteController } from './invite/invite.controller'

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly userController: UserController,
    private readonly awsController: AwsController,
    private readonly inviteController: InviteController,
  ) {}

  appRouter = this.trpcService.router({
    user: this.userController.router,
    aws: this.awsController.router,
    invite: this.inviteController.router,
  })

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
        createContext: this.trpcService.createContext as any,
        onError(opts) {
          const { error, type, path, input, ctx, req } = opts
          console.error('Error:', error)
        },
      }),
    )
  }
}

export type AppRouter = TrpcRouter['appRouter']

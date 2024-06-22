import { Module, forwardRef } from '@nestjs/common'
import { TrpcService } from './trpc.service'
import { TrpcRouter } from './trpc.router'
import { UserModule } from 'src/trpc/user/user.module'
import { UserController } from './user/user.controller'
import { AuthModule } from 'src/auth/auth.module'
import { AwsModule } from 'src/trpc/aws/aws.module'
import { AwsController } from 'src/trpc/aws/aws.controller'
import { InviteModule } from 'src/trpc/invite/invite.module'
import { InviteController } from 'src/trpc/invite/invite.controller'

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => AwsModule),
    forwardRef(() => InviteModule),
    AuthModule,
  ],
  providers: [TrpcService, TrpcRouter, UserController, AwsController, InviteController],
})
export class TrpcModule {}

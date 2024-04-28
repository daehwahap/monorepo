import { Module, forwardRef } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { UserModule } from 'src/trpc/user/user.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [],
  providers: [TrpcService, TrpcRouter, UserController],
})
export class TrpcModule {}

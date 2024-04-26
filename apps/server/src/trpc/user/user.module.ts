import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { TrpcModule } from '../trpc.module';
import { TrpcService } from '../trpc.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [forwardRef(() => TrpcModule), PrismaModule],
  providers: [UserService, UserRepository, TrpcService],
  exports: [UserService],
})
export class UserModule {}

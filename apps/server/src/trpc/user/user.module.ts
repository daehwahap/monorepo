import { Module, forwardRef } from '@nestjs/common'
import { UserService } from './user.service'
import { UserRepository } from './user.repository'
import { TrpcModule } from '../trpc.module'
import { TrpcService } from '../trpc.service'
import { PrismaModule } from 'src/prisma/prisma.module'
import { HttpModule } from '@nestjs/axios'
import { AuthModule } from 'src/auth/auth.module'
import { AuthService } from 'src/auth/auth.service'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { InviteModule } from 'src/trpc/invite/invite.module'

@Module({
  imports: [
    forwardRef(() => TrpcModule),
    forwardRef(() => PrismaModule),
    forwardRef(() => InviteModule),
    HttpModule,
    AuthModule,
    JwtModule,
  ],
  providers: [UserService, UserRepository, TrpcService, AuthService, JwtService],
  exports: [UserService],
})
export class UserModule {}

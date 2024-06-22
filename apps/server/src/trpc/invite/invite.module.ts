import { forwardRef, Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { InviteRepository } from 'src/trpc/invite/invite.repository'
import { InviteService } from 'src/trpc/invite/invite.service'
import { TrpcModule } from 'src/trpc/trpc.module'

@Module({
  imports: [forwardRef(() => TrpcModule), forwardRef(() => PrismaModule)],
  providers: [InviteService, InviteRepository],
  exports: [InviteService],
})
export class InviteModule {}

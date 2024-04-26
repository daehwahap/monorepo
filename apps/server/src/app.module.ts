import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { TrpcModule } from './trpc/trpc.module'
import { UserModule } from './trpc/user/user.module'
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TrpcModule, UserModule, PrismaModule],
  controllers: [],
  providers: [AppService, PrismaService],
})
export class AppModule {}

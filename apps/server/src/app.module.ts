import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TrpcModule } from './trpc/trpc.module';
import { UserModule } from './trpc/user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TrpcModule,
    UserModule,
    PrismaModule,
    AuthModule,
  ],
  providers: [AppService, PrismaService],
})
export class AppModule {}

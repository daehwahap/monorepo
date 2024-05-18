import { forwardRef, Module } from '@nestjs/common'
import { AuthModule } from 'src/auth/auth.module'
import { AwsService } from 'src/trpc/aws/aws.service'
import { TrpcModule } from 'src/trpc/trpc.module'
import { TrpcService } from 'src/trpc/trpc.service'

@Module({
  imports: [forwardRef(() => TrpcModule), AuthModule],
  providers: [TrpcService, AwsService],
  exports: [AwsService],
})
export class AwsModule {}

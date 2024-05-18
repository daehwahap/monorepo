import { Injectable } from '@nestjs/common'
import { AwsService } from './aws.service'
import { TrpcService } from '../trpc.service'
import { z } from 'zod'

@Injectable()
export class AwsController {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly awsService: AwsService,
  ) {}

  router = this.trpcService.router({
    getPresignedUrl: this.trpcService.procedure
      .input(
        z.object({
          fileExtension: z.string(),
        }),
      )
      .query(async ({ input }) => {
        return this.awsService.getPresignedUrl(input.fileExtension)
      }),
  })
}

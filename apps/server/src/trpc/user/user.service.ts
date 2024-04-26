import { UserRepository } from './user.repository'
import { Injectable } from '@nestjs/common'
import { TrpcService } from '../trpc.service'
import { UserCreateInputSchema } from 'src/prisma/dto'
import { z } from 'zod'

@Injectable()
export class UserService {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly userRepository: UserRepository,
  ) {}

  createUser = this.trpcService.procedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
        name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const signInUser = await this.userRepository.createUser(input)

      
    })

  getUser = this.trpcService.authProcedure.input(z.object({ aa: z.string() })).query(() => {
    return this.userRepository.getUser()
  })
}

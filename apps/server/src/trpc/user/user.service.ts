import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { TrpcService } from '../trpc.service';
import { z } from 'zod';
import { OauthAccessTokenDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly userRepository: UserRepository,
  ) {}

  createUser = this.trpcService.procedure
    .input(OauthAccessTokenDTO)
    .mutation(async ({ input }) => {
      

      // const signInUser = await this.userRepository.createUser(input);
    });

  getUser = this.trpcService.authProcedure
    .input(z.object({ aa: z.string() }))
    .query(() => {
      return this.userRepository.getUser();
    });
}

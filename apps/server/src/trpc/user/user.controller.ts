import { User, UserSchema } from './../../prisma/dto/index'
import { Injectable } from '@nestjs/common'
import { TrpcService } from '../trpc.service'
import { UserService } from './user.service'
import { OauthAccessTokenDTO } from './user.dto'
import { noop } from 'rxjs'
import { z } from 'zod'

@Injectable()
export class UserController {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly userService: UserService,
  ) {}

  router = this.trpcService.router({
    /**
     * 소셜로그인을 통해 accessToken을 발급
     */
    getAccessToken: this.trpcService.procedure
      .input(OauthAccessTokenDTO)
      .query(async ({ input }) => {
        if (input.type === 'google') {
          return await this.userService.googleLogin(input.accessToken)
        }

        return await this.userService.googleLogin(input.accessToken)
      }),

    /**
     * JWT 기반으로 유저정보를 받아오는 로직
     */
    getUser: this.trpcService.authProcedure.input(noop).query(async ({ ctx }) => {
      const { uid } = ctx
      return await this.userService.getUser({ uid })
    }),

    hello: this.trpcService.procedure
      .input(
        z.object({
          name: z.string().optional(),
        }),
      )
      .query(({ input }) => {
        const { name } = input
        return {
          greeting: `Hello ${name ? name : `Bilbo`}`,
        }
      }),
  })
}

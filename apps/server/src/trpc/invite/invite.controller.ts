import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { noop } from 'rxjs'
import { InviteService } from './invite.service'
import { TrpcService } from '../trpc.service'
import { requestAcceptInvite } from './invite.dto'
import { TRPCError } from '@trpc/server'
import { UserService } from '../user/user.service'
import { InviteInfoSchema } from 'src/prisma/dto'

@Injectable()
export class InviteController {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly inviteService: InviteService,
    private readonly userSevice: UserService,
  ) {}

  router = this.trpcService.router({
    postInviteInfo: this.trpcService.authProcedure.input(noop).query(async ({ ctx }) => {
      const { uid } = ctx

      return await this.inviteService.createInviteInfo(uid)
    }),
    getInviteInfo: this.trpcService.authProcedure.input(noop).query(async ({ ctx }) => {
      const { uid } = ctx

      return await this.inviteService.getInviteInfo(uid)
    }),

    acceptInvite: this.trpcService.authProcedure
      .input(requestAcceptInvite)
      .mutation(async ({ ctx, input }) => {
        const inviteeUid = ctx.uid
        const code = input.code
        const user = await this.userSevice.getUser({ uid: inviteeUid })

        if (user.type !== 'USER_NOT_INVITED') {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: '이미 초대받은 유저입니다.',
          })
        }

        try {
          await this.inviteService.acceptInvite(code, inviteeUid)
          return {
            success: true,
          }
        } catch {
          return {
            success: false,
          }
        }
      }),
  })
}

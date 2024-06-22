import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { noop } from 'rxjs'
import { InviteService } from './invite.service'
import { TrpcService } from '../trpc.service'

@Injectable()
export class InviteController {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly inviteService: InviteService,
  ) {}

  router = this.trpcService.router({
    postInviteInfo: this.trpcService.authProcedure.input(noop).query(async ({ ctx }) => {
      const { uid } = ctx as User

      return await this.inviteService.createInviteInfo(uid)
    }),
    getInviteInfo: this.trpcService.authProcedure.input(noop).query(async ({ ctx }) => {
      const { uid } = ctx as User

      return await this.inviteService.getInviteInfo(uid)
    }),
  })
}

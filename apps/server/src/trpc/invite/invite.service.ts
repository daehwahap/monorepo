import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { InviteRepository } from 'src/trpc/invite/invite.repository'

@Injectable()
export class InviteService {
  constructor(private readonly inviteRepository: InviteRepository) {}

  async createInviteInfo(uid: User['uid']) {
    try {
      const now = new Date()

      /**
       * @todo
       * 초대권 티어 개념이 정의되면 테이블에서 정보 가져와서 넣어주도록 변경
       */
      const data = {
        uid,
        code: uid,
        createdAt: now,
        updatedAt: now,
        availableInviteCount: 100,
        inviteHistoryCount: 0,
        tier: 'temp tier',
      }

      const inviteInfo = await this.inviteRepository.createInviteInfo(data)

      return inviteInfo
    } catch (error) {
      /**
       * @todo 에러 처리
       */
    }
  }
}

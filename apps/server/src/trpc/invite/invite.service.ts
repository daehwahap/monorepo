import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { InviteRepository } from 'src/trpc/invite/invite.repository'
import { generateCode } from 'src/trpc/invite/invite.utils'

@Injectable()
export class InviteService {
  constructor(private readonly inviteRepository: InviteRepository) {}

  async createInviteInfo(uid: User['uid']) {
    try {
      /**
       * @todo
       * 초대권 티어 개념이 정의되면 테이블에서 정보 가져와서 넣어주도록 변경
       */
      const data = {
        uid,
        code: generateCode(),
        availableInviteCount: 100,
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

  async getInviteInfo(uid: User['uid']) {
    return this.inviteRepository.findInviteInfo({ uid })
  }
}

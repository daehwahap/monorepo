import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { InviteInfo, Prisma, User } from '@prisma/client'
import { TRPCError } from '@trpc/server'

@Injectable()
export class InviteRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createInviteInfo(data: Prisma.InviteInfoCreateInput) {
    return await this.prismaService.inviteInfo.create({
      data,
    })
  }

  async findInviteInfo(data: Prisma.InviteInfoWhereUniqueInput) {
    return await this.prismaService.inviteInfo.findFirst({
      where: { uid: data.uid },
    })
  }

  async acceptInvite(code: InviteInfo['code'], inviteeUid: User['uid']) {
    this.prismaService.$transaction(
      async (tx) => {
        const inviterInviteInfo = await tx.inviteInfo.findUnique({
          where: { code },
          include: { user: true },
        })
        if (!inviterInviteInfo) {
          // TODO 초대권없음 애러 떤져야함
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: '해당 코드를 갖고있는 유저가 없습니다.',
          })
        }

        const inviterUserInfo = inviterInviteInfo?.user
        if (inviterInviteInfo.availableInviteCount <= 0) {
          // TODO bongsu 여기에 에러 떤져야함
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: '초대 가능 인원수를 초과해서, 초대할 수 없습니다.',
          })
        }

        if (!inviterUserInfo) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: '초대해준 사람이 없습니다.',
          })
        }

        await Promise.all([
          // 초대 한사람
          // 초대권 갯수 - 1, 초대 히스토리 수 + 1
          tx.inviteInfo.update({
            where: { uid: inviterUserInfo.uid },
            data: {
              availableInviteCount: inviterInviteInfo.availableInviteCount - 1,
              inviteHistoryCount: inviterInviteInfo.inviteHistoryCount + 1,
            },
          }),
          // 초대 받은사람 유저 타입 바꿔줌
          tx.user.update({
            where: { uid: inviteeUid },
            data: { type: 'USER' },
          }),
          // 초대 기록 테이블 업데이트
          tx.inviteRecord.create({
            data: {
              inviteeUid,
              inviterUid: inviterUserInfo.uid,
            },
          }),
        ])

        // Code running in a transaction...
      },
      {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
      },
    )
  }
}

import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class InviteRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createInviteInfo(data: Prisma.InviteInfoCreateInput) {
    return await this.prismaService.inviteInfo.create({
      data,
    })
  }
}

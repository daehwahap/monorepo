import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findGoogleUser(data: Prisma.GoogleProfileWhereUniqueInput) {
    return await this.prismaService.googleProfile.findFirst({
      where: { sub: data.sub },
    });
  }

  async createGoogleUser(data: Prisma.GoogleProfileCreateInput) {
    return await this.prismaService.googleProfile.create({ data });
  }

  async createUser(data: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({
      data,
    });
  }

  async findUserById(id: User['id']) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
}

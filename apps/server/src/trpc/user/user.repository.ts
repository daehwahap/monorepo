import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getGoogleUser(data: Prisma.GoogleProfileWhereUniqueInput) {
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

  async getUser() {
    return this.prismaService.user.findMany();
  }

  async findUserById(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
}

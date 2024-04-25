import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({
      data,
    });
  }

  async getUser() {
    console.log('repository');
    return this.prismaService.user.findMany();
  }
}

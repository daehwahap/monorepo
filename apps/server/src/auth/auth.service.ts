import { User } from './../prisma/dto/index';
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SECRET } from './jwt/jwt.constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async jwtSignIn(params: User) {
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: { id: params.id },
    });
    if (!user) {
      throw new HttpException('잘못된 로그인 입니다.', 405);
    }

    return await this.jwtService.signAsync(user, {
      secret: SECRET,
    });
  }
}

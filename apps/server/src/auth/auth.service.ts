import { User } from './../prisma/dto/index'
import { HttpException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { JWT_SECRET } from './auth.constants'

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async jwtSignIn(params: User) {
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: { uid: params.uid },
    })
    if (!user) {
      throw new HttpException('잘못된 로그인 입니다.', 405)
    }

    return await this.jwtService.signAsync(user, {
      secret: JWT_SECRET,
    })
  }

  decodeJWT(token: string) {
    return this.jwtService.decode(token)
  }
}

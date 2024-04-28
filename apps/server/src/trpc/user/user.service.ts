import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { TrpcService } from '../trpc.service';
import { OauthAccessTokenDTO } from './user.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, noop } from 'rxjs';
import { Profile } from 'passport-google-oauth20';
import { User } from 'src/prisma/dto';
import { Prisma } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly userRepository: UserRepository,
    private readonly httpService: HttpService,
    private readonly authService: AuthService,
  ) {}

  createOrGetUser = this.trpcService.procedure
    .input(OauthAccessTokenDTO)
    .mutation(async ({ input }): Promise<{ accessToken: string }> => {
      console.log('ccc');
      return await this.googleLogin(input.accessToken);
    });

  getUsernonAuth = this.trpcService.procedure.input(noop).query(() => {
    return this.userRepository.getUser();
  });

  getUser = this.trpcService.authProcedure
    .input(noop)
    .query(async ({ ctx }) => {
      const { id } = ctx as User;
      console.log('aaa');
      return await this.userRepository.findUserById(id);
    });

  private async googleLogin(accessToken: string) {
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`,
        )
        .pipe(
          catchError(() => {
            throw 'An error happened!';
          }),
        ),
    );

    const userInfo = data as Profile['_json'];

    try {
      const checkGoogleUser = await this.userRepository.getGoogleUser({
        sub: userInfo.sub,
      });

      if (!checkGoogleUser) {
        // 구글 로그인
        const newUser = await this.userRepository.createUser({
          imageUrl: userInfo.profile,
          name: userInfo.name,
        });
        await this.userRepository.createGoogleUser({
          ...(userInfo as Omit<Prisma.GoogleProfileCreateInput, 'uid'>),
          uid: newUser.id,
        });

        const accessToken = await this.authService.jwtSignIn(newUser as User);
        return { accessToken };
      }

      const existUser = await this.userRepository.findUserById(
        checkGoogleUser.uid,
      );
      const accessToken = await this.authService.jwtSignIn(existUser as User);

      return { accessToken };
    } catch (e) {
      const newUser = await this.userRepository.createUser({
        imageUrl: userInfo.profile,
        name: userInfo.name,
      });
      await this.userRepository.createGoogleUser({
        ...(userInfo as Omit<Prisma.GoogleProfileCreateInput, 'uid'>),
        uid: newUser.id,
      });

      const accessToken = await this.authService.jwtSignIn(newUser as User);

      return { accessToken };
    }
  }
}

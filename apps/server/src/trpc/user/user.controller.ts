import { Injectable } from '@nestjs/common';
import { TrpcService } from '../trpc.service';
import { UserService } from './user.service';

@Injectable()
export class UserController {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly UserService: UserService,
  ) {}

  router = this.trpcService.router({
    createUser: this.UserService.createOrGetUser,
    getUser: this.UserService.getUser,
    getUsernonAuth: this.UserService.getUsernonAuth,
  });
}

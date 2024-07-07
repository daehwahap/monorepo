import { Controller, Get } from '@nestjs/common'
import { TRPCError } from '@trpc/server'

@Controller('/')
export class AppController {
  @Get('/')
  async test() {
    return 'hello world'
  }
}

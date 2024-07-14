import { User } from './../prisma/dto/index'
import { TRPCError, initTRPC } from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { AuthService } from 'src/auth/auth.service'
import { ZodError } from 'zod'
import * as Sentry from '@sentry/node'
import { Injectable } from '@nestjs/common'
import superjson from 'superjson'

// Create your context based on the request object
// Will be available as `ctx` in all your resolvers
// This is just an example of something you might want to do in your ctx fn

@Injectable()
export class TrpcService {
  constructor(private readonly authService: AuthService) {}
  createContext = async (opts: CreateNextContextOptions) => {
    const { req } = opts
    const user = this.authService.decodeJWT(
      req.headers['authorization']?.replace('Bearer ', '') || '',
    )

    return user
  }

  trpc = initTRPC.context<typeof this.createContext>().create({
    transformer: superjson,
    errorFormatter(opts) {
      const { shape, error, ctx, path, input } = opts

      Sentry.setContext('ctx', {
        ...ctx,
        path,
        input,
      })
      Sentry.captureException(error)

      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
              ? error.cause.flatten()
              : null,
        },
      }
    },
  })

  auth = this.trpc.middleware(async (input) => {
    const { next, ctx } = input

    if (!ctx) {
      throw new TRPCError({
        message: 'unAuthorization error',
        code: 'UNAUTHORIZED',
        cause: 'jwt decode error',
      })
    }

    const ctxAsUid = ctx as Pick<User, 'uid'>

    return next({ ctx: ctxAsUid })
  })

  procedure = this.trpc.procedure
  authProcedure = this.procedure.use(this.auth)

  router = this.trpc.router
}

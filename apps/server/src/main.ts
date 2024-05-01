import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import * as Sentry from '@sentry/node'

import { AppModule } from './app.module'
import { TrpcRouter } from './trpc/trpc.router'
import { SentryFilter } from 'src/sentry/sentry.filter'
import { nodeProfilingIntegration } from '@sentry/profiling-node'

async function bootstrap() {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [nodeProfilingIntegration()],
  })

  const app = await NestFactory.create(AppModule)

  const { httpAdapter } = app.get(HttpAdapterHost)

  app.enableCors()
  app.useGlobalFilters(new SentryFilter(httpAdapter))

  const trpc = app.get(TrpcRouter)
  trpc.applyMiddleware(app)

  await app.listen(8080)
}

bootstrap()

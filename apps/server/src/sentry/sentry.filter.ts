import { Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import * as Sentry from '@sentry/node'

@Catch()
export class SentryFilter extends BaseExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    Sentry.captureException(exception)
    super.catch(exception, host)
  }
}

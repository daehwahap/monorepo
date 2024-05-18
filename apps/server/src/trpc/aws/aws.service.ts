import { Injectable } from '@nestjs/common'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { AWS_ENV } from 'src/trpc/aws/aws.constants'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { TRPCError } from '@trpc/server'
import { TIME_S } from 'src/shared/constants'

@Injectable()
export class AwsService {
  private readonly s3Client: S3Client

  constructor() {
    this.s3Client = new S3Client({
      region: AWS_ENV.AWS_REGION,
      credentials: {
        accessKeyId: AWS_ENV.AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_ENV.AWS_SECRET_ACCESS_KEY,
      },
    })
  }

  async getPresignedUrl(type: string) {
    const fileExtension = type.split('/')[1]

    if (!fileExtension) {
      throw new TRPCError({
        message: 'invalid request',
        code: 'BAD_REQUEST',
      })
    }

    try {
      const command = new PutObjectCommand({
        Bucket: AWS_ENV.AWS_S3_BUCKET_NAME,
        Key: `${new Date().getTime()}/${fileExtension}`,
        ContentType: type,
      })

      const signedUrl = await getSignedUrl(this.s3Client, command, {
        expiresIn: TIME_S['1분'],
      })

      return signedUrl
    } catch (error) {
      /**
       * @todo sentry 로그 추가
       */
      console.log('getPresginedUrl error', error)
    }
  }
}

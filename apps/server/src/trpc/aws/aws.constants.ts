/**
 * @todo env가 없으면 사용처에서 throw error 하는게 나을지,
 * 아니면 빈 스트링을 넣어주는게 나을지
 */
export const AWS_ENV = {
  AWS_REGION: process.env.AWS_REGION ?? '',
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME ?? '',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID ?? '',
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY ?? '',
}

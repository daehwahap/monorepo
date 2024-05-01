import { z } from 'zod';

const OauthAccessTokenType = z.union([z.literal('google'), z.literal('apple')]);

export const OauthAccessTokenDTO = z.object({
  type: OauthAccessTokenType,
  accessToken: z.string(),
});

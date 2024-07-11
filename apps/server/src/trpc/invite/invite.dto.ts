import { z } from 'zod'

export const requestAcceptInvite = z.object({
  code: z.string(),
})

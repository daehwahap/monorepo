import { AcceptInvite } from './accept-invite'
import { LanguageChange } from './language-change'
import { ShareCode } from './share-code'
import { SignIn } from './sign-in'

export const NATIVE_STACK_LIST = [
  { name: 'LanguageChange', component: LanguageChange, options: undefined },
  { name: 'SignIn', component: SignIn, options: undefined },
  { name: 'ShareCode', component: ShareCode, options: undefined },
  { name: 'AcceptInvite', component: AcceptInvite, options: undefined },
] as const

export type StackScreenListType = typeof NATIVE_STACK_LIST

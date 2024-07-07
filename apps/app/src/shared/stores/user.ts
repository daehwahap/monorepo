import { trpc } from './../trpc/index'
import { create } from 'zustand'
import { User } from '@pinit/server/src/prisma/dto'

type UserStore = {
  _user?: User
  user: User
  ininUser: () => Promise<void>
}

export const useUser = create<UserStore>()((set, get) => ({
  _user: undefined,
  user: (() => {
    const _user = get()._user
    if (!_user) {
      get().ininUser()
      throw new Error('user가 없습니다.')
    }

    return _user
  })(),
  ininUser: async () => {
    const user = await trpc.user.getUser.query()
    set({ user })
  },
}))

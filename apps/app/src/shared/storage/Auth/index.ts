import { MMKVWrapper } from '@/shared/storage'
import { STORAGE_KEY } from '@/shared/storage/constants'

class AuthStorage extends MMKVWrapper<string> {
  setToken(item: string) {
    this.setItem(item)
  }

  getToken() {
    return this.getItem() ?? ''
  }
}

const authStorage = new AuthStorage(STORAGE_KEY.auth)

export default authStorage

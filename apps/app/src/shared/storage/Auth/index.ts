import MMKVWrapper from '..'
import { STORAGE_KEY } from '../constants'

class AuthStorage extends MMKVWrapper<string> {
  setToken(item: string) {
    this.setItem(item)
  }

  getToken() {
    return this.getItem() ?? ''
  }
  removeToken() {
    this.removeItem()
  }
}

const authStorage = new AuthStorage(STORAGE_KEY.auth)

export default authStorage

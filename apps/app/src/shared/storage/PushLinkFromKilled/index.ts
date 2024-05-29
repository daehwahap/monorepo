import MMKVWrapper from '..'
import { STORAGE_KEY } from '../constants'

class PushLinkFromKilledStorage extends MMKVWrapper<string> {
  setPushLink(item: string) {
    this.setItem(item)
  }
  getPushLink() {
    return this.getItem() ?? ''
  }
  removePushLink() {
    this.removeItem()
  }
}

export const pushLinkFromKilledStorage = new PushLinkFromKilledStorage(
  STORAGE_KEY.pushLinkFromKilled,
)

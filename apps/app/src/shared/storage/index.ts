import { MMKV } from 'react-native-mmkv'

export class MMKVWrapper<T> {
  private key: string

  private mmkv = new MMKV()

  constructor(namespace: string) {
    this.key = namespace
  }

  protected setItem(value: T) {
    this.mmkv.set(this.key, JSON.stringify(value))
  }

  protected getItem(): T | null {
    const value = this.mmkv.getString(this.key)
    if (!value) {
      return null
    }

    return JSON.parse(value)
  }

  protected removeItem() {
    this.mmkv.delete(this.key)
  }
}

export default MMKVWrapper

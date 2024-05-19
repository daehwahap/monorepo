import { LanguageTypes, defaultLanguage } from '@pinit/shared/src/utils'
import MMKVWrapper from '..'
import { STORAGE_KEY } from '../constants'

class LanguageStroage extends MMKVWrapper<LanguageTypes> {
  setLocale(item: LanguageTypes) {
    this.setItem(item)
  }
  getToken() {
    return this.getItem() ?? defaultLanguage
  }
}

const localeStorage = new LanguageStroage(STORAGE_KEY.language)

export default localeStorage

import { LocaleTypes, fallbackLng } from '@pinit/shared/src/utils'
import MMKVWrapper from '..'
import { STORAGE_KEY } from '../constants'

class LanguageStroage extends MMKVWrapper<LocaleTypes> {
  setLocale(item: LocaleTypes) {
    this.setItem(item)
  }
  getToken() {
    return this.getItem() ?? fallbackLng
  }
}

const localeStorage = new LanguageStroage(STORAGE_KEY.locale)

export default localeStorage

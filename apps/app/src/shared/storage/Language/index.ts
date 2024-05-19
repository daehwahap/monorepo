import { LanguageTypes, defaultLanguage } from '@pinit/shared/src/utils'
import MMKVWrapper from '..'
import { STORAGE_KEY } from '../constants'

class LanguageStroage extends MMKVWrapper<LanguageTypes> {
  setLanguage(item: LanguageTypes) {
    this.setItem(item)
  }
  getLanguage() {
    return this.getItem() ?? defaultLanguage
  }
}

const languageStorage = new LanguageStroage(STORAGE_KEY.language)

export default languageStorage

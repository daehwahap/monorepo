import { LanguageTypes } from '@pinit/shared/src/constants'
import MMKVWrapper from '..'
import { STORAGE_KEY } from '../constants'
import { NativeModules, Platform } from 'react-native'

class LanguageStroage extends MMKVWrapper<LanguageTypes> {
  setLanguage(item: LanguageTypes) {
    this.setItem(item)
  }
  getLanguage() {
    return this.getItem() ?? this.getSystemOriginLanguage()
  }

  private getSystemOriginLanguage(): LanguageTypes {
    if (Platform.OS === 'ios') {
      const lang =
        NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]

      return lang.toLowerCase().indexOf('ko') >= 0 ? 'ko' : 'en'
    } else {
      const lang = NativeModules.I18nManager.localeIdentifier

      return lang.toLowerCase().indexOf('ko') >= 0 ? 'ko' : 'en'
    }
  }
}

const languageStorage = new LanguageStroage(STORAGE_KEY.language)

export default languageStorage

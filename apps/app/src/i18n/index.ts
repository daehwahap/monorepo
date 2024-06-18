import { LANGUAGE_DATA, LanguageTypes, defaultNS, getOptions } from '@pinit/shared/src/constants'
import i18n from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'
import languageStorage from '../shared/storage/Language'

const getLanguage = () => {
  return languageStorage.getLanguage()
}

i18n
  .use(initReactI18next)
  .use(resourcesToBackend(LANGUAGE_DATA))
  .init({
    ...getOptions(getLanguage()),
    compatibilityJSON: 'v3',
    lng: defaultNS, // default language to use.
  })

const changeLanguage = (language: LanguageTypes) => {
  i18n.changeLanguage(language)
  languageStorage.setLanguage(language)
}

export const languageUtils = { i18n, changeLanguage, getLanguage }

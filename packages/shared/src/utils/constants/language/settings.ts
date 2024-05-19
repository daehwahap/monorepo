export const defaultLanguage = 'en'
export const languages = [defaultLanguage, 'ko'] as const
export type LanguageTypes = (typeof languages)[number]
export const defaultNS = 'common'

export function getOptions(language = defaultLanguage, ns = defaultNS) {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: languages,
    fallbackLng: defaultLanguage,
    lng: language,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}

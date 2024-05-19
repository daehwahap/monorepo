export const defaultLanguage = 'en'
export const languages = [defaultLanguage, 'ko'] as const
export type LanguageTypes = (typeof languages)[number]
export const defaultNS = 'common'

export function getOptions(locale = defaultLanguage, ns = defaultNS) {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: languages,
    fallbackLng: defaultLanguage,
    lng: locale,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}

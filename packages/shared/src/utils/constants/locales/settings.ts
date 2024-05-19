export const fallbackLng = 'en'
export const locales = [fallbackLng, 'ko'] as const
export type LocaleTypes = (typeof locales)[number]
export const defaultNS = 'common'

export function getOptions(locale = fallbackLng, ns = defaultNS) {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: locales,
    fallbackLng,
    lng: locale,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}

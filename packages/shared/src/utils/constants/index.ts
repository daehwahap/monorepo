import COMMON_EN from './locales/en/common.json'
import COMMON_KO from './locales/ko/common.json'

export const LOCALE_DATA = { en: { common: COMMON_EN }, ko: { common: COMMON_KO } } as const
export * from './locales/settings'

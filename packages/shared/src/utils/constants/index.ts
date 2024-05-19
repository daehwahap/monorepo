import COMMON_EN from './language/en/common.json'
import COMMON_KO from './language/ko/common.json'

export const LOCALE_DATA = { en: { common: COMMON_EN }, ko: { common: COMMON_KO } } as const
export * from './language/settings'

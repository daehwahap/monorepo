import COMMON_EN from './en/common.json'
import COMMON_KO from './ko/common.json'

export const LANGUAGE_DATA = { en: { common: COMMON_EN }, ko: { common: COMMON_KO } } as const
export * from './settings'

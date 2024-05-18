import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { LOCALE_DATA } from '@pinit/shared/src/utils'
import { defaultNS, getOptions, LocaleTypes } from './settings'

const initI18next = async (lang: LocaleTypes, ns: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend(LOCALE_DATA))
    .init(getOptions(lang, ns))

  return i18nInstance
}

export async function createTranslation({
  locale,
  ns = defaultNS,
}: {
  locale: LocaleTypes
  ns?: string
}) {
  const i18nextInstance = await initI18next(locale, ns)

  return {
    t: i18nextInstance.getFixedT(locale, Array.isArray(ns) ? ns[0] : ns),
  }
}

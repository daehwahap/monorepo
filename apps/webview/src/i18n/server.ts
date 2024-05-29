import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { LANGUAGE_DATA, defaultNS, getOptions, LanguageTypes } from '@pinit/shared/src/constants'

const initI18next = async (lang: LanguageTypes, ns: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend(LANGUAGE_DATA))
    .init(getOptions(lang, ns))

  return i18nInstance
}

export async function createTranslation({
  language,
  ns = defaultNS,
}: {
  language: LanguageTypes
  ns?: string
}) {
  const i18nextInstance = await initI18next(language, ns)

  return {
    t: i18nextInstance.getFixedT(language, Array.isArray(ns) ? ns[0] : ns),
  }
}

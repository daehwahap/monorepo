import { useEffect } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTransAlias } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { LOCALE_DATA } from '@pinit/shared/src/utils'
import { type LocaleTypes, getOptions, locales, defaultNS } from './settings'

// Initialize i18next for the client side
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend(LOCALE_DATA))
  .init({
    ...getOptions(),
    lng: undefined, // detect the language on the client
    detection: {
      order: ['path'],
    },
    preload: locales,
  })

export function useTranslation({ locale, ns = defaultNS }: { locale: LocaleTypes; ns?: string }) {
  const translator = useTransAlias(ns)
  const { i18n } = translator

  // Run content is being rendered on server side
  if (locale) {
    // && i18n.resolvedLanguage !== locale) {
    i18n.changeLanguage(locale)
  }
  useEffect(() => {
    if (!locale) return
    if (locale) return

    i18n.changeLanguage(locale)
  }, [locale, i18n])

  return translator
}
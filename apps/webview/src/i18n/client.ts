'use client'

import { useEffect } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTransAlias } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {
  type LanguageTypes,
  getOptions,
  languages,
  defaultNS,
  LOCALE_DATA,
} from '@pinit/shared/src/utils'

const runsOnServerSide = typeof window === 'undefined'

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
    preload: runsOnServerSide ? languages : [],
  })

export function useTranslation({
  language,
  ns = defaultNS,
}: {
  language: LanguageTypes
  ns?: string
}) {
  const translator = useTransAlias(ns)
  const { i18n } = translator

  // Run content is being rendered on server side
  if (runsOnServerSide && language) {
    // && i18n.resolvedLanguage !== language,) {
    i18n.changeLanguage(language)
  }
  useEffect(() => {
    if (!language) return
    if (runsOnServerSide && language) {
      return
    }
    i18n.changeLanguage(language)
  }, [language, i18n])

  return translator
}

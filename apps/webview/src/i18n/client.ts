'use client'

import { useEffect } from 'react'
import { initReactI18next, useTranslation as useTransAlias } from 'react-i18next'

import {
  type LanguageTypes,
  getOptions,
  languages,
  defaultNS,
  LANGUAGE_DATA,
} from '@pinit/shared/src/constants'

import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'

const runsOnServerSide = typeof window === 'undefined'

// Initialize i18next for the client side
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend(LANGUAGE_DATA))
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
    if (runsOnServerSide) {
      return
    }
    i18n.changeLanguage(language)
  }, [language, i18n])

  return translator
}

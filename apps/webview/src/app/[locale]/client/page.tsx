'use client'

import i18next from 'i18next'
import { useTranslation } from '@/i18n/client'
import { LocaleTypes } from '@/i18n/settings'

export default function Home({ params: { locale } }: { params: { locale: LocaleTypes } }) {
  const { t } = useTranslation({ locale })

  return (
    <div className="test-container">
      client
      {/* 둘 다 가능 */}
      <h1>{t('i18nTest')}</h1>
      <h1>{i18next.t('i18nTest')}</h1>
      client
    </div>
  )
}
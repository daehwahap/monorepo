'use client'

import { useTranslation } from '@/i18n/client'
import { LocaleTypes } from '@/i18n/settings'

export default function Home({ params: { locale } }: { params: { locale: LocaleTypes } }) {
  const { t } = useTranslation({ locale })

  return (
    <div className="test-container">
      client
      <h1>{t('i18nTest')}</h1>
      client
    </div>
  )
}

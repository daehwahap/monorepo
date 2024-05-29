'use client'

import i18next from 'i18next'
import { LanguageTypes } from '@pinit/shared/src/constants'
import { useTranslation } from '@/i18n/client'

export default function Home({ params: { language } }: { params: { language: LanguageTypes } }) {
  const { t } = useTranslation({ language })

  return (
    <div className="test-container">
      client
      {/* 둘 다 가능 */}
      <h1>{t('i18nTest', { name: { ko: '준서야', en: 'hey junseo' } })}</h1>
      <h1>{i18next.t('i18nTest2', { name: '준서야' })}</h1>
      client
    </div>
  )
}

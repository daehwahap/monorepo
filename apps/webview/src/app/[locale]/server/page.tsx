import { createTranslation } from '@/i18n/server'
import { LocaleTypes } from '@/i18n/settings'

export default async function Home({ params: { locale } }: { params: { locale: LocaleTypes } }) {
  const { t } = await createTranslation({ locale })

  return (
    <div className="test-container">
      server
      <h1>{t('i18nTest', { name: { ko: '준서야', en: 'hey junseo' } })}</h1>
      server
    </div>
  )
}

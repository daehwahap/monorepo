import { LanguageTypes } from '@pinit/shared/src/utils'
import { createTranslation } from '@/i18n/server'

export default async function Home({
  params: { language },
}: {
  params: { language: LanguageTypes }
}) {
  const { t } = await createTranslation({ language })

  return (
    <div className="test-container">
      server
      <h1>{t('i18nTest', { name: { ko: '준서야', en: 'hey junseo' } })}</h1>
      server
    </div>
  )
}

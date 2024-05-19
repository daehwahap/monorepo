import { Button, Text, View } from 'react-native'
import { useAppRouter } from '../../../shared/hooks/useAppRouter'
import { Toast } from '../../../shared/global-component/Toast'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { languageUtils } from '../../../i18n'

export type FirstProps = undefined

export const First = () => {
  const { navigate } = useAppRouter()
  const { t } = useTranslation()

  return (
    <View>
      <Button onPress={() => navigate('Example', { test: '야호~~~~~' })} title="example로~~" />

      <Text>{t('i18nTest', { name: { ko: '준서야', en: 'hey junseo' } })}</Text>
      <Text>{i18next.t('i18nTest', { name: { ko: '준서야', en: 'hey junseo' } })}</Text>
      <Button
        onPress={() => {
          Toast.show({ text: 'aaaaaa' })
        }}
        title="global compnents"
      />

      <Button
        onPress={() => {
          languageUtils.changeLanguage('ko')
        }}
        title="한국어로 변경"
      />

      <Button
        onPress={() => {
          languageUtils.changeLanguage('en')
        }}
        title="영어로 변경"
      />
      <Button
        onPress={() => {
          languageUtils.getLanguage()
        }}
        title="저장된 언어 가져오기"
      />
    </View>
  )
}

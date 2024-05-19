import { Button, Text, View } from 'react-native'
import { useAppRouter } from '../../../shared/hooks/useAppRouter'
import { Toast } from '../../../shared/global-component/Toast'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { i18nUtils } from '../../../i18n'

export type FirstProps = undefined

export const First = () => {
  const { navigate } = useAppRouter()
  const { t } = useTranslation()

  return (
    <View style={{ backgroundColor: 'red', width: 100, height: 100, margin: 100 }}>
      <Text>first</Text>
      <Button onPress={() => navigate('Example', { test: '야호~~~~~' })} title="example로~~" />
      <Text>first</Text>
      <Text>first</Text>
      <Text>first</Text>

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
          i18nUtils.changeLanguage('ko')
        }}
        title="한국어로 변경"
      />

      <Button
        onPress={() => {
          i18nUtils.changeLanguage('en')
        }}
        title="영어로 변경"
      />
    </View>
  )
}

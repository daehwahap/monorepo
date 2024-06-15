import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppRouter } from '../../../shared/hooks/useAppRouter'
import { Header } from '../../../shared/components/custom-header'

export type FirstProps = undefined

export const First = () => {
  const { navigate } = useAppRouter()

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigate('SignIn')
          }}
          style={styles.button}
        >
          <Text>회원가입 테스트하러가기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate('ShareCode')
          }}
          style={styles.button}
        >
          <Text>초대코드 공유하러 가기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate('AcceptInvite')
          }}
          style={styles.button}
        >
          <Text>초대코드 받고 들어온 유저가 승인받으러가 가기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate('LanguageChange')
          }}
          style={styles.button}
        >
          <Text>언어 교환 테스트하러가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

  buttonContainer: {
    gap: 12,
    paddingVertical: 24,
    flex: 1,
  },
  button: {
    backgroundColor: 'gray',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

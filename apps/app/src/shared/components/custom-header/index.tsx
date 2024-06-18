import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppRouter } from '../../hooks/useAppRouter'

export const Header = () => {
  const { goBack } = useAppRouter()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 52,
  },
  backButton: {
    width: 60,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
})

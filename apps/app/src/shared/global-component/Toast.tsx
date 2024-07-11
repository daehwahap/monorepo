import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createPortal, useGlobalComponentContext } from '@pinit/shared/src/utils'

const styles = StyleSheet.create({
  aa: { backgroundColor: 'blue', width: 200, height: 200 },
})

type ToastProps = {
  text: string
  position?: 'top' | 'middle' | 'bottom'
  duration?: number
}

export const Toast = createPortal(({ text, position = 'top', duration = 2000 }: ToastProps) => {
  const { hide } = useGlobalComponentContext()

  useEffect(() => {
    setTimeout(() => {
      hide()
    }, duration)
  }, [duration, hide])

  return (
    <View style={styles.aa}>
      <Text>adsfasfd</Text>
    </View>
  )
})

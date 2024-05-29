import { Linking } from 'react-native'
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
import { LocalNotification } from './localNotification'
import { navigationRef } from '../../screens/Root'
import { pushLinkFromKilledStorage } from '../storage/PushLinkFromKilled'

class PushNotification {
  public handleMessageOnBackground() {
    return messaging().onNotificationOpenedApp(async (e) => {
      const link = e.data?.link

      if (link && (await Linking.canOpenURL(link.toString()))) {
        Linking.openURL(link.toString())
      }
    })
  }

  public async handleMessageFromKilled() {
    const notificationFromKilled = await messaging().getInitialNotification()

    if (!notificationFromKilled) {
      return
    }
    const link = notificationFromKilled.data?.link

    if (link) {
      if (navigationRef.current?.isReady) {
        Linking.openURL(link.toString())
      } else {
        pushLinkFromKilledStorage.setPushLink(link.toString())
      }
    }
  }

  public subscribeForegroundMessage() {
    return messaging().onMessage(this.handleOnMessage)
  }

  public subscribeBackgroundMessage() {
    return this.handleMessageOnBackground()
  }

  /**
   * @description FireBase 메시지가 온 경우, LocalNotification 으로 띄우고, 로직 또한 Local 에서
   */
  private handleOnMessage(e: FirebaseMessagingTypes.RemoteMessage) {
    const { notification, data } = e

    /**
     * @description telemedicine, treatment의 경우 LocalNotification 으로 띄우지 않고
     *              각자 로직 처리
     */
    if (!notification) return

    LocalNotification.displayNotification({
      message: {
        title: notification.title || '',
        body: notification.body || '',
        data,
      },
    })
  }
}

export const pushNotification = new PushNotification()

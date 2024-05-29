import { Linking, Platform } from 'react-native'
import notifee, {
  AndroidImportance,
  AndroidVisibility,
  EventType,
  NotificationAndroid,
} from '@notifee/react-native'

type AndroidChannelType = 'test'

type LocalMessage = {
  title: string
  body: string

  // 이거 타입은 서버랑 맞춰져함
  data?: Record<string, string | object>
}

class LocalNotification {
  public async getAndroidChannelId(androidChannelType: AndroidChannelType = 'test') {
    const channelId = await notifee.createChannel({
      id: androidChannelType,
      name: androidChannelType,
      vibration: true,
      visibility: AndroidVisibility.PUBLIC,
      importance: AndroidImportance.HIGH,
    })

    return channelId
  }

  public subscribeForegroundEvent() {
    return notifee.onForegroundEvent((event) => {
      if (event.type !== EventType.PRESS) return

      const link = event.detail.notification?.data?.link
      if (!link?.toString()) return

      Linking.openURL(link.toString())
    })
  }

  public async displayNotification({
    message,
    androidChannelType,
  }: {
    message: LocalMessage
    androidChannelType?: AndroidChannelType
  }) {
    notifee.displayNotification({
      ...message,
      ...(Platform.OS === 'android'
        ? {
            android: await this.getSettingsForAndroid(androidChannelType),
          }
        : {}),
    })
  }

  private async getSettingsForAndroid(
    androidChannelType: AndroidChannelType = 'test',
  ): Promise<NotificationAndroid> {
    return {
      channelId: await this.getAndroidChannelId(androidChannelType),
      pressAction: {
        id: 'default',
        launchActivity: 'default',
      },
    }
  }
}

export const localNotification = new LocalNotification()

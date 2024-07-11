'use client'

import type { AppBridge } from '@pinit/app/src/shared/app-post-message-bridge'

import { createLinkBridgeProvider } from '@webview-bridge/react'
import { linkBridge } from '@webview-bridge/web'

export const webBridge = linkBridge<AppBridge>({
  onReady: async () => {
    console.log('bridge is ready')
  },
})

export const { BridgeProvider, useBridgeStore, useBridgeStatus, useBridgeLoose } =
  createLinkBridgeProvider<AppBridge>({
    throwOnError: true,
    onReady: () => {
      console.log('bridge is ready')
    },
  })

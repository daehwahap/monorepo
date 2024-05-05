'use client'

import { PropsWithChildren } from 'react'
import ReactQueryProvider from './ReactQueryProvider'
import { BridgeProvider } from '../../WebPostMessageBridge'

export const RootProvider = ({ children }: PropsWithChildren) => (
  <ReactQueryProvider>
    <BridgeProvider>{children}</BridgeProvider>
  </ReactQueryProvider>
)

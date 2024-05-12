'use client'

import { PropsWithChildren } from 'react'
import ReactQueryProvider from './ReactQueryProvider'
import { BridgeProvider } from './PostMessageBridgeProvider'
import GlobalComponentProvider from './GlobalComponentProvider'

export const RootProvider = ({ children }: PropsWithChildren) => (
  <ReactQueryProvider>
    <BridgeProvider>
      <GlobalComponentProvider>{children}</GlobalComponentProvider>
    </BridgeProvider>
  </ReactQueryProvider>
)

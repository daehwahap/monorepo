'use client'

import { PropsWithChildren } from 'react'

import GlobalComponentProvider from './GlobalComponentProvider'
import { BridgeProvider } from './PostMessageBridgeProvider'
import ReactQueryProvider from './ReactQueryProvider'

export const RootProvider = ({ children }: PropsWithChildren) => (
  <ReactQueryProvider>
    <BridgeProvider>
      <GlobalComponentProvider>{children}</GlobalComponentProvider>
    </BridgeProvider>
  </ReactQueryProvider>
)

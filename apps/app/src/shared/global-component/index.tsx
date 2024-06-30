import React, { PropsWithChildren } from 'react'

import { Toast } from './Toast'

const GlobalComponentProvider = ({ children }: PropsWithChildren) => (
  <>
    {children}
    <Toast.Portal />
  </>
)

export default GlobalComponentProvider

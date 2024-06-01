import React, { PropsWithChildren } from 'react'

import { Toast } from './Toast'

function GlobalComponentProvider({ children }: PropsWithChildren) {
  return <>
    {children}
    <Toast.Portal />
  </>
}

export default GlobalComponentProvider

'use client'

import { useEffect } from 'react'

import { createPortal, useGlobalComponentContext } from '@pinit/shared/src/utils'

import { AnimatePresence, motion } from 'framer-motion'

type ToastProps = {
  text: string
  position: 'top' | 'middle' | 'bottom'
  duration: number
}

export const Toast = createPortal(({ text, position = 'top', duration = 2000 }: ToastProps) => {
  const { hide } = useGlobalComponentContext()

  useEffect(() => {
    setTimeout(() => {
      hide()
    }, duration)
  }, [duration, hide])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 60,
          width: '100vw',
          maxWidth: '720px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: '#000000BF',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '12px',
          }}
        >
          {text}
        </div>
      </motion.div>
    </AnimatePresence>
  )
})

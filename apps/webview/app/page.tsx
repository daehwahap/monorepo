'use client'

import { webBridge } from './provider'

const MainPage = () => {
  const handle = async () => {
    const message = await webBridge.getMessage()
    console.log(message)
  }

  return (
    <div>
      <div style={{ height: 100 }} />
      MainPage
      <button
        type="button"
        style={{ padding: 32 }}
        onClick={() => {
          handle()
          console.log('aa')
        }}
      >
        버튼 브릿지 테스트용
      </button>
    </div>
  )
}

export default MainPage

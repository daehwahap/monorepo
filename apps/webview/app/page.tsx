'use client'

import { Toast, webBridge } from './_provider'

const MainPage = () => (
  <div>
    <div style={{ height: 100 }} />
    MainPage
    <button
      type="button"
      style={{ padding: 32 }}
      onClick={() => {
        Toast.show({ text: 'aaaaaaaaa' })
        console.log('aa')
      }}
    >
      버튼 브릿지 테스트용
    </button>
  </div>
)

export default MainPage

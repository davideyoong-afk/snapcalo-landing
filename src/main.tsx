import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* 访客统计:每日访问量/来源(tiktok、google 等),在 Vercel 后台 Analytics 页看 */}
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)

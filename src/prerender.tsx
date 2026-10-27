import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { getPost } from './blog/posts'

const titles: Record<string, string> = {
  '/': 'SnapCalo - AI Calorie Tracker',
  '/blog': 'Blog — SnapCalo | Southeast Asian Food & Calorie Guides',
  '/partners': 'Gym & Coach Partnerships — SnapCalo',
  '/faq': 'Frequently Asked Questions — SnapCalo',
  '/engine': 'Food Calorie Calculator — SnapCalo',
  '/screens': 'App Screens — SnapCalo',
  '/privacy': 'Privacy Policy — SnapCalo',
}
export function renderPage(pathname: string) {
  const post = pathname.startsWith('/blog/') ? getPost(pathname.slice('/blog/'.length)) : undefined
  return {
    body: renderToString(<StaticRouter location={pathname}><App /></StaticRouter>),
    title: post ? `${post.title} — SnapCalo Blog` : titles[pathname],
    description: post?.excerpt,
  }
}

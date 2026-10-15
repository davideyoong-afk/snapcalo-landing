import type { Post } from './posts'
import type { PostTranslation } from './posts-ms'
import { ms } from './posts-ms'
import { id } from './posts-id'
import { th } from './posts-th'
import { vi } from './posts-vi'
import { zh } from './posts-zh'
import type { Language } from '../i18n/translations'

const all: Partial<Record<Language, Record<string, PostTranslation>>> = { ms, id, th, vi, zh }

/** 按语言取文章:有翻译用翻译,没有回落英文 */
export function localizePost(post: Post, lang: Language): Post {
  const t = all[lang]?.[post.slug]
  if (!t) return post
  return { ...post, title: t.title, excerpt: t.excerpt, tag: t.tag, blocks: t.blocks }
}

/** Blog 页面 UI 文案 */
export const blogUI: Record<Language, { backHome: string; allArticles: string; minRead: string; read: string; heading: string; sub: string; notFound: string; ctaTitle: string; ctaSub: string; ctaBtn: string }> = {
  en: { backHome: 'Back to Home', allArticles: 'All Articles', minRead: 'min read', read: 'Read', heading: 'Know Your Food, Love Your Food', sub: 'Calorie guides and healthy-eating know-how for Southeast Asian food — written for the way we actually eat.', notFound: 'Article not found.', ctaTitle: 'Try it on your next meal', ctaSub: 'Snap a photo, get calories and macros in seconds. Free to download, 14 days of Pro on us.', ctaBtn: 'Get SnapCalo Free' },
  ms: { backHome: 'Kembali ke Laman', allArticles: 'Semua Artikel', minRead: 'min baca', read: 'Baca', heading: 'Kenali Makanan Anda, Sayangi Makanan Anda', sub: 'Panduan kalori dan pengetahuan pemakanan sihat untuk makanan Asia Tenggara — ditulis untuk cara kita sebenarnya makan.', notFound: 'Artikel tidak dijumpai.', ctaTitle: 'Cuba pada hidangan seterusnya', ctaSub: 'Tangkap foto, dapatkan kalori dan makro dalam beberapa saat. Muat turun percuma, 14 hari Pro untuk anda.', ctaBtn: 'Dapatkan SnapCalo Percuma' },
  id: { backHome: 'Kembali ke Beranda', allArticles: 'Semua Artikel', minRead: 'mnt baca', read: 'Baca', heading: 'Kenali Makananmu, Cintai Makananmu', sub: 'Panduan kalori dan pengetahuan makan sehat untuk makanan Asia Tenggara — ditulis untuk cara kita benar-benar makan.', notFound: 'Artikel tidak ditemukan.', ctaTitle: 'Coba di makanan berikutnya', ctaSub: 'Foto, dapatkan kalori dan makro dalam hitungan detik. Gratis diunduh, 14 hari Pro untukmu.', ctaBtn: 'Dapatkan SnapCalo Gratis' },
  vi: { backHome: 'Về trang chủ', allArticles: 'Tất cả bài viết', minRead: 'phút đọc', read: 'Đọc', heading: 'Hiểu Món Ăn, Yêu Món Ăn', sub: 'Cẩm nang calo và kiến thức ăn lành mạnh cho món Đông Nam Á — viết cho cách chúng ta thực sự ăn.', notFound: 'Không tìm thấy bài viết.', ctaTitle: 'Thử với bữa ăn tiếp theo', ctaSub: 'Chụp ảnh, có calo và chất dinh dưỡng trong vài giây. Tải miễn phí, tặng 14 ngày Pro.', ctaBtn: 'Tải SnapCalo miễn phí' },
  th: { backHome: 'กลับหน้าหลัก', allArticles: 'บทความทั้งหมด', minRead: 'นาทีอ่าน', read: 'อ่าน', heading: 'รู้จักอาหารของคุณ รักอาหารของคุณ', sub: 'คู่มือแคลอรี่และความรู้การกินเพื่อสุขภาพสำหรับอาหารเอเชียตะวันออกเฉียงใต้ — เขียนสำหรับวิธีที่เรากินจริง', notFound: 'ไม่พบบทความ', ctaTitle: 'ลองกับมื้อถัดไปของคุณ', ctaSub: 'ถ่ายรูป ได้แคลอรี่และสารอาหารในไม่กี่วินาที ดาวน์โหลดฟรี แถม Pro 14 วัน', ctaBtn: 'รับ SnapCalo ฟรี' },
  zh: { backHome: '返回首页', allArticles: '全部文章', minRead: '分钟阅读', read: '阅读', heading: '懂你的美食，爱你的美食', sub: '东南亚美食的卡路里指南与健康饮食知识——为我们真实的吃法而写。', notFound: '文章不存在。', ctaTitle: '下一餐就试试', ctaSub: '拍一张照片，几秒内得到卡路里和营养素。免费下载，送你 14 天 Pro。', ctaBtn: '免费下载 SnapCalo' },
}

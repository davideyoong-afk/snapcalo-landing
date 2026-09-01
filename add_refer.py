import re

path = r'C:\Users\60136\Documents\Kimi\Workspaces\AiCalories\snapcalo-app\src\i18n\translations.ts'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add refer type to the Record type definition
old_type = '''  footer: { tagline: string; product: string; company: string; legal: string; copyright: string }
}> = {'''
new_type = '''  refer: { title: string; subtitle: string; steps: { num: string; title: string; desc: string }[]; cta: string }
  footer: { tagline: string; product: string; company: string; legal: string; copyright: string }
}> = {'''

content = content.replace(old_type, new_type)

# Define refer translations for each language
refers = {
    'en': '''    refer: {
      title: 'Refer a Friend, Earn Free Pro',
      subtitle: 'Give 7 days of Pro to a friend. When they subscribe, you get 14 days free.',
      steps: [
        { num: '01', title: 'Share Your Code', desc: 'Copy your unique referral code from the app and share it with friends.' },
        { num: '02', title: 'Friend Gets 7 Days Free', desc: 'Your friend installs SnapCalo, enters your code, and unlocks 7 days of Pro instantly.' },
        { num: '03', title: 'You Get 14 Days Free', desc: 'When your friend subscribes to Pro, you earn 14 days of Pro free as a thank you.' },
      ],
      cta: 'Get Your Referral Code',
    },''',
    'ms': '''    refer: {
      title: 'Jemput Rakan, Dapat Pro Percuma',
      subtitle: 'Beri 7 hari Pro kepada rakan. Apabila mereka langgan, anda dapat 14 hari percuma.',
      steps: [
        { num: '01', title: 'Kongsi Kod Anda', desc: 'Salin kod rujukan unik anda dari aplikasi dan kongsi dengan rakan.' },
        { num: '02', title: 'Rakan Dapat 7 Hari Percuma', desc: 'Rakan anda memasang SnapCalo, masukkan kod anda, dan buka kunci 7 hari Pro segera.' },
        { num: '03', title: 'Anda Dapat 14 Hari Percuma', desc: 'Apabila rakan anda langgan Pro, anda mendapat 14 hari Pro percuma sebagai penghargaan.' },
      ],
      cta: 'Dapatkan Kod Rujukan Anda',
    },''',
    'id': '''    refer: {
      title: 'Ajak Teman, Dapat Pro Gratis',
      subtitle: 'Beri 7 hari Pro ke teman. Saat mereka berlangganan, kamu dapat 14 hari gratis.',
      steps: [
        { num: '01', title: 'Bagikan Kode Kamu', desc: 'Salin kode rujukan unikmu dari aplikasi dan bagikan ke teman.' },
        { num: '02', title: 'Teman Dapat 7 Hari Gratis', desc: 'Temanmu mengunduh SnapCalo, masukkan kode, dan langsung mendapat 7 hari Pro.' },
        { num: '03', title: 'Kamu Dapat 14 Hari Gratis', desc: 'Saat temanmu berlangganan Pro, kamu mendapat 14 hari Pro gratis sebagai ucapan terima kasih.' },
      ],
      cta: 'Dapatkan Kode Rujukanmu',
    },''',
    'vi': '''    refer: {
      title: 'Giới thiệu bạn bè, Nhận Pro miễn phí',
      subtitle: 'Tặng 7 ngày Pro cho bạn. Khi họ đăng ký, bạn nhận 14 ngày miễn phí.',
      steps: [
        { num: '01', title: 'Chia sẻ mã của bạn', desc: 'Sao chép mã giới thiệu duy nhất từ ứng dụng và chia sẻ với bạn bè.' },
        { num: '02', title: 'Bạn được 7 ngày miễn phí', desc: 'Bạn tải SnapCalo, nhập mã, và mở khóa 7 ngày Pro ngay lập tức.' },
        { num: '03', title: 'Bạn nhận 14 ngày miễn phí', desc: 'Khi bạn đăng ký Pro, bạn nhận 14 ngày Pro miễn phí để cảm ơn.' },
      ],
      cta: 'Lấy mã giới thiệu',
    },''',
    'th': '''    refer: {
      title: 'ชวนเพื่อน รับ Pro ฟรี',
      subtitle: 'มอบ 7 วัน Pro ให้เพื่อน เมื่อเพื่อนสมัคร คุณรับ 14 วันฟรี',
      steps: [
        { num: '01', title: 'แชร์โค้ดของคุณ', desc: 'คัดลอกรหัสอ้างอิงจากแอปและแชร์ให้เพื่อน' },
        { num: '02', title: 'เพื่อนได้ 7 วันฟรี', desc: 'เพื่อนติดตั้ง SnapCalo ใส่โค้ด และปลดล็อก 7 วัน Pro ทันที' },
        { num: '03', title: 'คุณได้ 14 วันฟรี', desc: 'เมื่อเพื่อนสมัคร Pro คุณได้รับ 14 วัน Pro ฟรีเป็นของขวัญขอบคุณ' },
      ],
      cta: 'รับรหัสอ้างอิง',
    },''',
    'zh': '''    refer: {
      title: '邀请好友，免费获得 Pro',
      subtitle: '送给好友 7 天 Pro。当他们订阅时，你获得 14 天免费。',
      steps: [
        { num: '01', title: '分享你的推荐码', desc: '从 App 复制你的专属推荐码，分享给好友。' },
        { num: '02', title: '好友获得 7 天免费', desc: '好友下载 SnapCalo，输入你的推荐码，立即解锁 7 天 Pro。' },
        { num: '03', title: '你获得 14 天免费', desc: '当好友订阅 Pro 后，你获得 14 天 Pro 免费，作为感谢。' },
      ],
      cta: '获取推荐码',
    },''',
}

# Insert refer before footer for each language
for lang, refer_text in refers.items():
    # Find the footer line for this language and insert refer before it
    pattern = f"    footer: {{ tagline: '{lang}"
    # We need to find the exact footer line for each language block
    # Use a different approach - find "footer:" line that comes after the language key
    
# Better approach: insert before each "footer:" that has the right context
for lang in ['en', 'ms', 'id', 'vi', 'th', 'zh']:
    # Find "footer:" in the content and insert refer before it
    # But we need to do it language by language
    pass

# Actually, let's use a simpler approach - insert before each footer: line
# by finding the pattern that matches each language's footer start
footer_patterns = [
    ("    footer: { tagline: 'AI calorie tracking", 'en'),
    ("    footer: { tagline: 'Penjejak kalori AI", 'ms'),
    ("    footer: { tagline: 'Pelacak kalori AI", 'id'),
    ("    footer: { tagline: 'Trình theo dõi calo AI", 'vi'),
    ("    footer: { tagline: 'เครื่องมือติดตามแคลอรี AI", 'th'),
    ("    footer: { tagline: '专为东南亚美食打造的 AI", 'zh'),
]

for pattern, lang in footer_patterns:
    refer_text = refers[lang]
    if pattern in content:
        content = content.replace(pattern, refer_text + '\n' + pattern, 1)
        print(f'Inserted refer for {lang}')
    else:
        print(f'Pattern not found for {lang}')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done!')

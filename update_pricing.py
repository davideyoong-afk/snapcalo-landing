import re

path = r'C:\Users\60136\Documents\Kimi\Workspaces\AiCalories\snapcalo-app\src\i18n\translations.ts'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace $4.99 with $3.99 across all languages
content = content.replace("$4.99", "$3.99")
print('Price updated: $4.99 → $3.99')

# Update Free features for each language
# English
content = content.replace(
    "features: ['5 snaps per day', 'Basic calorie tracking', 'Weekly reports', 'Ad-supported']",
    "features: ['14-day Pro trial for new users', '3 meals per day after trial', 'Basic calorie tracking', 'Ad-supported']"
)
# Malay
content = content.replace(
    "features: ['5 snap sehari', 'Jejak kalori asas', 'Laporan mingguan', 'Disokong iklan']",
    "features: ['Percubaan Pro 14 hari untuk pengguna baharu', '3 hidangan sehari selepas percubaan', 'Jejak kalori asas', 'Disokong iklan']"
)
# Indonesian
content = content.replace(
    "features: ['5 foto per hari', 'Pelacakan kalori dasar', 'Laporan mingguan', 'Dengan iklan']",
    "features: ['Percobaan Pro 14 hari untuk pengguna baru', '3 makanan per hari setelah percobaan', 'Pelacakan kalori dasar', 'Dengan iklan']"
)
# Vietnamese
content = content.replace(
    "features: ['5 lần chụp/ngày', 'Theo dõi calo cơ bản', 'Báo cáo hàng tuần', 'Có quảng cáo']",
    "features: ['Dùng thử Pro 14 ngày cho người mới', '3 bữa ăn/ngày sau thử nghiệm', 'Theo dõi calo cơ bản', 'Có quảng cáo']"
)
# Thai
content = content.replace(
    "features: ['ถ่าย 5 ครั้ง/วัน', 'ติดตามแคลอรีพื้นฐาน', 'รายงานรายสัปดาห์', 'มีโฆษณา']",
    "features: ['ทดลอง Pro 14 วันสำหรับผู้ใช้ใหม่', '3 มื้อ/วันหลังทดลอง', 'ติดตามแคลอรีพื้นฐาน', 'มีโฆษณา']"
)
# Chinese
content = content.replace(
    "features: ['每天 5 次拍照', '基础卡路里追踪', '每周报告', '含广告']",
    "features: ['新用户 14 天 Pro 试用', '试用后每天 3 餐', '基础卡路里追踪', '含广告']"
)
print('Free features updated for all languages')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done!')

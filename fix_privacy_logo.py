import re

path = r'C:\Users\60136\Documents\Kimi\Workspaces\AiCalories\snapcalo-app\src\pages\Privacy.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_nav = '''          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold">S</div>
            <span className="font-bold text-xl text-gray-900">SnapCalo</span>
          </a>'''

new_nav = '''          <a href="/" className="flex items-center gap-2">
            <img src="/logo-main.png" alt="SnapCalo" className="h-8 w-auto" />
          </a>'''

if old_nav in content:
    content = content.replace(old_nav, new_nav, 1)
    print('Privacy nav logo replaced')
else:
    print('Privacy nav logo NOT found')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done!')

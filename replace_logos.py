import re

path = r'C:\Users\60136\Documents\Kimi\Workspaces\AiCalories\snapcalo-app\src\pages\Home.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Navbar logo (first occurrence)
old_navbar = '''        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-gray-900">SnapCalo</span>
        </div>'''
new_navbar = '''        <div className="flex items-center gap-2">
          <img src="/logo-main.png" alt="SnapCalo" className="h-8 w-auto" />
        </div>'''

if old_navbar in content:
    content = content.replace(old_navbar, new_navbar, 1)
    print('Navbar logo replaced')
else:
    print('Navbar logo NOT found')

# 2. Phone mockup logo
old_phone = '''                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                          <Camera className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-sm">SnapCalo</span>
                      </div>'''
new_phone = '''                      <div className="flex items-center gap-2">
                        <img src="/logo-main.png" alt="SnapCalo" className="h-5 w-auto" />
                      </div>'''

if old_phone in content:
    content = content.replace(old_phone, new_phone, 1)
    print('Phone logo replaced')
else:
    print('Phone logo NOT found')

# 3. Footer logo
old_footer = '''            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">SnapCalo</span>
            </div>'''
new_footer = '''            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-main.png" alt="SnapCalo" className="h-7 w-auto" />
            </div>'''

if old_footer in content:
    content = content.replace(old_footer, new_footer, 1)
    print('Footer logo replaced')
else:
    print('Footer logo NOT found')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done!')

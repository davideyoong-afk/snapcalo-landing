from pathlib import Path
import re

p = Path('index.html')
t = p.read_text()
t = re.sub(r'<title>.*?</title>', '<title>SnapCalo - AI Calorie Tracker</title>', t, count=1)
p.write_text(t)
print('Title updated.')

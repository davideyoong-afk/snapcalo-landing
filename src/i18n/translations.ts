export interface SiteTranslations {
  nav: { features: string; howItWorks: string; accuracy: string; foods: string; blog: string; tryFree: string }
  hero: { badge: string; title1: string; titleMid: string; title2: string; desc: string; trial: string; launchTitle: string; launchSub: string; launchTrial: string; launchGift: string; ctaPrimary: string; ctaSecondary: string; trust1: string; trust2: string; users: string }
  socialProof: { dishes: string; users: string; speed: string; accuracy: string }
  media: { title: string; subtitle: string; videoCaption: string; posterCaption: string; screenCaption: string }
  features: { title: string; subtitle: string; items: { title: string; desc: string }[] }
  howItWorks: { title: string; subtitle: string; steps: { num: string; title: string; desc: string }[] }
  accuracy: { title: string; subtitle: string; items: { title: string; desc: string }[]; note: string }
  foods: { title: string; subtitle: string }
  testimonials: { title: string; items: { quote: string; name: string; location: string }[] }
  faq: { title: string; items: { q: string; a: string }[] }
  download: { title: string; subtitle: string; scan: string; apk: string; apkSub: string; webDemo: string; webDemoSub: string; appStore: string; googlePlay: string; getItOn: string; comingSoon: string; tag1: string; tag2: string; tag3: string; whatsNew: string }
  pricing: { title: string; subtitle: string; trialNote: string; free: { name: string; desc: string; price: string; period: string; features: string[]; missing: string[]; cta: string }; pro: { name: string; desc: string; price: string; period: string; badge: string; features: string[]; cta: string } }
  cta: { title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string }
  refer: { title: string; subtitle: string; baseTitle: string; baseWhen: string; baseYou: string; baseFriend: string; rulesTitle: string; rules: string[]; cta: string }
  launch: { title: string; steps: string[]; reward: string; limit: string }
  footer: { tagline: string; product: string; company: string; legal: string; copyright: string }
}

export type Language = 'en' | 'ms' | 'id' | 'vi' | 'th' | 'zh'

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ms', label: 'Bahasa Malaysia', flag: '🇲🇾' },
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', label: 'ภาษาไทย', flag: '🇹🇭' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
]

export const translations: Record<Language, SiteTranslations> = {
  "en": {
    "nav": {
      "features": "Features",
      "howItWorks": "How It Works",
      "accuracy": "Accuracy",
      "foods": "Foods",
      "blog": "Blog",
      "tryFree": "Try Free"
    },
    "hero": {
      "badge": "AI-Powered for Southeast Asia",
      "trial": "Try Pro free for 14 days — no card needed",
      "launchTitle": "🎉 SnapCalo for Android is officially live!",
      "launchSub": "AI nutrition coach · Snap your meal, know your calories",
      "launchTrial": "✅ Sign up now: get a 14-day Pro free trial instantly",
      "launchGift": "🎁 Launch perk: first 100 users get 3 months of Pro FREE — like & share our TikTok video to claim your code — first come, first served",
      "title1": "Snap Meal.",
      "titleMid": "Track Calories.",
      "title2": "Shape Your Body.",
      "desc": "No more manual logging. Just snap a photo of Nasi Lemak, Pho, Pad Thai — or any dish — and get instant calories & macros.",
      "ctaPrimary": "Try For Free",
      "ctaSecondary": "See How It Works",
      "trust1": "No credit card",
      "trust2": "Cancel anytime",
      "users": "Southeast Asians tracking smarter"
    },
    "socialProof": {
      "dishes": "Local dishes tracked",
      "users": "Active users",
      "speed": "AI analysis time",
      "accuracy": "Recognition accuracy"
    },
    "media": {
      "title": "See SnapCalo in Action",
      "subtitle": "Watch how one photo becomes calories, protein, carbs & fat — in seconds.",
      "videoCaption": "▶ Watch the demo",
      "posterCaption": "Built for Southeast Asian food",
      "screenCaption": "Real scan: Nasi Lemak, 833 kcal"
    },
    "features": {
      "title": "Why SnapCalo?",
      "subtitle": "Built specifically for Southeast Asian diets. No more guessing calories for local dishes.",
      "items": [
        {
          "title": "Snap & Track",
          "desc": "Take a photo of any meal. Our AI identifies the dish and calculates calories in under 2 seconds. No typing, no searching."
        },
        {
          "title": "Local Food Database",
          "desc": "Trained on 10,000+ Southeast Asian dishes. From Nasi Goreng to Bun Cha, we know your favorites."
        },
        {
          "title": "Smart Goals",
          "desc": "Set daily calorie targets. Get personalized recommendations based on your activity level, age, and weight goals."
        },
        {
          "title": "AI Learning",
          "desc": "The more you use it, the smarter it gets. Learns your eating patterns, portion sizes, and local restaurants."
        },
        {
          "title": "Barcode Scan",
          "desc": "Scan packaged food barcodes for instant nutrition facts — perfect for snacks, drinks, and grocery items."
        },
        {
          "title": "AI Coach",
          "desc": "Get a one-line smart tip after every meal, tuned to your goal. Like a nutritionist in your pocket."
        }
      ]
    },
    "howItWorks": {
      "title": "How The Photo Calorie Counter Works",
      "subtitle": "Three simple steps. No manual entry needed. Just snap and know.",
      "steps": [
        {
          "num": "01",
          "title": "Dish Recognition from Photo",
          "desc": "SnapCalo uses advanced computer vision to analyze your meal photo. It identifies ingredients, cooking methods, and recognizes mixed dishes."
        },
        {
          "num": "02",
          "title": "Estimate Calories & Macros",
          "desc": "After identifying the dish, our AI estimates portion size using visual analysis. It calculates calories, protein, fat, and carbs."
        },
        {
          "num": "03",
          "title": "Track & Improve",
          "desc": "View your daily progress, get personalized tips, and build healthy habits. The AI learns your patterns and gets more accurate."
        }
      ]
    },
    "accuracy": {
      "title": "How Accurate Is It?",
      "subtitle": "We know you care about precision. Here is how SnapCalo ensures reliable calorie estimates.",
      "items": [
        {
          "title": "Visual Analysis",
          "desc": "Our AI analyzes food proportions, textures, and cooking methods — not just matching photos to a database."
        },
        {
          "title": "Portion Estimation",
          "desc": "Uses reference objects in the photo to estimate realistic portion sizes."
        },
        {
          "title": "Learns Over Time",
          "desc": "The more you snap, the better it understands your typical portions and local variations."
        }
      ],
      "note": "Based on our testing, SnapCalo achieves ~95% accuracy for common Southeast Asian dishes. You can always adjust portion sizes manually."
    },
    "foods": {
      "title": "Know Your Local Favorites",
      "subtitle": "SnapCalo recognizes thousands of Southeast Asian dishes. Here are just a few."
    },
    "testimonials": {
      "title": "Loved by Food KOLs Across Southeast Asia",
      "items": [
        {
          "quote": "Finally an app that knows Nasi Lemak isn't just 'rice'! The calorie count is surprisingly accurate.",
          "name": "Aina",
          "location": "Kuala Lumpur, Malaysia"
        },
        {
          "quote": "I use it every day for my Pho and Bun Cha. Way better than generic calorie apps.",
          "name": "Trang Nhím",
          "location": "Hanoi, Vietnam"
        },
        {
          "quote": "The AI recognized my Pad Thai even with extra peanuts. Lost 4kg in 2 months.",
          "name": "Nutt",
          "location": "Bangkok, Thailand"
        },
        {
          "quote": "The barcode scan saves me at the grocery store every week. SnapCalo just fits my life.",
          "name": "Fei",
          "location": "Indonesia"
        },
        {
          "quote": "Rendang, gado-gado, even my grandma's recipes — it recognizes everything I cook.",
          "name": "Gerry Girianza",
          "location": "Jakarta, Indonesia"
        },
        {
          "quote": "I've tested many calorie apps as a content creator. SnapCalo is the first whose accuracy on Southeast Asian food I actually trust.",
          "name": "Faris Danial",
          "location": "Kuala Lumpur, Malaysia"
        }
      ]
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "items": [
        {
          "q": "Is SnapCalo free to use?",
          "a": "Yes! You can snap up to 3 meals per day for free. Upgrade to Pro for unlimited snaps and detailed macro tracking."
        },
        {
          "q": "How accurate is the calorie estimation?",
          "a": "Our AI achieves approximately 95% accuracy for common Southeast Asian dishes. You can always adjust portion sizes manually."
        },
        {
          "q": "Does it work for all types of food?",
          "a": "SnapCalo is specially trained on Southeast Asian cuisine. It also works well for Western, Japanese, Korean, and Chinese food."
        },
        {
          "q": "Do I need to manually enter ingredients?",
          "a": "No! Just snap a photo and the AI does the rest. No typing, no searching."
        },
        {
          "q": "Is my data private?",
          "a": "Absolutely. Your meal photos and health data are encrypted and never shared with third parties."
        }
      ]
    },
    "download": {
      "title": "Download SnapCalo Today",
      "subtitle": "Now live on Google Play! Scan the QR code or tap below to download. iOS version coming soon.",
      "scan": "Scan for Google Play",
      "apk": "Android Beta",
      "apkSub": "Download APK",
      "webDemo": "Web Demo",
      "webDemoSub": "Try in your browser",
      "appStore": "App Store",
      "googlePlay": "Google Play",
      "comingSoon": "Coming soon",
      "getItOn": "GET IT ON",
      "tag1": "Free to download",
      "tag2": "No credit card required",
      "tag3": "Cancel anytime",
      "whatsNew": "🎉 Now live on Google Play! New: invite friends — when a friend subscribes to Pro, you get 1 month of Pro free"
    },
    "pricing": {
      "title": "Simple Pricing",
      "subtitle": "Start free. Upgrade when you are ready.",
      "free": {
        "name": "Free",
        "desc": "Free forever",
        "price": "$0",
        "period": "/month",
        "features": [
          "3 photo scans per day",
          "3-day meal history",
          "Basic AI health tips",
          "Water & meal reminders"
        ],
        "missing": [
          "Watch sync",
          "Real-time BMI health analysis",
          "Real-time AI nutrition advice"
        ],
        "cta": "Get Started"
      },
      "pro": {
        "name": "Pro",
        "desc": "For serious trackers",
        "price": "$3.99",
        "period": "/month",
        "badge": "MOST POPULAR",
        "features": [
          "Unlimited photo scans",
          "60-day meal history",
          "Real-time AI nutrition analysis & advice",
          "Real-time BMI health guidance",
          "Full watch sync",
          "All premium features unlocked"
        ],
        "cta": "Upgrade to Pro"
      },
      "trialNote": "🎁 New user bonus: 14-day full Pro trial — after it ends, subscribe to Pro or return to Free automatically"
    },
    "cta": {
      "title": "Ready to Snap Your First Meal?",
      "subtitle": "Join 2,400+ Southeast Asians who are already tracking smarter with SnapCalo.",
      "ctaPrimary": "Try For Free",
      "ctaSecondary": "Learn More"
    },
    "refer": {
      "title": "Invite Friends — Both Sides Win!",
      "subtitle": "Every friend who joins Pro earns you free Pro — no limit.",
      "baseTitle": "Basic rule",
      "baseWhen": "When an invited friend pays for their first Pro subscription",
      "baseYou": "You get 1 month of Pro free",
      "baseFriend": "Friend gets 21 days of Pro free (14-day trial + 7-day invite bonus)",
      "rulesTitle": "How it works",
      "rules": [
        "Share your invite code from the app (Profile → Invite Friends) — your friend enters it when signing up",
        "Your friend instantly gets a 7-day Pro bonus on top of the 14-day free trial",
        "When your friend pays for their first Pro subscription, a 1-month Pro reward becomes ready for you",
        "Open the invite page in the app and tap to claim it — one reward per friend, invite as many as you like"
      ],
      "cta": "Get My Invite Code"
    },
    "launch": {
      "title": "🚀 Oct 10 Launch Exclusive",
      "steps": [
        "Like + share our launch video on TikTok",
        "Comment \"I want it\" under the video",
        "Claim your exclusive redeem code"
      ],
      "reward": "🎁 3 months of Pro FREE",
      "limit": "⚠️ First 100 users only — first come, first served"
    },
    "footer": {
      "tagline": "AI calorie tracking for Southeast Asian food.",
      "product": "Product",
      "company": "Company",
      "legal": "Legal",
      "copyright": "2026 SnapCalo. Made with love for Southeast Asia."
    }
  },
  "ms": {
    "nav": {
      "features": "Ciri",
      "howItWorks": "Cara Kerja",
      "accuracy": "Ketepatan",
      "foods": "Makanan",
      "blog": "Blog",
      "tryFree": "Cuba Percuma"
    },
    "hero": {
      "badge": "Dikuasakan AI untuk Asia Tenggara",
      "trial": "Cuba Pro percuma 14 hari — tiada kad diperlukan",
      "launchTitle": "🎉 SnapCalo untuk Android kini rasmi dilancarkan!",
      "launchSub": "Pengurusan nutrisi AI · Snap hidangan, terus tahu kalori",
      "launchTrial": "✅ Daftar sekarang: percubaan Pro 14 hari percuma serta-merta",
      "launchGift": "🎁 Hadiah pelancaran: 100 pengguna pertama dapat 3 bulan Pro PERCUMA — like & kongsi video TikTok kami untuk tuntut kod — siapa cepat dia dapat",
      "title1": "Snap Makanan.",
      "titleMid": "Jejak Kalori.",
      "title2": "Bentuk Badan.",
      "desc": "Tidak perlu log manual. Ambil gambar Nasi Lemak, Pho, Pad Thai — atau apa sahaja hidangan — dan dapatkan kalori & makro segera.",
      "ctaPrimary": "Cuba Percuma",
      "ctaSecondary": "Lihat Cara Kerja",
      "trust1": "Tiada kad kredit",
      "trust2": "Batal bila-bila masa",
      "users": "rakyat Asia Tenggara menjejak dengan bijak"
    },
    "socialProof": {
      "dishes": "Hidangan tempatan dijejak",
      "users": "Pengguna aktif",
      "speed": "Masa analisis AI",
      "accuracy": "Ketepatan pengenalan"
    },
    "media": {
      "title": "Lihat SnapCalo Beraksi",
      "subtitle": "Tonton bagaimana satu foto menjadi kalori, protein, karbohidrat & lemak — dalam beberapa saat.",
      "videoCaption": "▶ Tonton demo",
      "posterCaption": "Dibina untuk makanan Asia Tenggara",
      "screenCaption": "Imbasan sebenar: Nasi Lemak, 833 kcal"
    },
    "features": {
      "title": "Kenapa SnapCalo?",
      "subtitle": "Dibina khas untuk diet Asia Tenggara. Tidak perlu meneka kalori untuk hidangan tempatan.",
      "items": [
        {
          "title": "Snap & Jejak",
          "desc": "Ambil gambar sebarang hidangan. AI kami mengenal pasti hidangan dan mengira kalori dalam masa 2 saat."
        },
        {
          "title": "Pangkalan Data Makanan Tempatan",
          "desc": "Dilatih dengan 10,000+ hidangan Asia Tenggara. Dari Nasi Goreng ke Bun Cha, kami kenal kegemaran anda."
        },
        {
          "title": "Sasaran Pintar",
          "desc": "Tetapkan sasaran kalori harian. Dapatkan cadangan peribadi berdasarkan tahap aktiviti, umur, dan matlamat berat."
        },
        {
          "title": "AI Belajar",
          "desc": "Lebih kerap anda menggunakannya, lebih pintar ia menjadi. Belajar corak makan, saiz hidangan, dan restoran tempatan anda."
        },
        {
          "title": "Imbas Kod Bar",
          "desc": "Imbas kod bar makanan bungkusan untuk fakta nutrisi segera — sesuai untuk snek, minuman, dan barangan runcit."
        },
        {
          "title": "Jurulatih AI",
          "desc": "Dapatkan tip pintar selepas setiap hidangan, disesuaikan dengan matlamat anda. Seperti pakar pemakanan di poket anda."
        }
      ]
    },
    "howItWorks": {
      "title": "Cara Penjejak Kalori Gambar Berfungsi",
      "subtitle": "Tiga langkah mudah. Tiada kemasukan manual diperlukan. Snap dan tahu.",
      "steps": [
        {
          "num": "01",
          "title": "Pengenalan Hidangan dari Gambar",
          "desc": "SnapCalo menggunakan visi komputer termaju untuk menganalisis gambar makanan anda. Ia mengenal pasti bahan, kaedah memasak, dan mengenal pasti hidangan campuran."
        },
        {
          "num": "02",
          "title": "Anggar Kalori & Makro",
          "desc": "Selepas mengenal pasti hidangan, AI kami menganggar saiz hidangan menggunakan analisis visual. Ia mengira kalori, protein, lemak, dan karbohidrat."
        },
        {
          "num": "03",
          "title": "Jejak & Tambah Baik",
          "desc": "Lihat kemajuan harian anda, dapatkan tip peribadi, dan bina tabiat sihat. AI belajar corak anda dan menjadi lebih tepat."
        }
      ]
    },
    "accuracy": {
      "title": "Berapa Tepatkah Ia?",
      "subtitle": "Kami tahu anda mengambil berat tentang ketepatan. Berikut adalah cara SnapCalo memastikan anggaran kalori yang boleh dipercayai.",
      "items": [
        {
          "title": "Analisis Visual",
          "desc": "AI kami menganalisis nisbah makanan, tekstur, dan kaedah memasak — bukan sekadar menanding gambar dengan pangkalan data."
        },
        {
          "title": "Anggaran Hidangan",
          "desc": "Menggunakan objek rujukan dalam gambar untuk menganggar saiz hidangan yang realistik."
        },
        {
          "title": "Belajar dari Masa ke Masa",
          "desc": "Lebih kerap anda snap, lebih baik ia memahami hidangan biasa dan variasi tempatan anda."
        }
      ],
      "note": "Berdasarkan ujian kami, SnapCalo mencapai ketepatan ~95% untuk hidangan Asia Tenggara biasa. Anda sentiasa boleh laraskan saiz hidangan secara manual."
    },
    "foods": {
      "title": "Ketahui Kegemaran Tempatan Anda",
      "subtitle": "SnapCalo mengenal pasti beribu-ribu hidangan Asia Tenggara. Berikut adalah beberapa contoh."
    },
    "testimonials": {
      "title": "Digemari KOL Makanan Asia Tenggara",
      "items": [
        {
          "quote": "Akhirnya ada aplikasi yang tahu Nasi Lemak bukan sekadar nasi! Kiraan kalorinya sangat tepat.",
          "name": "Aina",
          "location": "Kuala Lumpur, Malaysia"
        },
        {
          "quote": "Saya guna setiap hari untuk Pho dan Bun Cha. Jauh lebih baik daripada aplikasi kalori biasa.",
          "name": "Trang Nhím",
          "location": "Hanoi, Vietnam"
        },
        {
          "quote": "AI mengenal pasti Pad Thai saya walaupun dengan kacang tambahan. Turun 4kg dalam 2 bulan.",
          "name": "Nutt",
          "location": "Bangkok, Thailand"
        },
        {
          "quote": "Imbasan kod bar sangat membantu saya di kedai runcit setiap minggu. SnapCalo memang sesuai dengan hidup saya.",
          "name": "Fei",
          "location": "Indonesia"
        },
        {
          "quote": "Rendang, gado-gado, malah resipi nenek saya — semuanya dikenali.",
          "name": "Gerry Girianza",
          "location": "Jakarta, Indonesia"
        },
        {
          "quote": "Sebagai pencipta kandungan, saya telah mencuba banyak aplikasi kalori. SnapCalo ialah yang pertama dengan ketepatan makanan Asia Tenggara yang benar-benar saya percayai.",
          "name": "Faris Danial",
          "location": "Kuala Lumpur, Malaysia"
        }
      ]
    },
    "faq": {
      "title": "Soalan Lazim",
      "items": [
        {
          "q": "Adakah SnapCalo percuma?",
          "a": "Ya! Anda boleh snap sehingga 3 hidangan sehari secara percuma. Naik taraf ke Pro untuk snap tanpa had dan jejak makro terperinci."
        },
        {
          "q": "Berapa tepat anggaran kalori?",
          "a": "AI kami mencapai ketepatan kira-kira 95% untuk hidangan Asia Tenggara biasa. Anda sentiasa boleh laraskan saiz hidangan secara manual."
        },
        {
          "q": "Adakah ia berfungsi untuk semua jenis makanan?",
          "a": "SnapCalo dilatih khas untuk masakan Asia Tenggara. Ia juga berfungsi dengan baik untuk makanan Barat, Jepun, Korea, dan Cina."
        },
        {
          "q": "Perlukah saya masukkan bahan secara manual?",
          "a": "Tidak! Hanya snap gambar dan AI akan melakukan yang lain. Tiada menaip, tiada mencari."
        },
        {
          "q": "Adakah data saya peribadi?",
          "a": "Sudah tentu. Gambar makanan dan data kesihatan anda disulitkan dan tidak dikongsi dengan pihak ketiga."
        }
      ]
    },
    "download": {
      "title": "Muat Turun SnapCalo Hari Ini",
      "subtitle": "Kini di Google Play! Imbas kod QR atau tekan di bawah untuk muat turun. Versi iOS akan datang.",
      "scan": "Imbas untuk Google Play",
      "apk": "Android Beta",
      "apkSub": "Muat Turun APK",
      "webDemo": "Demo Web",
      "webDemoSub": "Cuba di pelayar anda",
      "appStore": "App Store",
      "googlePlay": "Google Play",
      "comingSoon": "Akan datang",
      "getItOn": "DAPATKAN DI",
      "tag1": "Percuma dimuat turun",
      "tag2": "Tiada kad kredit diperlukan",
      "tag3": "Batal bila-bila masa",
      "whatsNew": "🎉 Kini di Google Play! Baru: jemput rakan — apabila rakan melanggan Pro, anda dapat 1 bulan Pro percuma"
    },
    "pricing": {
      "title": "Harga Mudah",
      "subtitle": "Mula percuma. Naik taraf apabila anda sedia.",
      "free": {
        "name": "Percuma",
        "desc": "Percuma selamanya",
        "price": "$0",
        "period": "/bulan",
        "features": [
          "3 imbasan foto sehari",
          "Sejarah makanan 3 hari",
          "Petua kesihatan AI asas",
          "Peringatan air & makan"
        ],
        "missing": [
          "Penyegerakan jam pintar",
          "Analisis kesihatan BMI masa nyata",
          "Nasihat nutrisi AI masa nyata"
        ],
        "cta": "Mula"
      },
      "pro": {
        "name": "Pro",
        "desc": "Untuk penjejak serius",
        "price": "$3.99",
        "period": "/bulan",
        "badge": "PALING POPULAR",
        "features": [
          "Imbasan foto tanpa had",
          "Sejarah makanan 60 hari",
          "Analisis & nasihat nutrisi AI masa nyata",
          "Panduan kesihatan BMI masa nyata",
          "Penyegerakan jam penuh",
          "Semua ciri premium dibuka"
        ],
        "cta": "Naik Taraf ke Pro"
      },
      "trialNote": "🎁 Pengguna baharu: percubaan Pro penuh 14 hari — selepas tamat, langgan Pro atau kembali ke Percuma secara automatik"
    },
    "cta": {
      "title": "Sedia untuk Snap Makanan Pertama Anda?",
      "subtitle": "Sertai 2,400+ rakyat Asia Tenggara yang sudah menjejak dengan bijak menggunakan SnapCalo.",
      "ctaPrimary": "Cuba Percuma",
      "ctaSecondary": "Ketahui Lebih Lanjut"
    },
    "refer": {
      "title": "Jemput Rakan — Dua-dua Untung!",
      "subtitle": "Setiap rakan yang melanggan Pro memberi anda Pro percuma — tiada had.",
      "baseTitle": "Peraturan asas",
      "baseWhen": "Apabila rakan jemputan membayar langganan Pro pertama mereka",
      "baseYou": "Anda dapat 1 bulan Pro percuma",
      "baseFriend": "Rakan anda dapat 21 hari Pro percuma (percubaan 14 hari + bonus jemputan 7 hari)",
      "rulesTitle": "Cara ia berfungsi",
      "rules": [
        "Kongsikan kod jemputan anda dari aplikasi (Profil → Jemput Rakan) — rakan memasukkannya semasa mendaftar",
        "Rakan anda terus dapat bonus Pro 7 hari di atas percubaan percuma 14 hari",
        "Apabila rakan anda membayar langganan Pro pertama, ganjaran Pro 1 bulan sedia untuk anda",
        "Buka halaman jemputan dalam aplikasi dan tekan untuk menuntut — satu ganjaran setiap rakan, jemput seberapa banyak yang anda suka"
      ],
      "cta": "Dapatkan Kod Jemputan Saya"
    },
    "launch": {
      "title": "🚀 Eksklusif Pelancaran 10 Oktober",
      "steps": [
        "Like + kongsi video pelancaran kami di TikTok",
        "Komen \"Nak\" di bawah video",
        "Tuntut kod penebusan eksklusif anda"
      ],
      "reward": "🎁 3 bulan Pro PERCUMA",
      "limit": "⚠️ 100 pengguna pertama sahaja — siapa cepat dia dapat"
    },
    "footer": {
      "tagline": "Penjejak kalori AI untuk makanan Asia Tenggara.",
      "product": "Produk",
      "company": "Syarikat",
      "legal": "Undang-undang",
      "copyright": "2026 SnapCalo. Dibuat dengan kasih sayang untuk Asia Tenggara."
    }
  },
  "id": {
    "nav": {
      "features": "Fitur",
      "howItWorks": "Cara Kerja",
      "accuracy": "Akurasi",
      "foods": "Makanan",
      "blog": "Blog",
      "tryFree": "Coba Gratis"
    },
    "hero": {
      "badge": "Didukung AI untuk Asia Tenggara",
      "trial": "Coba Pro gratis 14 hari — tanpa kartu",
      "launchTitle": "🎉 SnapCalo untuk Android resmi diluncurkan!",
      "launchSub": "Manajemen nutrisi AI · Foto makananmu, langsung tahu kalorinya",
      "launchTrial": "✅ Daftar sekarang: langsung dapat uji coba Pro 14 hari gratis",
      "launchGift": "🎁 Hadiah peluncuran: 100 pengguna pertama dapat 3 bulan Pro GRATIS — like & bagikan video TikTok kami untuk klaim kode — siapa cepat dia dapat",
      "title1": "Foto Makanan.",
      "titleMid": "Lacak Kalori.",
      "title2": "Bentuk Tubuh.",
      "desc": "Tidak perlu mencatat manual. Cukup foto Nasi Lemak, Pho, Pad Thai — atau hidangan apa saja — dan dapatkan kalori & makro langsung.",
      "ctaPrimary": "Coba Gratis",
      "ctaSecondary": "Lihat Cara Kerja",
      "trust1": "Tanpa kartu kredit",
      "trust2": "Batalkan kapan saja",
      "users": "orang Asia Tenggara melacak dengan cerdas"
    },
    "socialProof": {
      "dishes": "Hidangan lokal dilacak",
      "users": "Pengguna aktif",
      "speed": "Waktu analisis AI",
      "accuracy": "Akurasi pengenalan"
    },
    "media": {
      "title": "Lihat SnapCalo Beraksi",
      "subtitle": "Tonton bagaimana satu foto menjadi kalori, protein, karbohidrat & lemak — dalam hitungan detik.",
      "videoCaption": "▶ Tonton demo",
      "posterCaption": "Dibuat untuk makanan Asia Tenggara",
      "screenCaption": "Pindaian nyata: Nasi Lemak, 833 kcal"
    },
    "features": {
      "title": "Mengapa SnapCalo?",
      "subtitle": "Dibangun khusus untuk diet Asia Tenggara. Tidak perlu menebak kalori untuk hidangan lokal.",
      "items": [
        {
          "title": "Foto & Lacak",
          "desc": "Ambil foto hidangan apa saja. AI kami mengidentifikasi hidangan dan menghitung kalori dalam waktu 2 detik."
        },
        {
          "title": "Database Makanan Lokal",
          "desc": "Dilatih dengan 10,000+ hidangan Asia Tenggara. Dari Nasi Goreng hingga Bun Cha, kami kenal favoritmu."
        },
        {
          "title": "Target Pintar",
          "desc": "Tetapkan target kalori harian. Dapatkan rekomendasi pribadi berdasarkan tingkat aktivitas, usia, dan tujuan berat badan."
        },
        {
          "title": "AI Belajar",
          "desc": "Semakin sering kamu menggunakannya, semakin pintar. Belajar pola makan, ukuran porsi, dan restoran lokalmu."
        },
        {
          "title": "Pindai Barcode",
          "desc": "Pindai barcode makanan kemasan untuk info nutrisi instan — cocok untuk camilan, minuman, dan belanjaan."
        },
        {
          "title": "Pelatih AI",
          "desc": "Dapatkan tips pintar setelah setiap makan, sesuai targetmu. Seperti ahli gizi di sakumu."
        }
      ]
    },
    "howItWorks": {
      "title": "Cara Penghitung Kalori Foto Bekerja",
      "subtitle": "Tiga langkah sederhana. Tidak perlu entri manual. Foto dan ketahui.",
      "steps": [
        {
          "num": "01",
          "title": "Pengenalan Hidangan dari Foto",
          "desc": "SnapCalo menggunakan visi komputer canggih untuk menganalisis foto makananmu. Mengidentifikasi bahan, metode memasak, dan mengenali hidangan campuran."
        },
        {
          "num": "02",
          "title": "Perkiraan Kalori & Makro",
          "desc": "Setelah mengidentifikasi hidangan, AI kami memperkirakan ukuran porsi menggunakan analisis visual. Menghitung kalori, protein, lemak, dan karbohidrat."
        },
        {
          "num": "03",
          "title": "Lacak & Perbaiki",
          "desc": "Lihat kemajuan harianmu, dapatkan tip pribadi, dan bangun kebiasaan sehat. AI belajar polamu dan semakin akurat."
        }
      ]
    },
    "accuracy": {
      "title": "Seberapa Akurat?",
      "subtitle": "Kami tahu kamu peduli dengan ketepatan. Berikut cara SnapCalo memastikan perkiraan kalori yang andal.",
      "items": [
        {
          "title": "Analisis Visual",
          "desc": "AI kami menganalisis proporsi makanan, tekstur, dan metode memasak — bukan hanya mencocokkan foto dengan database."
        },
        {
          "title": "Perkiraan Porsi",
          "desc": "Menggunakan objek referensi dalam foto untuk memperkirakan ukuran porsi yang realistis."
        },
        {
          "title": "Belajar Seiring Waktu",
          "desc": "Semakin sering kamu foto, semakin baik memahami porsi khas dan variasi lokalmu."
        }
      ],
      "note": "Berdasarkan pengujian kami, SnapCalo mencapai akurasi ~95% untuk hidangan Asia Tenggara umum. Kamu selalu bisa menyesuaikan ukuran porsi secara manual."
    },
    "foods": {
      "title": "Ketahui Favorit Lokalmu",
      "subtitle": "SnapCalo mengenali ribuan hidangan Asia Tenggara. Berikut beberapa contohnya."
    },
    "testimonials": {
      "title": "Dicintai KOL Kuliner Asia Tenggara",
      "items": [
        {
          "quote": "Akhirnya ada aplikasi yang tahu Nasi Lemak bukan sekadar nasi! Perhitungan kalorinya sangat akurat.",
          "name": "Aina",
          "location": "Kuala Lumpur, Malaysia"
        },
        {
          "quote": "Saya pakai setiap hari untuk Pho dan Bun Cha. Jauh lebih baik dari aplikasi kalori biasa.",
          "name": "Trang Nhím",
          "location": "Hanoi, Vietnam"
        },
        {
          "quote": "AI mengenali Pad Thai saya meski dengan kacang tambahan. Turun 4kg dalam 2 bulan.",
          "name": "Nutt",
          "location": "Bangkok, Thailand"
        },
        {
          "quote": "Pindai barcode sangat membantu saya di toko setiap minggu. SnapCalo benar-benar cocok dengan hidup saya.",
          "name": "Fei",
          "location": "Indonesia"
        },
        {
          "quote": "Rendang, gado-gado, bahkan resep nenek saya — semuanya dikenali.",
          "name": "Gerry Girianza",
          "location": "Jakarta, Indonesia"
        },
        {
          "quote": "Sebagai kreator konten, saya sudah mencoba banyak aplikasi kalori. SnapCalo adalah yang pertama dengan akurasi makanan Asia Tenggara yang benar-benar saya percaya.",
          "name": "Faris Danial",
          "location": "Kuala Lumpur, Malaysia"
        }
      ]
    },
    "faq": {
      "title": "Pertanyaan yang Sering Diajukan",
      "items": [
        {
          "q": "Apakah SnapCalo gratis?",
          "a": "Ya! Kamu bisa foto hingga 3 hidangan per hari secara gratis. Upgrade ke Pro untuk foto tanpa batas dan pelacakan makro detail."
        },
        {
          "q": "Seberapa akurat perkiraan kalori?",
          "a": "AI kami mencapai akurasi sekitar 95% untuk hidangan Asia Tenggara umum. Kamu selalu bisa menyesuaikan ukuran porsi secara manual."
        },
        {
          "q": "Apakah berfungsi untuk semua jenis makanan?",
          "a": "SnapCalo dilatih khusus untuk masakan Asia Tenggara. Juga berfungsi baik untuk makanan Barat, Jepang, Korea, dan Cina."
        },
        {
          "q": "Apakah saya perlu memasukkan bahan secara manual?",
          "a": "Tidak! Cukup foto dan AI akan melakukan sisanya. Tidak perlu mengetik, tidak perlu mencari."
        },
        {
          "q": "Apakah data saya pribadi?",
          "a": "Tentu saja. Foto makanan dan data kesehatanmu dienkripsi dan tidak dibagikan ke pihak ketiga."
        }
      ]
    },
    "download": {
      "title": "Unduh SnapCalo Hari Ini",
      "subtitle": "Sekarang tersedia di Google Play! Pindai kode QR atau ketuk di bawah untuk mengunduh. Versi iOS segera hadir.",
      "scan": "Pindai untuk Google Play",
      "apk": "Android Beta",
      "apkSub": "Unduh APK",
      "webDemo": "Demo Web",
      "webDemoSub": "Coba di browser-mu",
      "appStore": "App Store",
      "googlePlay": "Google Play",
      "comingSoon": "Segera hadir",
      "getItOn": "DAPATKAN DI",
      "tag1": "Gratis diunduh",
      "tag2": "Tanpa kartu kredit",
      "tag3": "Batalkan kapan saja",
      "whatsNew": "🎉 Sekarang di Google Play! Baru: undang teman — saat teman berlangganan Pro, kamu dapat 1 bulan Pro gratis"
    },
    "pricing": {
      "title": "Harga Sederhana",
      "subtitle": "Mulai gratis. Upgrade saat kamu siap.",
      "free": {
        "name": "Gratis",
        "desc": "Gratis selamanya",
        "price": "$0",
        "period": "/bulan",
        "features": [
          "3 pemindaian foto per hari",
          "Riwayat makanan 3 hari",
          "Tips kesehatan AI dasar",
          "Pengingat air & makan"
        ],
        "missing": [
          "Sinkronisasi smartwatch",
          "Analisis kesehatan BMI real-time",
          "Saran nutrisi AI real-time"
        ],
        "cta": "Mulai"
      },
      "pro": {
        "name": "Pro",
        "desc": "Untuk pelacak serius",
        "price": "$3.99",
        "period": "/bulan",
        "badge": "PALING POPULER",
        "features": [
          "Pemindaian foto tanpa batas",
          "Riwayat makanan 60 hari",
          "Analisis & saran nutrisi AI real-time",
          "Panduan kesehatan BMI real-time",
          "Sinkronisasi smartwatch penuh",
          "Semua fitur premium terbuka"
        ],
        "cta": "Upgrade ke Pro"
      },
      "trialNote": "🎁 Pengguna baru: uji coba Pro penuh 14 hari — setelah berakhir, berlangganan Pro atau kembali ke Gratis secara otomatis"
    },
    "cta": {
      "title": "Siap Foto Makanan Pertamamu?",
      "subtitle": "Bergabung dengan 2,400+ orang Asia Tenggara yang sudah melacak dengan cerdas menggunakan SnapCalo.",
      "ctaPrimary": "Coba Gratis",
      "ctaSecondary": "Pelajari Lebih Lanjut"
    },
    "refer": {
      "title": "Ajak Teman — Dua-duanya Untung!",
      "subtitle": "Setiap teman yang berlangganan Pro memberimu Pro gratis — tanpa batas.",
      "baseTitle": "Aturan dasar",
      "baseWhen": "Saat teman undangan membayar langganan Pro pertama mereka",
      "baseYou": "Kamu dapat 1 bulan Pro gratis",
      "baseFriend": "Temanmu dapat 21 hari Pro gratis (uji coba 14 hari + bonus undangan 7 hari)",
      "rulesTitle": "Cara kerjanya",
      "rules": [
        "Bagikan kode undanganmu dari aplikasi (Profil → Ajak Teman) — teman memasukkannya saat mendaftar",
        "Temanmu langsung dapat bonus Pro 7 hari di atas uji coba gratis 14 hari",
        "Saat temanmu membayar langganan Pro pertama, hadiah Pro 1 bulan siap untukmu",
        "Buka halaman undangan di aplikasi dan ketuk untuk klaim — satu hadiah per teman, ajak sebanyak yang kamu mau"
      ],
      "cta": "Dapatkan Kode Undangan Saya"
    },
    "launch": {
      "title": "🚀 Eksklusif Peluncuran 10 Oktober",
      "steps": [
        "Like + bagikan video peluncuran kami di TikTok",
        "Komentar \"Mau\" di bawah video",
        "Klaim kode redeem eksklusifmu"
      ],
      "reward": "🎁 3 bulan Pro GRATIS",
      "limit": "⚠️ Hanya 100 pengguna pertama — siapa cepat dia dapat"
    },
    "footer": {
      "tagline": "Pelacak kalori AI untuk makanan Asia Tenggara.",
      "product": "Produk",
      "company": "Perusahaan",
      "legal": "Hukum",
      "copyright": "2026 SnapCalo. Dibuat dengan cinta untuk Asia Tenggara."
    }
  },
  "vi": {
    "nav": {
      "features": "Tính năng",
      "howItWorks": "Cách hoạt động",
      "accuracy": "Độ chính xác",
      "foods": "Món ăn",
      "blog": "Blog",
      "tryFree": "Dùng thử miễn phí"
    },
    "hero": {
      "badge": "AI dành cho Đông Nam Á",
      "trial": "Dùng thử Pro 14 ngày miễn phí — không cần thẻ",
      "launchTitle": "🎉 SnapCalo cho Android chính thức ra mắt!",
      "launchSub": "Quản lý dinh dưỡng AI · Chụp món ăn, biết ngay calo",
      "launchTrial": "✅ Đăng ký ngay: nhận 14 ngày dùng thử Pro miễn phí",
      "launchGift": "🎁 Quà ra mắt: 100 người đầu tiên nhận 3 tháng Pro MIỄN PHÍ — like & chia sẻ video TikTok của chúng tôi để nhận mã — ai nhanh người đó được",
      "title1": "Chụp món ăn.",
      "titleMid": "Theo dõi calo.",
      "title2": "Tạo dáng chuẩn.",
      "desc": "Không cần ghi chép thủ công. Chỉ cần chụp ảnh Nasi Lemak, Phở, Pad Thai — hoặc bất kỳ món nào — và nhận ngay calo & dinh dưỡng.",
      "ctaPrimary": "Dùng thử miễn phí",
      "ctaSecondary": "Xem cách hoạt động",
      "trust1": "Không cần thẻ tín dụng",
      "trust2": "Hủy bất cứ lúc nào",
      "users": "người Đông Nam Á đang theo dõi thông minh hơn"
    },
    "socialProof": {
      "dishes": "Món ăn địa phương",
      "users": "Người dùng",
      "speed": "Thời gian phân tích AI",
      "accuracy": "Độ chính xác"
    },
    "media": {
      "title": "Xem SnapCalo Hoạt Động",
      "subtitle": "Xem một bức ảnh trở thành calo, protein, carb & chất béo — trong vài giây.",
      "videoCaption": "▶ Xem demo",
      "posterCaption": "Dành cho món Đông Nam Á",
      "screenCaption": "Quét thật: Nasi Lemak, 833 kcal"
    },
    "features": {
      "title": "Tại sao chọn SnapCalo?",
      "subtitle": "Được xây dựng dành riêng cho chế độ ăn Đông Nam Á. Không còn đoán calo cho món ăn địa phương.",
      "items": [
        {
          "title": "Chụp & Theo dõi",
          "desc": "Chụp ảnh bất kỳ món ăn nào. AI của chúng tôi nhận diện món ăn và tính calo trong vòng 2 giây."
        },
        {
          "title": "Cơ sở dữ liệu món ăn địa phương",
          "desc": "Được đào tạo với 10,000+ món ăn Đông Nam Á. Từ Nasi Goreng đến Bún Chả, chúng tôi biết món yêu thích của bạn."
        },
        {
          "title": "Mục tiêu thông minh",
          "desc": "Đặt mục tiêu calo hàng ngày. Nhận gợi ý cá nhân dựa trên mức độ hoạt động, tuổi và mục tiêu cân nặng."
        },
        {
          "title": "AI học hỏi",
          "desc": "Càng dùng càng thông minh. Học thói quen ăn uống, khẩu phần và cả nhà hàng địa phương của bạn."
        },
        {
          "title": "Quét mã vạch",
          "desc": "Quét mã vạch thực phẩm đóng gói để xem thông tin dinh dưỡng ngay — hoàn hảo cho đồ ăn vặt và nước uống."
        },
        {
          "title": "Huấn luyện viên AI",
          "desc": "Nhận mẹo thông minh sau mỗi bữa ăn, phù hợp với mục tiêu của bạn. Như có chuyên gia dinh dưỡng trong túi."
        }
      ]
    },
    "howItWorks": {
      "title": "Cách Bộ đếm Calo Ảnh Hoạt động",
      "subtitle": "Ba bước đơn giản. Không cần nhập liệu thủ công. Chụp và biết ngay.",
      "steps": [
        {
          "num": "01",
          "title": "Nhận diện món ăn từ ảnh",
          "desc": "SnapCalo sử dụng thị giác máy tính tiên tiến để phân tích ảnh bữa ăn của bạn. Nhận diện nguyên liệu, phương pháp nấu ăn và nhận biết món ăn hỗn hợp."
        },
        {
          "num": "02",
          "title": "Ước tính Calo & Dinh dưỡng",
          "desc": "Sau khi nhận diện món ăn, AI của chúng tôi ước tính khẩu phần bằng phân tích hình ảnh. Tính calo, protein, chất béo và carbs."
        },
        {
          "num": "03",
          "title": "Theo dõi & Cải thiện",
          "desc": "Xem tiến độ hàng ngày, nhận lời khuyên cá nhân và xây dựng thói quen ăn uống lành mạnh. AI học theo mẫu của bạn và ngày càng chính xác."
        }
      ]
    },
    "accuracy": {
      "title": "Độ chính xác như thế nào?",
      "subtitle": "Chúng tôi biết bạn quan tâm đến độ chính xác. Dưới đây là cách SnapCalo đảm bảo ước tính calo đáng tin cậy.",
      "items": [
        {
          "title": "Phân tích hình ảnh",
          "desc": "AI của chúng tôi phân tích tỷ lệ thực phẩm, kết cấu và phương pháp nấu ăn — không chỉ so khớp ảnh với cơ sở dữ liệu."
        },
        {
          "title": "Ước tính khẩu phần",
          "desc": "Sử dụng đối tượng tham chiếu trong ảnh để ước tính khẩu phần thực tế."
        },
        {
          "title": "Học hỏi theo thời gian",
          "desc": "Càng chụp nhiều, càng hiểu rõ khẩu phần điển hình và biến thể địa phương của bạn."
        }
      ],
      "note": "Dựa trên thử nghiệm của chúng tôi, SnapCalo đạt độ chính xác ~95% cho các món ăn Đông Nam Á phổ biến. Bạn luôn có thể điều chỉnh khẩu phần thủ công."
    },
    "foods": {
      "title": "Khám phá món ăn địa phương",
      "subtitle": "SnapCalo nhận diện hàng nghìn món ăn Đông Nam Á. Dưới đây là một vài ví dụ."
    },
    "testimonials": {
      "title": "Được các KOL ẩm thực Đông Nam Á yêu thích",
      "items": [
        {
          "quote": "Cuối cùng cũng có ứng dụng biết Nasi Lemak không chỉ là cơm! Lượng calo rất chính xác.",
          "name": "Aina",
          "location": "Kuala Lumpur, Malaysia"
        },
        {
          "quote": "Tôi dùng hàng ngày cho Phở và Bún Chả. Tốt hơn hẳn các ứng dụng calo thông thường.",
          "name": "Trang Nhím",
          "location": "Hà Nội, Việt Nam"
        },
        {
          "quote": "AI nhận diện Pad Thai của tôi ngay cả với thêm đậu phộng. Giảm 4kg trong 2 tháng.",
          "name": "Nutt",
          "location": "Bangkok, Thái Lan"
        },
        {
          "quote": "Quét mã vạch giúp tôi rất nhiều khi đi siêu thị mỗi tuần. SnapCalo thực sự hợp với cuộc sống của tôi.",
          "name": "Fei",
          "location": "Indonesia"
        },
        {
          "quote": "Rendang, gado-gado, cả món theo công thức của bà tôi — món nào cũng được nhận diện.",
          "name": "Gerry Girianza",
          "location": "Jakarta, Indonesia"
        },
        {
          "quote": "Là nhà sáng tạo nội dung, tôi đã thử nhiều ứng dụng đếm calo. SnapCalo là ứng dụng đầu tiên có độ chính xác với món Đông Nam Á khiến tôi thực sự tin tưởng.",
          "name": "Faris Danial",
          "location": "Kuala Lumpur, Malaysia"
        }
      ]
    },
    "faq": {
      "title": "Câu hỏi thường gặp",
      "items": [
        {
          "q": "SnapCalo có miễn phí không?",
          "a": "Có! Bạn có thể chụp tối đa 3 bữa ăn mỗi ngày miễn phí. Nâng cấp lên Pro để chụp không giới hạn và theo dõi dinh dưỡng chi tiết."
        },
        {
          "q": "Độ chính xác của ước tính calo?",
          "a": "AI của chúng tôi đạt độ chính xác khoảng 95% cho các món ăn Đông Nam Á phổ biến. Bạn luôn có thể điều chỉnh khẩu phần thủ công."
        },
        {
          "q": "Có hoạt động với tất cả loại thực phẩm không?",
          "a": "SnapCalo được đào tạo đặc biệt cho ẩm thực Đông Nam Á. Cũng hoạt động tốt với món Âu, Nhật, Hàn và Trung."
        },
        {
          "q": "Tôi có cần nhập nguyên liệu thủ công không?",
          "a": "Không! Chỉ cần chụp ảnh và AI sẽ làm phần còn lại. Không cần gõ, không cần tìm kiếm."
        },
        {
          "q": "Dữ liệu của tôi có riêng tư không?",
          "a": "Hoàn toàn. Ảnh bữa ăn và dữ liệu sức khỏe của bạn được mã hóa và không chia sẻ với bên thứ ba."
        }
      ]
    },
    "download": {
      "title": "Tải SnapCalo ngay hôm nay",
      "subtitle": "Đã có trên Google Play! Quét mã QR hoặc bấm bên dưới để tải về. Phiên bản iOS sắp ra mắt.",
      "scan": "Quét để mở Google Play",
      "apk": "Android Beta",
      "apkSub": "Tải APK",
      "webDemo": "Bản demo Web",
      "webDemoSub": "Dùng thử trên trình duyệt",
      "appStore": "App Store",
      "googlePlay": "Google Play",
      "comingSoon": "Sắp ra mắt",
      "getItOn": "TẢI TRÊN",
      "tag1": "Tải miễn phí",
      "tag2": "Không cần thẻ tín dụng",
      "tag3": "Hủy bất cứ lúc nào",
      "whatsNew": "🎉 Đã lên Google Play! Mới: mời bạn bè — khi bạn bè đăng ký Pro, bạn nhận 1 tháng Pro miễn phí"
    },
    "pricing": {
      "title": "Giá đơn giản",
      "subtitle": "Bắt đầu miễn phí. Nâng cấp khi bạn sẵn sàng.",
      "free": {
        "name": "Miễn phí",
        "desc": "Miễn phí vĩnh viễn",
        "price": "$0",
        "period": "/tháng",
        "features": [
          "Chụp nhận diện 3 lần/ngày",
          "Lịch sử bữa ăn 3 ngày",
          "Gợi ý sức khỏe AI cơ bản",
          "Nhắc uống nước & bữa ăn"
        ],
        "missing": [
          "Đồng bộ đồng hồ thông minh",
          "Phân tích sức khỏe BMI thời gian thực",
          "Tư vấn dinh dưỡng AI thời gian thực"
        ],
        "cta": "Bắt đầu"
      },
      "pro": {
        "name": "Pro",
        "desc": "Dành cho người nghiêm túc",
        "price": "$3.99",
        "period": "/tháng",
        "badge": "PHỔ BIẾN NHẤT",
        "features": [
          "Chụp nhận diện không giới hạn",
          "Lịch sử bữa ăn 60 ngày",
          "Phân tích & tư vấn dinh dưỡng AI thời gian thực",
          "Hướng dẫn sức khỏe BMI thời gian thực",
          "Đồng bộ đồng hồ đầy đủ",
          "Mở khóa toàn bộ tính năng cao cấp"
        ],
        "cta": "Nâng cấp Pro"
      },
      "trialNote": "🎁 Người dùng mới: dùng thử Pro đầy đủ 14 ngày — sau đó đăng ký Pro hoặc tự động quay về Miễn phí"
    },
    "cta": {
      "title": "Sẵn sàng chụp món ăn đầu tiên?",
      "subtitle": "Tham gia cùng 2,400+ người Đông Nam Á đang theo dõi thông minh hơn với SnapCalo.",
      "ctaPrimary": "Dùng thử miễn phí",
      "ctaSecondary": "Tìm hiểu thêm"
    },
    "refer": {
      "title": "Mời bạn bè — Cả hai cùng có quà!",
      "subtitle": "Mỗi người bạn đăng ký Pro đều mang lại cho bạn Pro miễn phí — không giới hạn.",
      "baseTitle": "Quy tắc cơ bản",
      "baseWhen": "Khi người bạn được mời thanh toán gói Pro đầu tiên",
      "baseYou": "Bạn nhận 1 tháng Pro miễn phí",
      "baseFriend": "Bạn của bạn nhận 21 ngày Pro miễn phí (14 ngày dùng thử + 7 ngày thưởng mời)",
      "rulesTitle": "Cách hoạt động",
      "rules": [
        "Chia sẻ mã mời của bạn trong ứng dụng (Hồ sơ → Mời bạn bè) — bạn bè nhập mã khi đăng ký",
        "Bạn của bạn nhận ngay 7 ngày Pro thưởng thêm ngoài 14 ngày dùng thử miễn phí",
        "Khi bạn của bạn thanh toán gói Pro đầu tiên, phần thưởng Pro 1 tháng sẽ sẵn sàng cho bạn",
        "Mở trang mời trong ứng dụng và chạm để nhận — mỗi người bạn một phần thưởng, mời bao nhiêu tùy thích"
      ],
      "cta": "Lấy mã mời của tôi"
    },
    "launch": {
      "title": "🚀 Ưu đãi ra mắt 10 tháng 10",
      "steps": [
        "Like + chia sẻ video ra mắt trên TikTok",
        "Bình luận \"Muốn\" dưới video",
        "Nhận mã đổi quà độc quyền"
      ],
      "reward": "🎁 3 tháng Pro MIỄN PHÍ",
      "limit": "⚠️ Chỉ 100 người đầu tiên — ai nhanh người đó được"
    },
    "footer": {
      "tagline": "Trình theo dõi calo AI cho món ăn Đông Nam Á.",
      "product": "Sản phẩm",
      "company": "Công ty",
      "legal": "Pháp lý",
      "copyright": "2026 SnapCalo. Được tạo ra với tình yêu dành cho Đông Nam Á."
    }
  },
  "th": {
    "nav": {
      "features": "ฟีเจอร์",
      "howItWorks": "วิธีใช้",
      "accuracy": "ความแม่นยำ",
      "foods": "อาหาร",
      "blog": "บล็อก",
      "tryFree": "ทดลองฟรี"
    },
    "hero": {
      "badge": "ขับเคลื่อนด้วย AI สำหรับเอเชียตะวันออกเฉียงใต้",
      "trial": "ทดลอง Pro ฟรี 14 วัน — ไม่ต้องใช้บัตร",
      "launchTitle": "🎉 SnapCalo เวอร์ชัน Android เปิดตัวอย่างเป็นทางการแล้ว!",
      "launchSub": "จัดการโภชนาการด้วย AI · ถ่ายมื้ออาหาร รู้แคลอรีทันที",
      "launchTrial": "✅ สมัครตอนนี้: รับทดลอง Pro ฟรี 14 วันทันที",
      "launchGift": "🎁 ของขวัญเปิดตัว: 100 คนแรกรับ Pro ฟรี 3 เดือน — กดไลก์+แชร์วิดีโอ TikTok ของเราเพื่อรับโค้ด — มาก่อนได้ก่อน",
      "title1": "ถ่ายรูปอาหาร.",
      "titleMid": "ติดตามแคลอรี.",
      "title2": "สร้างหุ่นฝัน.",
      "desc": "ไม่ต้องบันทึกเอง แค่ถ่ายรูปนาซิเลอมัก โฟ่ ผัดไทย — หรืออาหารจานไหนก็ได้ — แล้วรู้แคลอรีและสารอาหารทันที",
      "ctaPrimary": "ทดลองฟรี",
      "ctaSecondary": "ดูวิธีใช้",
      "trust1": "ไม่ต้องใช้บัตรเครดิต",
      "trust2": "ยกเลิกได้ตลอดเวลา",
      "users": "คนเอเชียตะวันออกเฉียงใต้ติดตามแคลอรีอย่างชาญฉลาด"
    },
    "socialProof": {
      "dishes": "เมนูท้องถิ่น",
      "users": "ผู้ใช้งาน",
      "speed": "เวลาวิเคราะห์ AI",
      "accuracy": "ความแม่นยำ"
    },
    "media": {
      "title": "ดู SnapCalo ทำงานจริง",
      "subtitle": "ดูว่ารูปเดียวกลายเป็นแคลอรี่ โปรตีน คาร์บ และไขมันได้อย่างไร — ในไม่กี่วินาที",
      "videoCaption": "▶ ดูเดโม",
      "posterCaption": "สร้างเพื่ออาหารเอเชียตะวันออกเฉียงใต้",
      "screenCaption": "สแกนจริง: Nasi Lemak, 833 kcal"
    },
    "features": {
      "title": "ทำไมต้อง SnapCalo?",
      "subtitle": "สร้างมาสำหรับอาหารเอเชียตะวันออกเฉียงใต้โดยเฉพาะ ไม่ต้องเดาแคลอรีของอาหารท้องถิ่นอีกต่อไป",
      "items": [
        {
          "title": "ถ่าย & ติดตาม",
          "desc": "ถ่ายรูปอาหารจานไหนก็ได้ AI ของเราจะระบุอาหารและคำนวณแคลอรีในเวลาไม่ถึง 2 วินาที"
        },
        {
          "title": "ฐานข้อมูลอาหารท้องถิ่น",
          "desc": "ฝึกฝนด้วยเมนูเอเชียตะวันออกเฉียงใต้กว่า 10,000 จาน จากนาซิโกเร็งถึงบุญฉา เรารู้จักเมนูโปรดของคุณ"
        },
        {
          "title": "เป้าหมายอัจฉริยะ",
          "desc": "ตั้งเป้าหมายแคลอรีรายวัน รับคำแนะนำส่วนตัวตามระดับกิจกรรม อายุ และเป้าหมายน้ำหนัก"
        },
        {
          "title": "AI เรียนรู้",
          "desc": "ยิ่งใช้ยิ่งฉลาด เรียนรู้พฤติกรรมการกิน ปริมาณอาหาร และร้านอาหารท้องถิ่นของคุณ"
        },
        {
          "title": "สแกนบาร์โค้ด",
          "desc": "สแกนบาร์โค้ดอาหารบรรจุภัณฑ์เพื่อดูข้อมูลโภชนาการทันที — เหมาะสำหรับขนม เครื่องดื่ม และของจากร้าน"
        },
        {
          "title": "โค้ช AI",
          "desc": "รับเคล็ดลับอัจฉริยะหลังทุกมื้อ ตรงตามเป้าหมายของคุณ เหมือนมีนักโภชนาการอยู่ในกระเป๋า"
        }
      ]
    },
    "howItWorks": {
      "title": "เครื่องมือนับแคลอรีจากรูปทำงานอย่างไร",
      "subtitle": "สามขั้นตอนง่ายๆ ไม่ต้องกรอกข้อมูลเอง แค่ถ่ายแล้วรู้เลย",
      "steps": [
        {
          "num": "01",
          "title": "ระบุอาหารจากรูปภาพ",
          "desc": "SnapCalo ใช้คอมพิวเตอร์วิชั่นขั้นสูงวิเคราะห์รูปอาหารของคุณ ระบุวัตถุดิบ วิธีการปรุง และจดจำอาหารผสม"
        },
        {
          "num": "02",
          "title": "ประมาณแคลอรีและสารอาหาร",
          "desc": "หลังระบุอาหารแล้ว AI ประมาณปริมาณอาหารจากการวิเคราะห์ภาพ คำนวณแคลอรี โปรตีน ไขมัน และคาร์บ"
        },
        {
          "num": "03",
          "title": "ติดตาม & พัฒนา",
          "desc": "ดูความคืบหน้ารายวัน รับเคล็ดลับส่วนตัว และสร้างนิสัยการกินที่ดี AI เรียนรู้รูปแบบของคุณและแม่นยำขึ้นเรื่อยๆ"
        }
      ]
    },
    "accuracy": {
      "title": "แม่นยำแค่ไหน?",
      "subtitle": "เรารู้ว่าคุณใส่ใจความแม่นยำ นี่คือวิธีที่ SnapCalo รับประกันการประมาณแคลอรีที่เชื่อถือได้",
      "items": [
        {
          "title": "วิเคราะห์ภาพ",
          "desc": "AI ของเราวิเคราะห์สัดส่วนอาหาร เนื้อสัมผัส และวิธีการปรุง — ไม่ใช่แค่จับคู่รูปกับฐานข้อมูล"
        },
        {
          "title": "ประมาณปริมาณ",
          "desc": "ใช้วัตถุอ้างอิงในรูปเพื่อประมาณปริมาณอาหารที่สมจริง"
        },
        {
          "title": "เรียนรู้ตลอดเวลา",
          "desc": "ยิ่งถ่ายบ่อย ยิ่งเข้าใจปริมาณที่เป็นเอกลักษณ์และความหลากหลายในท้องถิ่นของคุณ"
        }
      ],
      "note": "จากการทดสอบของเรา SnapCalo มีความแม่นยำ ~95% สำหรับอาหารเอเชียตะวันออกเฉียงใต้ทั่วไป คุณสามารถปรับปริมาณอาหารเองได้เสมอ"
    },
    "foods": {
      "title": "รู้จักเมนูโปรดในท้องถิ่น",
      "subtitle": "SnapCalo จดจำอาหารเอเชียตะวันออกเฉียงใต้นับพันรายการ นี่คือตัวอย่างบางส่วน"
    },
    "testimonials": {
      "title": "เหล่า KOL สายกินทั่วเอเชียตะวันออกเฉียงใต้ชื่นชอบ",
      "items": [
        {
          "quote": "สักทีมีแอปที่รู้ว่านาซิเลอมักไม่ใช่แค่ข้าว! นับแคลอรีได้แม่นยำมาก",
          "name": "Aina",
          "location": "กัวลาลัมเปอร์ มาเลเซีย"
        },
        {
          "quote": "ฉันใช้ทุกวันสำหรับโฟ่และบุญฉา ดีกว่าแอปนับแคลอรีทั่วไปมาก",
          "name": "Trang Nhím",
          "location": "ฮานอย เวียดนาม"
        },
        {
          "quote": "AI จดจำผัดไทยของฉันได้แม้ใส่ถั่วเพิ่ม ลดได้ 4 กิโลใน 2 เดือน",
          "name": "Nutt",
          "location": "กรุงเทพฯ ไทย"
        },
        {
          "quote": "สแกนบาร์โค้ดช่วยฉันได้มากเวลาไปซูเปอร์มาร์เก็ตทุกสัปดาห์ SnapCalo เข้ากับชีวิตฉันสุด ๆ",
          "name": "Fei",
          "location": "อินโดนีเซีย"
        },
        {
          "quote": "เรนแดง กาโด-กาโด แม้แต่สูตรอาหารของยาย ก็จดจำได้ทุกอย่าง",
          "name": "Gerry Girianza",
          "location": "จาการ์ตา อินโดนีเซีย"
        },
        {
          "quote": "ในฐานะครีเอเตอร์ ฉันลองแอปนับแคลอรีมาหลายตัว SnapCalo เป็นตัวแรกที่จดจำอาหารเอเชียตะวันออกเฉียงใต้ได้แม่นจนฉันเชื่อใจจริง ๆ",
          "name": "Faris Danial",
          "location": "กัวลาลัมเปอร์ มาเลเซีย"
        }
      ]
    },
    "faq": {
      "title": "คำถามที่พบบ่อย",
      "items": [
        {
          "q": "SnapCalo ใช้ฟรีไหม?",
          "a": "ใช่! คุณถ่ายอาหารได้สูงสุด 3 มื้อต่อวันฟรี อัปเกรดเป็น Pro เพื่อถ่ายไม่จำกัดและติดตามสารอาหารแบบละเอียด"
        },
        {
          "q": "การประมาณแคลอรีแม่นยำแค่ไหน?",
          "a": "AI ของเรามีความแม่นยำประมาณ 95% สำหรับอาหารเอเชียตะวันออกเฉียงใต้ทั่วไป คุณสามารถปรับปริมาณอาหารเองได้เสมอ"
        },
        {
          "q": "ใช้ได้กับอาหารทุกประเภทไหม?",
          "a": "SnapCalo ถูกฝึกฝนเป็นพิเศษสำหรับอาหารเอเชียตะวันออกเฉียงใต้ ใช้ได้ดีกับอาหารตะวันตก ญี่ปุ่น เกาหลี และจีน"
        },
        {
          "q": "ต้องกรอกวัตถุดิบเองไหม?",
          "a": "ไม่! แค่ถ่ายรูปแล้ว AI จะจัดการให้ ไม่ต้องพิมพ์ ไม่ต้องค้นหา"
        },
        {
          "q": "ข้อมูลของฉันเป็นส่วนตัวไหม?",
          "a": "แน่นอน รูปอาหารและข้อมูลสุขภาพของคุณถูกเข้ารหัสและไม่แชร์กับบุคคลที่สาม"
        }
      ]
    },
    "download": {
      "title": "ดาวน์โหลด SnapCalo วันนี้",
      "subtitle": "วางจำหน่ายบน Google Play แล้ว! สแกน QR โค้ดหรือแตะด้านล่างเพื่อดาวน์โหลด เวอร์ชัน iOS เร็วๆ นี้",
      "scan": "สแกนเพื่อเปิด Google Play",
      "apk": "Android Beta",
      "apkSub": "ดาวน์โหลด APK",
      "webDemo": "เดโมเว็บ",
      "webDemoSub": "ลองใช้ในเบราว์เซอร์",
      "appStore": "App Store",
      "googlePlay": "Google Play",
      "comingSoon": "เร็วๆ นี้",
      "getItOn": "ดาวน์โหลดบน",
      "tag1": "ดาวน์โหลดฟรี",
      "tag2": "ไม่ต้องใช้บัตรเครดิต",
      "tag3": "ยกเลิกได้ตลอดเวลา",
      "whatsNew": "🎉 วางจำหน่ายบน Google Play แล้ว! ใหม่: ชวนเพื่อน — เมื่อเพื่อนสมัคร Pro คุณรับ Pro ฟรี 1 เดือน"
    },
    "pricing": {
      "title": "ราคาง่ายๆ",
      "subtitle": "เริ่มต้นฟรี อัปเกรดเมื่อคุณพร้อม",
      "free": {
        "name": "ฟรี",
        "desc": "ฟรีตลอดไป",
        "price": "$0",
        "period": "/เดือน",
        "features": [
          "สแกนภาพ 3 ครั้ง/วัน",
          "ประวัติมื้ออาหาร 3 วัน",
          "คำแนะนำสุขภาพ AI พื้นฐาน",
          "เตือนดื่มน้ำ & มื้ออาหาร"
        ],
        "missing": [
          "ซิงก์สมาร์ทวอทช์",
          "วิเคราะห์สุขภาพ BMI แบบเรียลไทม์",
          "คำแนะนำโภชนาการ AI แบบเรียลไทม์"
        ],
        "cta": "เริ่มต้น"
      },
      "pro": {
        "name": "Pro",
        "desc": "สำหรับคนจริงจัง",
        "price": "$3.99",
        "period": "/เดือน",
        "badge": "ยอดนิยมที่สุด",
        "features": [
          "สแกนภาพไม่จำกัด",
          "ประวัติมื้ออาหาร 60 วัน",
          "วิเคราะห์ & แนะนำโภชนาการ AI แบบเรียลไทม์",
          "แนะนำสุขภาพ BMI แบบเรียลไทม์",
          "ซิงก์สมาร์ทวอทช์เต็มรูปแบบ",
          "ปลดล็อกฟีเจอร์พรีเมียมทั้งหมด"
        ],
        "cta": "อัปเกรดเป็น Pro"
      },
      "trialNote": "🎁 ผู้ใช้ใหม่: ทดลอง Pro เต็มรูปแบบ 14 วัน — หมดแล้วสมัคร Pro หรือกลับเป็นแบบฟรีอัตโนมัติ"
    },
    "cta": {
      "title": "พร้อมถ่ายมื้อแรกของคุณ?",
      "subtitle": "เข้าร่วมกับ 2,400+ คนเอเชียตะวันออกเฉียงใต้ที่ติดตามแคลอรีอย่างชาญฉลาดด้วย SnapCalo",
      "ctaPrimary": "ทดลองฟรี",
      "ctaSecondary": "เรียนรู้เพิ่มเติม"
    },
    "refer": {
      "title": "ชวนเพื่อน — ได้ทั้งสองฝ่าย!",
      "subtitle": "เพื่อนทุกคนที่สมัคร Pro จะทำให้คุณได้ Pro ฟรี — ไม่จำกัด",
      "baseTitle": "กติกาพื้นฐาน",
      "baseWhen": "เมื่อเพื่อนที่ชวนชำระค่าสมัคร Pro ครั้งแรก",
      "baseYou": "คุณได้ Pro ฟรี 1 เดือน",
      "baseFriend": "เพื่อนได้ Pro ฟรี 21 วัน (ทดลอง 14 วัน + โบนัสชวนเพื่อน 7 วัน)",
      "rulesTitle": "วิธีการทำงาน",
      "rules": [
        "แชร์รหัสเชิญของคุณจากแอป (โปรไฟล์ → ชวนเพื่อน) — เพื่อนกรอกรหัสตอนสมัคร",
        "เพื่อนของคุณรับโบนัส Pro 7 วันทันที นอกเหนือจากทดลองฟรี 14 วัน",
        "เมื่อเพื่อนชำระค่าสมัคร Pro ครั้งแรก รางวัล Pro 1 เดือนจะพร้อมให้คุณ",
        "เปิดหน้าเชิญเพื่อนในแอปแล้วแตะเพื่อรับรางวัล — เพื่อน 1 คนได้ 1 รางวัล ชวนได้ไม่จำกัด"
      ],
      "cta": "รับรหัสเชิญของฉัน"
    },
    "launch": {
      "title": "🚀 สิทธิ์พิเศษเปิดตัว 10 ตุลาคม",
      "steps": [
        "กดไลก์ + แชร์วิดีโอเปิดตัวของเราใน TikTok",
        "คอมเมนต์ \"อยากได้\" ใต้วิดีโอ",
        "รับโค้ดแลกของขวัญสุดพิเศษ"
      ],
      "reward": "🎁 Pro ฟรี 3 เดือน",
      "limit": "⚠️ เฉพาะ 100 คนแรก — มาก่อนได้ก่อน"
    },
    "footer": {
      "tagline": "เครื่องมือติดตามแคลอรี AI สำหรับอาหารเอเชียตะวันออกเฉียงใต้",
      "product": "ผลิตภัณฑ์",
      "company": "บริษัท",
      "legal": "กฎหมาย",
      "copyright": "2026 SnapCalo. สร้างด้วยความรักสำหรับเอเชียตะวันออกเฉียงใต้"
    }
  },
  "zh": {
    "nav": {
      "features": "功能",
      "howItWorks": "使用方法",
      "accuracy": "准确度",
      "foods": "美食",
      "blog": "博客",
      "tryFree": "免费试用"
    },
    "hero": {
      "badge": "专为东南亚打造的 AI",
      "trial": "免费试用 Pro 14 天 —— 无需绑卡",
      "launchTitle": "🎉 SnapCalo 安卓版正式上线啦！",
      "launchSub": "AI 智能营养管理 · 拍照就知道吃什么",
      "launchTrial": "✅ 新用户注册：直接送 14 天免费专业版（Pro）试用",
      "launchGift": "🎁 上线福利：前 100 名送 3 个月免费 Pro！到 TikTok 点赞+分享我们的视频 → 领取兑换码（数量有限，先到先得）",
      "title1": "拍一拍。",
      "titleMid": "算热量。",
      "title2": "练出好身材。",
      "desc": "告别手动记录。只需拍下椰浆饭、越南粉、泰式炒河粉 —— 或任何菜肴 —— 即刻获取卡路里和营养成分。",
      "ctaPrimary": "免费试用",
      "ctaSecondary": "看看怎么用",
      "trust1": "无需信用卡",
      "trust2": "随时取消",
      "users": "位东南亚用户正在智能追踪"
    },
    "socialProof": {
      "dishes": "本地菜品已追踪",
      "users": "活跃用户",
      "speed": "AI 分析时间",
      "accuracy": "识别准确度"
    },
    "media": {
      "title": "看 SnapCalo 实际表现",
      "subtitle": "看一张照片如何在几秒内变成卡路里、蛋白质、碳水和脂肪。",
      "videoCaption": "▶ 观看演示",
      "posterCaption": "专为东南亚美食打造",
      "screenCaption": "真实识别：椰浆饭 833 kcal"
    },
    "features": {
      "title": "为什么选择 SnapCalo？",
      "subtitle": "专为东南亚饮食打造。再也不用猜本地菜的卡路里了。",
      "items": [
        {
          "title": "拍照即追踪",
          "desc": "拍一张任何餐点的照片。我们的 AI 在 2 秒内识别菜品并计算卡路里。无需打字，无需搜索。"
        },
        {
          "title": "本地美食数据库",
          "desc": "基于 10,000+ 道东南亚菜品训练。从印尼炒饭到越南烤肉粉，我们懂你的最爱。"
        },
        {
          "title": "智能目标",
          "desc": "设定每日卡路里目标。根据你的活动量、年龄和体重目标提供个性化建议。"
        },
        {
          "title": "AI 自学习",
          "desc": "用得越多越聪明。学习你的饮食习惯、份量大小，甚至你常去的本地餐厅。"
        },
        {
          "title": "条形码扫描",
          "desc": "扫描包装食品条形码，即刻获取营养成分 —— 零食、饮料、超市商品都能记。"
        },
        {
          "title": "AI 教练",
          "desc": "每餐后给出一句贴合你目标的智能建议，就像口袋里有一位营养师。"
        }
      ]
    },
    "howItWorks": {
      "title": "照片卡路里计数器如何工作",
      "subtitle": "简单三步。无需手动输入。拍一拍，就知道。",
      "steps": [
        {
          "num": "01",
          "title": "从照片识别菜品",
          "desc": "SnapCalo 使用先进的计算机视觉分析你的餐点照片。识别食材、烹饪方式，识别混合菜肴。"
        },
        {
          "num": "02",
          "title": "估算卡路里和营养",
          "desc": "识别菜品后，我们的 AI 通过视觉分析估算份量。计算卡路里、蛋白质、脂肪和碳水化合物。"
        },
        {
          "num": "03",
          "title": "追踪并改善",
          "desc": "查看每日进度，获取个性化建议，养成健康饮食习惯。AI 学习你的模式，越来越精准。"
        }
      ]
    },
    "accuracy": {
      "title": "有多准确？",
      "subtitle": "我们知道你关心精准度。以下是 SnapCalo 如何确保可靠的卡路里估算。",
      "items": [
        {
          "title": "视觉分析",
          "desc": "我们的 AI 分析食物比例、质地和烹饪方式 —— 不只是将照片与数据库匹配。"
        },
        {
          "title": "份量估算",
          "desc": "利用照片中的参照物（如手或勺子）来估算实际份量。"
        },
        {
          "title": "持续学习",
          "desc": "你拍的照片越多，它越了解你的典型份量和本地变化。"
        }
      ],
      "note": "根据我们的测试，SnapCalo 对常见东南亚菜品的准确度约为 95%。你也可以随时手动调整份量。"
    },
    "foods": {
      "title": "认识本地美食",
      "subtitle": "SnapCalo 识别数千道东南亚菜品。以下只是其中一部分。"
    },
    "testimonials": {
      "title": "深受东南亚出名的美食KOL喜爱",
      "items": [
        {
          "quote": "终于有应用知道椰浆饭不只是\"米饭\"！卡路里计算 surprisingly 准确。",
          "name": "Aina",
          "location": "吉隆坡，马来西亚"
        },
        {
          "quote": "我每天都用来拍越南粉和烤肉粉。比普通卡路里应用好用多了。",
          "name": "Trang Nhím",
          "location": "河内，越南"
        },
        {
          "quote": "AI 甚至识别出我加了额外花生的泰式炒河粉。两个月瘦了 4 公斤。",
          "name": "Nutt",
          "location": "曼谷，泰国"
        },
        {
          "quote": "每周去超市扫码功能帮了我大忙。SnapCalo 完全融入了我的生活。",
          "name": "Fei",
          "location": "印尼"
        },
        {
          "quote": "仁当、加多加多，甚至我奶奶的食谱——做的菜它都认得出。",
          "name": "Gerry Girianza",
          "location": "雅加达，印尼"
        },
        {
          "quote": "作为内容创作者，我试过很多卡路里 App。SnapCalo 是第一个对东南亚食物的识别准确度让我真正信服的。",
          "name": "Faris Danial",
          "location": "吉隆坡，马来西亚"
        }
      ]
    },
    "faq": {
      "title": "常见问题",
      "items": [
        {
          "q": "SnapCalo 是免费的吗？",
          "a": "是的！每天可以免费拍 3 餐。升级到 Pro 享受无限拍照和详细营养追踪。"
        },
        {
          "q": "卡路里估算有多准确？",
          "a": "我们的 AI 对常见东南亚菜品的准确度约为 95%。你也可以随时手动调整份量。"
        },
        {
          "q": "适用于所有类型的食物吗？",
          "a": "SnapCalo 专门针对东南亚美食训练。对西餐、日料、韩餐和中餐也同样适用。"
        },
        {
          "q": "需要手动输入食材吗？",
          "a": "不需要！只需拍一张照片，AI 自动完成。无需打字，无需搜索。"
        },
        {
          "q": "我的数据隐私吗？",
          "a": "绝对隐私。你的餐点照片和健康数据均已加密，不会与第三方共享。"
        }
      ]
    },
    "download": {
      "title": "立即下载 SnapCalo",
      "subtitle": "正式上线 Google Play！扫描二维码或点击下方按钮立即下载。iOS 版即将推出。",
      "scan": "扫码打开 Google Play",
      "apk": "Android 测试版",
      "apkSub": "直接下载 APK",
      "webDemo": "网页版 Demo",
      "webDemoSub": "免安装，浏览器直接试",
      "appStore": "App Store",
      "googlePlay": "Google Play",
      "comingSoon": "敬请期待",
      "getItOn": "立即前往",
      "tag1": "免费下载",
      "tag2": "无需信用卡",
      "tag3": "随时取消",
      "whatsNew": "🎉 正式上线 Google Play！新功能：邀请好友——好友付费订阅 Pro，你就得 1 个月 Pro 免费"
    },
    "pricing": {
      "title": "简单定价",
      "subtitle": "免费开始。准备好了再升级。",
      "free": {
        "name": "免费版",
        "desc": "永久免费",
        "price": "¥0",
        "period": "/月",
        "features": [
          "每天 3 次拍照识别",
          "3 天餐点历史",
          "基础 AI 健康建议",
          "饮水 / 用餐提醒"
        ],
        "missing": [
          "手表同步功能",
          "实时 BMI 健康分析",
          "实时 AI 专属营养建议"
        ],
        "cta": "开始使用"
      },
      "pro": {
        "name": "专业版",
        "desc": "适合认真追踪者",
        "price": "$3.99",
        "period": "/月",
        "badge": "最受欢迎",
        "features": [
          "无限次拍照识别",
          "60 天餐点历史",
          "实时 AI 营养分析与建议",
          "实时 BMI 健康指导",
          "完整手表同步",
          "解锁全部高级功能"
        ],
        "cta": "升级到专业版"
      },
      "trialNote": "🎁 新用户福利：注册即享 14 天完整 Pro 试用——试用结束后订阅 Pro，或自动回到免费版"
    },
    "cta": {
      "title": "准备好拍下第一餐了吗？",
      "subtitle": "加入 2,400+ 位正在用 SnapCalo 智能追踪的东南亚用户。",
      "ctaPrimary": "免费试用",
      "ctaSecondary": "了解更多"
    },
    "refer": {
      "title": "邀请好友 · 双方有奖！",
      "subtitle": "每位好友付费订阅 Pro，你就赚免费 Pro——不设上限。",
      "baseTitle": "基础规则",
      "baseWhen": "当被邀请的好友首次付费订阅 Pro",
      "baseYou": "你获得 1 个月免费 Pro",
      "baseFriend": "好友获得 21 天免费 Pro（14 天试用 + 7 天邀请奖励）",
      "rulesTitle": "规则说明",
      "rules": [
        "在 App 里分享你的邀请码（我的 → 邀请好友）——好友注册时输入即可",
        "好友立即在 14 天免费试用之上额外获得 7 天 Pro 奖励",
        "好友首次付费订阅 Pro 后，你的 1 个月 Pro 奖励就准备好了",
        "打开 App 邀请页点击领取——每位好友奖励一次，邀请人数不限"
      ],
      "cta": "获取我的邀请码"
    },
    "launch": {
      "title": "🚀 10月10日 上线专属福利",
      "steps": [
        "到 TikTok 点赞 + 分享我们的发布视频",
        "评论区留言「想要」",
        "领取专属兑换码"
      ],
      "reward": "🎁 免费使用 3 个月专业版 Pro",
      "limit": "⚠️ 仅限前 100 名，先到先得！"
    },
    "footer": {
      "tagline": "专为东南亚美食打造的 AI 卡路里追踪器。",
      "product": "产品",
      "company": "公司",
      "legal": "法律",
      "copyright": "2026 SnapCalo. 为东南亚用心打造。"
    }
  }
}

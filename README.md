# Lunova - Frontend

Bu klasör Lunova projesinin Vite + React tabanlı frontend uygulamasını içerir.

## Başlangıç

### Gereksinimler
- Node.js >= 16
- npm veya yarn

### Kurulum
```bash
npm install
# veya
yarn install
```

### Ortam Değişkenleri
- Geliştirme için: `.env`
- Production için: `.env.production`

**Örnek `.env` (local geliştirme):**
```
VITE_ENVIRONMENT=development
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Lunova
```

**Örnek `.env.production` (canlı ortam):**
```
VITE_ENVIRONMENT=production
VITE_API_BASE_URL=https://api.lunova.tr
VITE_APP_NAME=Lunova
```

### Geliştirme Sunucusu
```bash
npm run dev
# veya
yarn dev
```

### Production Build
```bash
npm run build
npm run preview
# veya
yarn build
yarn preview
```

## Notlar
- API istekleri otomatik olarak environment'a göre backend'e yönlendirilir.
- Ortam dosyalarınızı `.gitignore`'da tutun, gizli bilgileri paylaşmayın.

---

Herhangi bir sorunda proje yöneticinize veya geliştirici ekibe danışabilirsiniz.

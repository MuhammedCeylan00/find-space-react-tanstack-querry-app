# 🗺️ FindSpace - Mekan Keşfetme ve Yorumlama Uygulaması

**FindSpace**, React ve React Query kullanılarak geliştirilmiş basit bir mekan keşif ve inceleme uygulamasıdır. Kullanıcılar yeni mekanlar ekleyebilir, mekanlara dair yorumlarını paylaşabilir ve diğer kullanıcıların deneyimlerini görebilir.

## 🚀 Özellikler

- 🏠 Ana Sayfa – Tüm mekanları listeleme  
- 📍 Mekan Detayları – Seçilen mekana ait detayları ve yorumları görüntüleme  
- ✍️ Yorum Ekleme – Mekanlara yeni yorum ekleyebilme  
- ➕ Yeni Mekan Ekleme – Uygulamaya yeni mekan kaydetme  
- 👤 Profil Sayfası – Kullanıcı profili (şablon olarak hazırlandı)  
- 🗺️ Harita Üzerinden Seçim – Yorum eklerken mekan harita üzerinden seçilebiliyor  

## 🛠️ Kullanılan Teknolojiler

- Vite React 
- React Router  
- Tanstack Query (Eski adıylaReact Query)
- Axios  
- Tailwind CSS  
- React Leaflet
- json-server  

## 📁 Proje Yapısı

```
src/
├── components/         # Tekrar kullanılabilir bileşenler
├── pages/              # Sayfa bileşenleri
├── queries/            # React Query fonksiyonları
├── services/           # Axios API fonksiyonları
├── layout/             # Sayfa düzeni bileşenleri
├── App.tsx             # Ana uygulama
└── routes/             # Sayfa rotaları
```

## 🔧 Kurulum ve Kullanım

### 1. Projeyi klonlayın
```bash
git clone https://github.com/Samet-Berkay-Taskin/PlaceReviewWebApp
cd PlaceReviewWebApp
```

### 2. Gerekli paketleri yükleyin
```bash
npm install
```

### 3. `json-server`'ı başlatın

Proje kök dizininde bir `db.json` dosyası bulunmalıdır. İçinde `places` verileri olmalıdır.

```bash
npm install -g json-server
npm run server
```

> API şu adreste çalışacaktır: `http://localhost:4000`

### 4. Başka bir terminal'de React uygulamasını başlatın
```bash
npm run dev
```

> Uygulama genelde `http://localhost:5173` adresinde çalışır.

## 🗃️ Örnek db.json Yapısı

```json
{
  "places": [
    {
      "id": "1",
      "title": "Galata Kulesi",
      "description": "İstanbul'un tarihi kulelerinden biri.",
      "comments": ["Manzara harikaydı!", "Gün batımında çıkın mutlaka."]
    }
  ]
}
```

## ✨ Notlar

- **React Query**, API isteklerini cache’leyerek performansı artırır ve loading/error durumlarını yönetmeyi kolaylaştırır.
- `useQuery` ile veriler çekilir, `useMutation` ile veri gönderilir.
- json-server sayesinde hızlıca sahte bir REST API oluşturuldu.
- Yorum ekleme işlemi sonrası yönlendirme yapılır (örnek: mekana geri dönme).

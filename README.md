# Kisagu - Yapay Zeka Destekli Güvenlik Analiz Platformu (Frontend Demo)

[🇬🇧 English README](./README.en.md)


**Kisagu**, modern web uygulamaları için geliştirilmiş, yapay zeka destekli bir güvenlik analiz ve yönetim platformudur. Bu repo, projenin **Frontend (Ön Yüz)** demo versiyonunu içerir. Backend bağımlılığı yoktur ve tüm veri akışı `mock` verilerle simüle edilmiştir.

## 🚀 Özellikler

*   **Modern UI/UX**: Next.js 14, TailwindCSS ve Lucide ikonları ile hazırlanmış şık arayüz.
*   **Rol Bazlı Erişim (Mock)**: 
    *   **Platform Admin**: Tüm sistemi yöneten süper kullanıcı (Kisagu).
    *   **Organizasyon Admin**: Şirket sahibi rolü (Robert Davis).
    *   **Organizasyon Üyesi**: Takım üyesi rolü (James Wilson).
*   **Gerçekçi Simülasyon**:
    *   `localStorage` tabanlı oturum yönetimi.
    *   Yapay ağ gecikmeleri (Artificial Latency).
    *   Dinamik Dashboard ve Raporlama ekranları.
*   **Veritabanı Bağımsız**: Herhangi bir DB bağlantısı gerektirmez, hemen çalışır.

## 📸 Ekran Görüntüleri

### Hero Section
![Hero Section](/screenshots/Hero.png)

### Features
![Features](/screenshots/Features.png)

### Prices
![Prices](/screenshots/Prices.png)

### Scenarios
![Scenarios](/screenshots/Scenarios.png)

### Services
![Services](/screenshots/Services.png)

### Blogs
![Blogs](/screenshots/Blogs.png)

### Single Blog
![Single Blog](/screenshots/Single_Blog.png)

### Login
![Login](/screenshots/Login.png)

### Admin Dashboard
![Admin Dashboard](/screenshots/Admin_Dashboard.png)

### Logs (Admin)
![Logs](/screenshots/Logs.png)


## 🛠️ Kurulum

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Repoyu klonlayın
git clone https://github.com/jxpyter/kisagu.git

# Klasöre girin
cd kisagu

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresine gidin.

## 👤 Demo Kullanıcılar

Sistemi test etmek için giriş ekranındaki butonları kullanabilir veya aşağıdaki profilleri inceleyebilirsiniz:

| Rol | İsim | Yetki |
|---|---|---|
| **Platform Admin** | Kisagu | Tam Sistem Erişimi |
| **Org Admin** | Robert Davis | Şirket Yönetimi, Takım Ekleme |
| **Org Üyesi** | James Wilson | Sadece Görüntüleme |

---
*Not: Bu proje bir demo çalışmasıdır ve gerçek bir güvenlik taraması yapmaz.*

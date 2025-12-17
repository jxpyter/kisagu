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

### Anasayfa
<img width="1920" height="1080" alt="Hero" src="https://github.com/user-attachments/assets/b2fc8f5d-f8b9-4e40-a479-5a4d29b20f08" />

### Özellikler
<img width="1920" height="1080" alt="Features" src="https://github.com/user-attachments/assets/6c8372fb-401d-4e9d-93c8-431663075e71" />

### Fiyatlandırma
<img width="1920" height="1080" alt="Prices" src="https://github.com/user-attachments/assets/c5d22368-9653-47d9-82de-1e92ab445d6d" />

### Senaryolar
<img width="1920" height="1080" alt="Scenarios" src="https://github.com/user-attachments/assets/bbed2f8c-704a-4384-9ada-e00e5fa842c9" />

### Servisler
<img width="1920" height="1080" alt="Services" src="https://github.com/user-attachments/assets/88391934-0b13-4c94-b555-8bf0e92a5342" />

### Bloglar
<img width="1920" height="1080" alt="Blogs" src="https://github.com/user-attachments/assets/1c234fea-01f7-4b4b-8e36-9b63e852d7bd" />

### Blog Sayfası
<img width="1920" height="1080" alt="Single_Blog" src="https://github.com/user-attachments/assets/ef49f956-43b4-46e0-abcc-11d61a2aec1a" />

### Giriş Sayfası
<img width="1920" height="1080" alt="Login" src="https://github.com/user-attachments/assets/7e8ebfff-0a88-47da-9314-f0b050f7a36b" />

### Admin Anasayfa
<img width="1920" height="1080" alt="Admin_Dashboard" src="https://github.com/user-attachments/assets/92af5093-92e9-46bf-b5c8-e1be6c08180a" />

### Kayıtlar (Admin)
<img width="1920" height="1080" alt="Logs" src="https://github.com/user-attachments/assets/17f71e51-b949-42b6-9ccd-cbeebde0f66b" />



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

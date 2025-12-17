# Backend Yapılacaklar Listesi (TODO)

[🇬🇧 English Version](./TODO.en.md)

Bu dosya, Kisagu projesinin backend (sunucu tarafı) geliştirme sürecinde yapılacak işleri takip etmek amacıyla oluşturulmuştur.

## 🛠️ Altyapı ve Kurulum (Infrastructure & Setup)
- [ ] Backend projesinin oluşturulması (Node.js / Python)
- [ ] Veritabanı tasarımı ve kurulumu (PostgreSQL)
- [ ] ORM/ODM kurulumu (Prisma / Mongoose)
- [ ] Ortam değişkenleri (Environment Variables) yapılandırması
- [ ] Swagger / OpenAPI dokümantasyonunun kurulumu
- [ ] Docker ve Docker Compose yapılandırması

## 🔐 Kimlik Doğrulama ve Yetkilendirme (Auth & Authorization)
- [ ] Kullanıcı kayıt (Register) ve giriş (Login) endpoint'leri
- [ ] JWT (JSON Web Token) entegrasyonu
- [ ] Rol bazlı erişim kontrolü (RBAC) middleware'i
  - [ ] Platform Admin
  - [ ] Organizasyon Admin
  - [ ] Organizasyon Üyesi
- [ ] Şifre unuttum / Sıfırlama akışları
- [ ] OAuth2 (Google/GitHub) entegrasyonu (Opsiyonel)

## 🏢 Organizasyon ve Çoklu Kiracı (Multi-tenancy)
- [ ] Organizasyon oluşturma ve güncelleme
- [ ] Kullanıcıları organizasyona davet etme
- [ ] Takım üyeleri yönetimi (Ekle/Çıkar/Rol Değiştir)
- [ ] Organizasyon ayarları endpoint'leri

## 🧠 Tarama ve Analiz Motoru (Core Logic)
- [ ] Tarama başlatma endpoint'i
- [ ] Kuyruk yapısının kurulması (Redis/RabbitMQ) - Asenkron taramalar için
- [ ] AI Modeli / Güvenlik motoru entegrasyon servisi
- [ ] Tarama sonuçlarını veritabanına kaydetme
- [ ] Webhook desteği (Tarama bitince bildirim gönderme)

## 📊 Dashboard ve Raporlama
- [ ] Özet istatistikler ve metrik endpoint'leri
- [ ] Geçmiş tarama listeleri ve filtreleme
- [ ] Detaylı güvenlik raporu oluşturma (JSON/PDF)
- [ ] Loglama ve Audit trail (Kim ne yaptı?)

## 💳 Abonelik ve Ödeme (Opsiyonel)
- [ ] Stripe/Iyzico entegrasyonu
- [ ] Abonelik planları yönetimi
- [ ] Fatura oluşturma
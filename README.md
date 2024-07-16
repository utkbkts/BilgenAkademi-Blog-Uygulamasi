Blog Yönetim Sistemi
Bu proje, blog yazılarını yönetmek için oluşturulmuş bir React ve Redux uygulamasıdır. Kullanıcılar yeni blog yazıları ekleyebilir, mevcut yazıları güncelleyebilir ve silebilir.

Kurulum
Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin.

Gereksinimler
Node.js (v14.0.0 veya üstü)
Git
Adımlar
Bu projeyi klonlayın

bash
Kodu kopyala
git clone https://github.com/utkbkts/BilgenAkademi-Blog-Uygulamasi.git
Proje dizinine gidin

bash
Kodu kopyala
cd blog-yonetim-sistemi
Gerekli paketleri yükleyin

bash
Kodu kopyala
npm install
Uygulamayı çalıştırın

bash
Kodu kopyala
npm start
Bu komut, projenizi http://localhost:5173 adresinde çalıştıracaktır.

Kullanım
Uygulama açıldığında, ana sayfada mevcut blog yazılarını görebilirsiniz. Aşağıdaki işlemleri gerçekleştirebilirsiniz:

Yeni Blog Yazısı Oluşturma: Sayfanın üst kısmındaki "Yeni Blog Oluştur" düğmesine tıklayın ve formu doldurun.
Blog Yazısını Güncelleme: Her bir blog yazısının yanında bulunan "Güncelle" düğmesine tıklayarak mevcut yazıyı düzenleyin.
Blog Yazısını Silme: Her bir blog yazısının yanında bulunan "Sil" düğmesine tıklayarak yazıyı silin.
Dosya Yapısı
src/: Proje kaynak dosyaları
components/: React bileşenleri
redux/: Redux dilimleri ve mağaza ayarları
styles/: CSS dosyaları
public/: Genel statik dosyalar
package.json: Proje bağımlılıkları ve scriptler
Katkıda Bulunma
Eğer projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları izleyin:

Bu repoyu fork'layın
Yeni bir branş oluşturun (git checkout -b feature/ozellik)
Değişikliklerinizi commit edin (git commit -m 'Yeni özellik ekle')
Branşınızı push'layın (git push origin feature/ozellik)
Bir Pull Request açın
Lisans
Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakabilirsiniz.

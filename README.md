# Uçak Bileti Filtreleme Uygulaması

Bu proje, Next.js kullanılarak geliştirilmiş bir uçak bileti filtreleme ve listeleme uygulamasıdır. Uygulama, API'den uçuş verilerini çeker, kullanıcıların belirli kriterlere göre filtreleme yapmasını sağlar ve sonuçları tablo halinde görüntüler.

## Nasıl Çalışır?

Uygulama, bir Next.js projesidir ve client-side rendering (CSR) kullanır. Yani, kullanıcı etkileşimleri ve veri işlemleri tarayıcıda gerçekleştirilir. Uygulama şu adımları takip eder:

1. İlk olarak, uygulama verileri API'den çeker ve yükleme ekranı gösterir.
2. Veriler yüklendikten sonra, kullanıcıya süre, fiyat, kalkış ve varış şehirleri gibi çeşitli filtreleme seçenekleri sunulur.
3. Kullanıcı filtreleme seçeneklerini işaretledikçe, uçuşlar bu seçeneklere göre filtrelenir ve sonuçlar tabloda gösterilir.
4. Kullanıcılar ayrıca "SSS", "Gizlilik Politikası" ve iletişim bilgileri gibi bağlantıları da bulabilirler.

## Özellikler

- Süre, fiyat aralığı, kalkış ve varış şehirleri gibi çeşitli filtreleme seçenekleri
- Filtrelenmiş uçuşların tablo halinde görüntülenmesi
- Bağlantılar aracılığıyla diğer sayfalara yönlendirme

## Nasıl Kullanılır?

1. Projeyi bilgisayarınıza klonlayın veya ZIP olarak indirin.
2. Proje dizinine gidin ve gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
3. Proje dizininde `npm run dev` komutunu çalıştırarak uygulamayı başlatın.
4. Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyin.

## Geliştirme Süreci

Bu uygulama, Next.js kullanılarak geliştirilmiştir. Ana bileşenler arasında React Hooks kullanımı, veri filtreleme işlemleri ve API ile iletişim yer alır. Geliştirme sürecinde şu adımlar izlenmiştir:

1. Verilerin API'den alınması ve bileşenlere aktarılması
2. Filtreleme işlevlerinin oluşturulması ve bileşenler arası iletişimin sağlanması
3. Kullanıcı arayüzünün oluşturulması ve tasarımın uygulanması
4. Bağlantılar ve sayfa yönlendirmelerinin entegrasyonu
5. Uygulama testleri ve hata ayıklama işlemleri

## Kullanılan Teknolojiler

- Next.js
- React
- React Hooks
- Fetch API
- HTML
- CSS

## Daha Fazla Bilgi

Detaylı bilgi ve iletişim için [hakki.info](https://hakki.info/) adresini ziyaret edebilirsiniz.

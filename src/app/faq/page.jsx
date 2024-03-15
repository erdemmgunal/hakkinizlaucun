import Link from "next/link";

export default function Faq() {
  return (
    <div className="p-4 text-[#02aff1]">
      <Link href="/" className="underline">Ana Menü</Link>
      <div className="pt-5">
        <h1 className="text-3xl font-bold mb-5">Sıkça Sorulan Sorular (kimse sormadı ben eklemek istedim)</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold">Bu site ne işe yarıyor?</h2>
          <p>Türkiye ve çevresinden kısa süreli gidiş dönüş biletlerini en ucuzdan pahalıya doğru sıralayan bir araçtır.</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold">Bu bilgiler nereden geliyor?</h2>
          <p>Uçuş bilgilerini almak için <a href="https://www.flypgs.com" className="underline">flypgs.com</a> API'ını kullanıyorum.</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold">Neden sitedeki tüm uçuşlar yok?</h2>
          <p>Sitede, API aracılığıyla sağlanan veriler üzerinden sadece belirli tarih aralıklarını ve Türkiye veya çevresi çıkışlı ve dönüşü Avrupa'ya olan en ucuz 1000 gidiş dönüş biletleri listelenmektedir.</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold">Bu site ne sıklıkla güncellenmektedir?</h2>
          <p>Uçuşlar saat başı güncellenmektedir.</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold">Sen kimsin?</h2>
          <p>Gezmeye meraklı bir yazılımcıyım. Yakın tarihte 3-4-5..7 günlük İstanbul'dan Avrupa'ya ucuza uçak bileti ararken bu siteyi yaptım.</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold">Nereden para kazanıyorsun?</h2>
          <p>Kazanmıyorum. Bu siteyi kendime ve arkadaşlarıma uyguna uçak bileti bulabilmek için yaptım, sonra seninle paylaşmak istedim.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold">Ek bilgiler</h2>
          <p>Başka sorun varsa <a href="mailto:hello@hakkinizlaucun.com" className="underline">hello@hakkinizlaucun.com</a> adresine e-posta gönderin.</p>
        </div>
      </div>
    </div>
  );
}
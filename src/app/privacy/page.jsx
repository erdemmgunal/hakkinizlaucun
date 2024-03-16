import Link from "next/link";

export default function Privacy() {
  return (
    <div className="p-4 text-[#02aff1]">
      <Link href="/" className="underline">Ana Menü</Link>
      <div className="pt-5">
        <h1 className="text-3xl font-bold mb-5">Gizlilik</h1>
        
        <div className="mb-8">
          <h2>Hata ayıklama ve kötüye kullanımı önleme amacıyla IP adresin 30 güne kadar kaydedilebilir ve saklanabilir.</h2>
          <p>Anonimleştirilmiş HTTP yönlendirme bilgileri, analiz amacıyla sunucularımıza gönderilir ve süresiz olarak saklanabilir.</p>
          <p>Sana ait hiçbir bilgiyi üçüncü şahıslarla paylaşmıyorum.</p>
        </div>
        
        <h1 className="text-3xl font-bold mb-5">Çerezler</h1>
        <div className="mb-8">
          <p>Bu sitenin çerez içermez.</p>
        </div>

        <h1 className="text-3xl font-bold mb-5">Kampanyalar, Fırsatlar</h1>
        <div className="mb-8">
          <p>Bu tarz kampanya veya fırsatlar bazen hesaplara özel olarak çıkarıldığından scraperın yakalaması güçtür onun için pegasus <a href="https://www.flypgs.com/kampanyali-ucak-biletleri" className="underline">kampanyalar kısmını</a> veya <a href="https://www.instagram.com/pegasusairlines/" className="underline">sosyal medya</a> hesabını takip edebilirsin.</p>
        </div>

        <h1 className="text-3xl font-bold mb-5">Ek Bilgiler</h1>
        <div>
          <p>Başka sorularınız varsa <a href="mailto:hello@hakkinizlaucun.com" className="underline">hello@hakkinizlaucun.com</a> adresine e-posta gönder.</p>
        </div>
      </div>
    </div>
  );
}

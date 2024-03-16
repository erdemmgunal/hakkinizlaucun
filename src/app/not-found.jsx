import Image from "next/image";

export default async function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">404 - Burada görülecek bir şey yok</h1>
        <p className="font-bold text-lg">Üzgünüm, aradığınız sayfa bulunamadı.</p>
        <p className="font-bold text-lg mb-8">Endişelenme, Nyan Cat seni bu esnada eğlendirecek!</p>
        <div className="relative w-full h-80">
          <Image
            src="/images/nyan-cat.gif"
            alt="Nyan Cat"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}
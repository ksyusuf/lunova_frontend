import logo from "../assets/logo-white.png";

export default function HomePage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-8">
      <div className="bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-gray-800/90 bg-gray-900/90 rounded-3xl shadow-2xl p-8 max-w-2xl w-full flex flex-col items-center border border-purple-200/40">
        <img src={logo} alt="Lunova Logo" className="mx-auto w-40 h-auto drop-shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-purple-200 via-pink-300 to-blue-300 text-transparent bg-clip-text drop-shadow leading-tight">
          Lunova'ya Hoş Geldiniz
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-100">Türkiye'nin Yaşam Rehabilitasyonu Platformu</h2>
        <p className="text-base md:text-lg text-gray-200 mb-2 text-center">
          Sistem üretimi aralıksız sürerken, bağımlılıkla mücadelede çığır açacak doğal ve kişisel çözümler sunmak için çalışıyoruz.
        </p>
        <p className="text-base text-gray-400 text-center mb-6">Bu süreçte takipte kalın, bizimle kalın.</p>
        <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
          <a href="https://whatsapp.com/channel/0029VbBdLTL0Vyc8qXWCBT3y" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500/90 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors justify-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            Lunova kanalını takip edin
          </a>
          <a href="mailto:merhaba@lunova.tr" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors justify-center border border-white/20">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            merhaba@lunova.tr
          </a>
          <a href="tel:08503053042" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors justify-center border border-white/20">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            0850 305 30 42
          </a>
        </div>
      </div>
    </div>
  );
}

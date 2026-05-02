import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';

const About = () => {
  return (
    <div className="antialiased bg-body text-body font-body">
      <TopBanner />

      <Header />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        <img className="absolute bottom-0 left-0" src="/fauna-assets/about/lines.svg" alt="" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-8">Lunova Kimdir?</h1>
            <p className="text-2xl text-black font-medium mb-10">
              Lunova, bağımlılıkla mücadelede bütüncül ve yenilikçi çözümler sunan öncü bir dijital platformdur. Amacımız, bağımlılık sürecinin her aşamasında, bireylerin ve ailelerinin yanında durarak kapsamlı destek sağlamaktır.
            </p>
            <Link className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" to="/contact">
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section - Farklı Yaklaşım */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-24">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div>
                <h1 className="font-heading text-6xl mb-6">Farklı Yaklaşım</h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <p className="text-xl font-medium mb-10">
                  Geleneksel tedavi yöntemlerinden farklı olarak, teknolojiyle entegre ettiğimiz şeffaf ve erişilebilir bir model sunuyoruz. Bu sayede destek hizmetlerimize kolay ulaşım sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Uzman Kadro Section */}
       <section className="py-12 lg:py-24">
         <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto">
             <h2 className="font-heading text-4xl sm:text-5xl mb-6">Uzman Kadro</h2>
             <p className="text-xl text-gray-700 mb-12">
               Psikologlar, terapistler, bağımlılık danışmanları ve avukatlardan oluşan profesyonel ekibimizle size özel tedavi planları hazırlıyoruz.
             </p>
           </div>
         </div>
         <div className="flex overflow-x-hidden">
           <div className="w-1/3 lg:w-1/5 -ml-32 flex-shrink-0 px-2 md:px-4">
             <img className="block w-full h-full object-cover rounded-3xl" src="/fauna-assets/about/about-image1.png" alt="" />
           </div>
           <div className="w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4">
             <img className="block w-full h-full object-cover rounded-3xl" src="/fauna-assets/about/about-image2.png" alt="" />
           </div>
           <div className="w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4">
             <img className="block w-full h-full object-cover rounded-2xl" src="/fauna-assets/about/about-image3.png" alt="" />
           </div>
           <div className="w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4">
             <img className="block w-full h-full object-cover rounded-2xl" src="/fauna-assets/about/about-image4.png" alt="" />
           </div>
           <div className="w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4">
             <img className="block w-full h-full object-cover rounded-2xl" src="/fauna-assets/about/about-image5.png" alt="" />
           </div>
           <div className="w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4">
             <img className="block w-full h-full object-cover rounded-2xl" src="/fauna-assets/about/about-image1.png" alt="" />
           </div>
           <div className="w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4">
             <img className="block w-full h-full object-cover rounded-2xl" src="/fauna-assets/about/about-image2.png" alt="" />
           </div>
         </div>
       </section>

      {/* Sürdürülebilir İyileşme Section */}
      <section className="py-12 lg:py-24 bg-lime-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6">Sürdürülebilir İyileşme</h2>
            <p className="text-xl text-gray-700 mb-8">
              12 aylık ücretsiz takip programımız ile iyileşme sürecinizin sürekliliğini garanti altına alıyoruz. Çünkü biliyoruz ki, gerçek iyileşme uzun soluklu bir yolculuktur.
            </p>
          </div>
        </div>
      </section>

      {/* Vizyon ve Misyon Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl sm:text-6xl mb-16 text-center">Vizyonumuz ve Misyonumuz</h1>
            
            <div className="mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl mb-4">Vizyon</h2>
              <p className="text-lg text-gray-700">
                Türkiye'de bağımlılıkla mücadele eden her bireyin, modern, etkili ve erişilebilir tedavi hizmetlerine ulaşabildiği bir toplum yaratmak. Bağımlılıkların sadece bir hastalık değil, aynı zamanda sosyal bir mesele olduğu bilinciyle, tüm paydaşları içeren kapsamlı çözümler sunmayı hedefliyoruz.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl mb-4">Misyon</h2>
              <p className="text-lg text-gray-700 mb-4">
                Psikolojik, sosyal ve hukuki destekleri bir araya getirerek bağımlılıkla mücadele yolculuğunda bireylere ve ailelerine kapsamlı bir rehabilitasyon süreci sunmak.
              </p>
              <p className="text-lg text-gray-700">
                Teknolojiyi ve bilimi kullanarak bağımlılık tedavisinde yenilikçi yaklaşımları benimseyen, damgalanmayı ortadan kaldıran ve iyileşme sürecini destekleyen bir ekosistem oluşturmak.
              </p>
                         </div>
             
             <div className="mt-8 p-6 bg-lime-50 rounded-2xl border-l-4 border-teal-900">
               <p className="text-gray-700 italic">
                 <strong className="text-teal-900">Not:</strong> Bu sunum, Lunova'nın toplumsal sağlık sorumluluğu gereği hazırladığı bir sosyal sorumluluk hizmetidir. Amacımız bağımlılık konusunda farkındalık yaratmak ve yardım seçenekleri hakkında bilgi vermektir.
               </p>
                           </div>
            </div>
          </div>
        </section>

      {/* Newsletter CTA */}
      <div>
        <div>
          <section>
            <div className="p-4">
              <div className="max-w-xl lg:max-w-5xl mx-auto xl:max-w-none px-5 md:px-12 xl:px-24 py-16 bg-teal-900 rounded-2xl">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                      <div className="max-w-md xl:max-w-none">
                        <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl tracking-sm text-white mb-6">
                          İyileşme Yolculuğunuzda Yanınızdayız
                        </h1>
                        <p className="text-lg text-white opacity-80">
                          Bağımlılıkla mücadelede destek için bugün bizimle iletişime geçin
                        </p>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 lg:text-right">
                      <Link className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" to="/contact">
                        İletişime Geç
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
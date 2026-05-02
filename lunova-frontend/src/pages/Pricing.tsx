import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';

const Pricing = () => {
  return (
    <div className="antialiased bg-body text-body font-body">
      <TopBanner />

      <Header />

      {/* Pricing Section */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        <img className="absolute top-0 right-0" src="/fauna-assets/pricing/waves-right-top.png" alt="" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-xs mb-6">Fiyatlandırma</h1>
            <p className="text-lg text-gray-700">Fiyatlandırma planlarımız sade ve farklı büyüklükteki bireyler ile kurumlar için tasarlanmıştır. İhtiyaçlarınıza ve bütçenize en uygun planı seçin.</p>
          </div>
          <div className="flex flex-wrap -mx-4 mb-24">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="relative pt-14 pb-8 px-8 bg-orange-50 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-lime-500"></div>
                <span className="block text-2xl font-medium mb-6">Başlangıç</span>
                <div className="flex items-center mb-6">
                  <span className="text-6xl">₺1.490</span>
                  <span className="ml-4 text-xl font-medium text-gray-700">/ ay</span>
                </div>
                <p className="text-lg mb-8">Bireysel destek almak isteyen kişiler için ideal plan</p>
                <Link className="inline-flex w-full group py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" to="#!">
                  <span className="mr-2">Başlayın</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="relative pt-14 pb-8 px-8 bg-lime-500 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full py-0.5 flex items-center justify-center bg-teal-900">
                  <span className="text-xs leading-7 text-white">Önerilen</span>
                </div>
                <span className="block text-2xl font-medium mb-6">Premium</span>
                <div className="flex items-center mb-6">
                  <span className="text-6xl">₺2.990</span>
                  <span className="ml-4 text-xl font-medium text-gray-700">/ ay</span>
                </div>
                <p className="text-lg mb-8">Daha kapsamlı destek arayan bireyler ve aileler için</p>
                <Link className="inline-flex w-full group py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" to="#!">
                  <span className="mr-2">Başlayın</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="relative pt-14 pb-8 px-8 bg-orange-50 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-lime-500"></div>
                <span className="block text-2xl font-medium mb-6">Kurumsal</span>
                <span className="block text-6xl mb-6">Özel</span>
                <p className="text-lg mb-8">Kurumsal ihtiyaçlara özel olarak hazırlanmış çözüm</p>
                <Link className="inline-flex w-full group py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" to="#!">
                  <span className="mr-2">Teklif Alın</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-4 overflow-x-scroll">
            <h4 className="font-heading text-3xl font-medium text-center mb-8">Planları Karşılaştır</h4>
            <table className="min-w-max">
              <thead>
                <tr>
                  <th className="w-72 pr-4"></th>
                  <th className="w-72 px-4">
                    <div className="py-4 px-2 shadow-md rounded-2xl">
                      <span className="block font-medium">Başlangıç</span>
                      <div className="flex items-center justify-center">
                        <span className="font-medium">₺1.490</span>
                        <span className="ml-1 font-medium text-gray-700">/ay</span>
                      </div>
                    </div>
                  </th>
                  <th className="w-72 px-4">
                    <div className="py-4 px-2 shadow-md rounded-2xl">
                      <span className="block font-medium">Premium</span>
                      <div className="flex items-center justify-center">
                        <span className="font-medium">₺2.990</span>
                        <span className="ml-1 font-medium text-gray-700">/ay</span>
                      </div>
                    </div>
                  </th>
                  <th className="w-72 pl-4">
                    <div className="py-4 px-2 shadow-md rounded-2xl">
                      <span className="block font-medium">Kurumsal</span>
                      <span className="font-medium">Özel</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="py-8">
                      <span className="text-xl font-medium">Destek</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b">
                    <div className="py-8">
                      <span className="text-sm">Kayıt Ücreti</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">₺299</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Kayıt Ücreti Yok</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Kayıt Ücreti Yok</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b">
                    <div className="py-8">
                      <span className="text-sm">Memnuniyet Garantisi</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="inline-block">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.666504" width="20" height="20" rx="10" fill="#BEF264"></rect>
                          <path d="M15.4667 6.40002L8.8667 13L5.8667 10" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="inline-block">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.666504" width="20" height="20" rx="10" fill="#BEF264"></rect>
                          <path d="M15.4667 6.40002L8.8667 13L5.8667 10" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="inline-block">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.666504" width="20" height="20" rx="10" fill="#BEF264"></rect>
                          <path d="M15.4667 6.40002L8.8667 13L5.8667 10" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b">
                    <div className="py-8">
                      <span className="text-sm">7/24 Müşteri Desteği</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="inline-block">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.666504" width="20" height="20" rx="10" fill="#EDF2F1"></rect>
                          <path d="M14.2664 6.40002L7.06641 13.6M7.06641 6.40002L14.2664 13.6" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="inline-block">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.666504" width="20" height="20" rx="10" fill="#BEF264"></rect>
                          <path d="M15.4667 6.40002L8.8667 13L5.8667 10" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="inline-block">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.666504" width="20" height="20" rx="10" fill="#BEF264"></rect>
                          <path d="M15.4667 6.40002L8.8667 13L5.8667 10" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b">
                    <div className="py-8">
                      <span className="text-sm">İlerleme Takibi</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="inline-block">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.666504" width="20" height="20" rx="10" fill="#EDF2F1"></rect>
                          <path d="M14.2664 6.40002L7.06641 13.6M7.06641 6.40002L14.2664 13.6" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="inline-block">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.666504" width="20" height="20" rx="10" fill="#BEF264"></rect>
                          <path d="M15.4667 6.40002L8.8667 13L5.8667 10" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="inline-block">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.666504" width="20" height="20" rx="10" fill="#BEF264"></rect>
                          <path d="M15.4667 6.40002L8.8667 13L5.8667 10" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="pt-12">
                    <div className="py-8">
                      <span className="text-xl font-medium">Hizmet Kapsamı</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b">
                    <div className="py-8">
                      <span className="text-sm">Uzman Erişimi</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Sınırlı</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Tam</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Öncelikli</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b">
                    <div className="py-8">
                      <span className="text-sm">Grup Seansları</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Ayda 2</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Sınırsız</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Özel</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b">
                    <div className="py-8">
                      <span className="text-sm">Bireysel Seans Hakkı</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Ayda 4</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Ayda 8</span>
                    </div>
                  </td>
                  <td className="border-b">
                    <div className="py-8 text-center">
                      <span className="text-sm">Özel</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
                          İyileşme Yolculuğunuza Başlayın
                        </h1>
                        <p className="text-lg text-white opacity-80">
                          Lunova ile bağımlılıkla mücadelede profesyonel ve bütüncül destek alın.
                        </p>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 lg:text-right">
                      <Link className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" to="/contact">
                        Hemen Başlayın
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

export default Pricing;
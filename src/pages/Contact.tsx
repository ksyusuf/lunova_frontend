import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '1'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      <TopBanner />

      <Header />

      {/* Contact Form Section */}
      <section className="py-12 lg:py-24 relative overflow-hidden">
        <img className="absolute top-0 left-0 w-full h-full max-h-116 md:max-h-128" src="/fauna-assets/contact/waves-bg-lime-half.png" alt="" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-20">
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-sm mb-6">İletişim</h1>
              <p className="text-lg text-gray-700 mb-16">Bağımlılıkla mücadelede yanınızdayız. İyileşme yolculuğunuzda destek için bize ulaşın.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-md">
              <form onSubmit={handleSubmit}>
                <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="fullName">
                  Ad Soyad
                </label>
                <input
                  className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="email">
                  E-posta
                </label>
                <input
                  className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="phone">
                  <span>Telefon</span>
                  <span className="text-gray-700"> (opsiyonel)</span>
                </label>
                <input
                  className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="service">
                  Hizmet
                </label>
                <div className="relative w-full mb-8 bg-white rounded-full">
                  <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.3999 8.2L9.9999 11.8L13.5999 8.2" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <select
                    className="w-full px-4 py-3 text-gray-600 border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="1">Hizmet seçin</option>
                    <option value="2">Bireysel Online Psikoterapi</option>
                    <option value="3">Aile Destek Programları</option>
                    <option value="4">Hukuki Rehberlik</option>
                    <option value="5">12 Aylık Ücretsiz Takip</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="flex w-full py-3 px-5 items-center justify-center font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                >
                  <span className="mr-2">Gönder</span>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl mb-4">Bize Ulaşın</h2>
            <p className="text-lg text-gray-700">Sorularınız, başvurularınız veya destek talepleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz.</p>
          </div>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full sm:w-auto px-4 mb-6">
              <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 mr-4 bg-teal-900 rounded-full flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">E-posta</p>
                  <a href="mailto:merhaba@lunova.tr" className="font-semibold text-teal-900 hover:underline">merhaba@lunova.tr</a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-auto px-4 mb-6">
              <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 mr-4 bg-teal-900 rounded-full flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Telefon</p>
                  <a href="tel:+908503053042" className="font-semibold text-teal-900 hover:underline">0850 305 30 42</a>
                </div>
              </div>
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
                      <Link className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" to="#!">
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

export default Contact;
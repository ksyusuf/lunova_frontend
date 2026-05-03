import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FAQItem from '../components/FAQItem';
import TopBanner from '../components/TopBanner';

const Home = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const slideCount = 3;

  return (
    <div className="antialiased bg-body text-body font-body">
      <TopBanner />
      <div>
        <section className="relative bg-teal-900" x-data="{ mobileNavOpen: false }">
          <img className="absolute top-0 left-0 w-full h-full" src="/fauna-assets/headers/bg-waves.png" alt="" />
          <nav className="mx-4 py-6">
            <div className="container mx-auto px-4">
              <div className="relative flex items-center justify-between">
                <Link className="inline-flex items-center gap-2" to="/">
                  <img className="h-8" src="/images/logo.png" alt="Lunova" />
                  <span className="text-xl font-bold text-white tracking-wide">LUNOVA</span>
                </Link>
                <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                  <li className="mr-8">
                    <Link className="inline-block text-white hover:text-lime-500 font-medium" to="/about">
                      Hakkımızda
                    </Link>
                  </li>
                  <li className="mr-8">
                    <Link className="inline-block text-white hover:text-lime-500 font-medium" to="/careers">
                      Gönüllü Ol
                    </Link>
                  </li>
                  <li className="mr-8">
                    <Link className="inline-block text-white hover:text-lime-500 font-medium" to="/contact">
                      İletişim
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-block text-white hover:text-lime-500 font-medium" to="/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
                <div className="flex items-center justify-end">
                  <div className="hidden md:block">
                    <Link className="inline-flex group py-2.5 px-4 items-center justify-center text-sm font-medium text-white hover:text-teal-900 border border-white hover:bg-white rounded-full transition duration-200" to="/contact">
                      <span className="mr-2">İletişime Geç</span>
                      <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                  <button
                    className="md:hidden text-white hover:text-lime-500"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.19995 23.2H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M5.19995 16H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M5.19995 8.79999H26.7999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div className="relative pt-18 pb-24 sm:pb-32 lg:pt-36 lg:pb-62">
            <div className="container mx-auto px-4 relative">
              <div className="max-w-lg xl:max-w-xl mx-auto text-center">
                <h1 className="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight text-white mb-8">Bağımlılıkla Mücadelede Yanınızdayız</h1>
                <p className="max-w-md xl:max-w-none text-lg text-white opacity-80 mb-10">Lunova: Bütüncül ve Yenilikçi Çözümler. Bağımlılık mücadelenizde yalnız değilsiniz. Teknoloji destekli bütüncül yaklaşımımızla iyileşme yolculuğunuzun her adımında yanınızdayız.</p>
                <Link className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" to="/contact">
                  Hemen İletişime Geç
                </Link>
              </div>
            </div>
          </div>
          <div className={`fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-violet-900 opacity-20" onClick={() => setMobileNavOpen(false)}></div>
            <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
              <div className="flex items-center justify-between">
                <Link className="inline-flex items-center gap-2" to="/">
                  <img className="h-8" src="/images/logo-black.png" alt="Lunova" />
                  <span className="text-xl font-bold text-teal-900 tracking-wide">LUNOVA</span>
                </Link>
                <div className="flex items-center">
                  <Link className="inline-flex py-2.5 px-4 mr-6 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" to="/login">
                    Login
                  </Link>
                  <button onClick={() => setMobileNavOpen(false)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="pt-20 pb-12 mb-auto">
                <ul className="flex-col">
                  <li className="mb-6">
                    <Link className="inline-block text-teal-900 hover:text-teal-700 font-medium" to="/about">
                      Hakkımızda
                    </Link>
                  </li>
                  <li className="mb-6">
                    <Link className="inline-block text-teal-900 hover:text-teal-700 font-medium" to="/careers">
                      Gönüllü Ol
                    </Link>
                  </li>
                  <li className="mb-6">
                    <Link className="inline-block text-teal-900 hover:text-teal-700 font-medium" to="/contact">
                      İletişim
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-block text-teal-900 hover:text-teal-700 font-medium" to="/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <Link className="inline-flex items-center text-lg font-medium text-teal-900" to="/newsletter">
                  <span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.4 6.39999H25.6C26.92 6.39999 28 7.47999 28 8.79999V23.2C28 24.52 26.92 25.6 25.6 25.6H6.4C5.08 25.6 4 24.52 4 23.2V8.79999C4 7.47999 5.08 6.39999 6.4 6.39999Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M28 8.8L16 17.2L4 8.8" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span className="ml-2">Newsletter</span>
                </Link>
                <div className="flex items-center">
                  <a className="inline-block mr-4" href="#!">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_282_7847)">
                        <path d="M11.548 19.9999V10.8776H14.6087L15.0679 7.32146H11.548V5.05136C11.548 4.02209 11.8326 3.32066 13.3103 3.32066L15.1918 3.31988V0.139123C14.8664 0.0968385 13.7495 -0.000106812 12.4495 -0.000106812C9.73488 -0.000106812 7.87642 1.65686 7.87642 4.69916V7.32146H4.8064V10.8776H7.87642V19.9999H11.548Z" fill="#022C22"></path>
                      </g>
                    </svg>
                  </a>
                  <a className="inline-block mr-4" href="#!">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"></path>
                    </svg>
                  </a>
                  <a className="inline-block" href="#!">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </div>
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">1000+</h5>
                <span className="text-base lg:text-lg text-gray-700">Memnun Danışan</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">50+</h5>
                <span className="text-base lg:text-lg text-gray-700">Uzman Klinisyen</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">12</h5>
                <span className="text-base lg:text-lg text-gray-700">Aylık Ücretsiz Takip</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">%95</h5>
                <span className="text-base lg:text-lg text-gray-700">Başarı Oranı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-lime-500 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#022C22"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium">Hizmetlerimiz</span>
            </div>
            <div className="border-t border-teal-900 border-opacity-25 pt-14">
              <h1 className="font-heading text-4xl sm:text-6xl mb-24">İyileşme Yolları</h1>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 px-4 mb-16">
                  <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <circle cx="16" cy="16" r="4" fill="#022C22"></circle>
                      <circle cx="24" cy="32" r="4" fill="#022C22"></circle>
                      <circle cx="32" cy="16" r="4" fill="#022C22"></circle>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Bireysel Online Psikoterapi</h5>
                      <p className="mb-6">Uzman psikologlarımız ve bağımlılık danışmanlarımız tarafından sunulan, kişiye özel terapi seansları. Mahremiyet ve gizlilik ilkelerine uygun olarak, rahat ettiğiniz ortamda terapi desteği alabilirsiniz.</p>
                      <Link className="inline-block text-lg font-medium hover:text-teal-700" to="/contact">Daha Fazla</Link>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-16">
                  <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22"></rect>
                      <rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22"></rect>
                      <rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22"></rect>
                      <rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22"></rect>
                      <rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22"></rect>
                      <rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22"></rect>
                      <rect x="26.1213" y="27.5355" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5355)" fill="#022C22"></rect>
                      <rect x="11.9792" y="13.3934" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3934)" fill="#022C22"></rect>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Aile Destek Programları</h5>
                      <p className="mb-6">Bağımlılık sadece bireyi değil, tüm aileyi etkileyen bir süreçtir. Bu nedenle aile üyelerine yönelik psikoeğitim, danışmanlık ve grup terapisi hizmetleri sunuyoruz.</p>
                      <Link className="inline-block text-lg font-medium hover:text-teal-700" to="/contact">Daha Fazla</Link>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-16 sm:mb-0">
                  <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <path d="M25 24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23C24.5523 23 25 23.4477 25 24Z" fill="#022C22"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 25C24.5523 25 25 24.5523 25 24C25 23.4477 24.5523 23 24 23C23.4477 23 23 23.4477 23 24C23 24.5523 23.4477 25 24 25Z" fill="#022C22"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M40 23C40.5523 23 41 23.4477 41 24C41 33.3888 33.3888 41 24 41C23.4477 41 23 40.5523 23 40C23 39.4477 23.4477 39 24 39C32.2843 39 39 32.2843 39 24C39 23.4477 39.4477 23 40 23Z" fill="#022C22"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 9C15.7157 9 9 15.7157 9 24C9 24.5523 8.55228 25 8 25C7.44772 25 7 24.5523 7 24C7 14.6112 14.6112 7 24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9Z" fill="#022C22"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M36 23C36.5523 23 37 23.4477 37 24C37 31.1797 31.1797 37 24 37C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35C30.0751 35 35 30.0751 35 24C35 23.4477 35.4477 23 36 23Z" fill="#022C22"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 13C17.9249 13 13 17.9249 13 24C13 24.5523 12.5523 25 12 25C11.4477 25 11 24.5523 11 24C11 16.8203 16.8203 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z" fill="#022C22"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M32 23C32.5523 23 33 23.4477 33 24C33 28.9706 28.9706 33 24 33C23.4477 33 23 32.5523 23 32C23 31.4477 23.4477 31 24 31C27.866 31 31 27.866 31 24C31 23.4477 31.4477 23 32 23Z" fill="#022C22"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 17C20.134 17 17 20.134 17 24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24C15 19.0294 19.0294 15 24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17Z" fill="#022C22"></path>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Hukuki Rehberlik</h5>
                      <p className="mb-6">Bağımlılıkla ilişkili yasal sorunlarda profesyonel hukuki destek sağlıyoruz. Yasal haklarınız, yükümlülükleriniz ve seçenekleriniz konusunda ayrıntılı bilgilendirme yapıyoruz.</p>
                      <Link className="inline-block text-lg font-medium hover:text-teal-700" to="/contact">Daha Fazla</Link>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-4">
                  <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <path d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36Lnan nanL24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z" fill="#022C22"></path>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">12 Aylık Ücretsiz Takip</h5>
                      <p className="mb-6">İyileşme sürecinin sürekliliğini sağlamak için, tedavi sonrası 12 ay boyunca düzenli takip ve destek programı uyguluyoruz. Olası nüksleri önlemek için yanınızdayız.</p>
                      <Link className="inline-block text-lg font-medium hover:text-teal-700" to="/contact">Daha Fazla</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-24 text-center">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-16">
              Bağımlılıkla mücadelede teknoloji destekli bütüncül yaklaşımımızla iyileşme yolculuğunuzda yanınızdayız.
            </h1>
            <Link className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200" to="/contact">
              İletişime Geç
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <img className="block w-full" src="/fauna-assets/about/about-image2.png" alt="" />
            </div>
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <img className="block w-full" src="/fauna-assets/about/about-image3.png" alt="" />
            </div>
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <img className="block w-full" src="/fauna-assets/about/about-image4.png" alt="" />
            </div>
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <img className="block w-full" src="/fauna-assets/about/about-image2.png" alt="" />
            </div>
            <div className="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8">
              <img className="block w-full" src="/fauna-assets/about/about-image3.png" alt="" />
            </div>
            <div className="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8">
              <img className="block w-full" src="/fauna-assets/about/about-image4.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="font-heading text-6xl mb-6">Sık Sorulan Sorular</h1>
            <p className="text-gray-700">Yaygın sorularınızın cevaplarını burada bulabilirsiniz.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQItem
              question="Lunova nedir?"
              answer="Lunova, bağımlılıkla mücadelede bütüncül ve yenilikçi çözümler sunan öncü bir dijital platformdur. Uzman kadromuz ve teknoloji destekli yaklaşımımızla iyileşme yolculuğunuzda yanınızdayız."
            />
            <FAQItem
              question="Hangi hizmetleri sunuyorsunuz?"
              answer="Bireysel online psikoterapi, aile destek programları, hukuki rehberlik ve 12 aylık ücretsiz takip hizmetleri sunuyoruz. Tüm hizmetlerimiz uzman kadromuz tarafından kişiye özel olarak planlanmaktadır."
            />
            <FAQItem
              question="Online terapi nasıl çalışır?"
              answer="Online terapi, güvenli ve mahremiyet odaklı bir şekilde, evinizin konforunda profesyonel destek almanızı sağlar. Uzman psikolog ve terapistlerimiz size özel tedavi planı oluşturur."
            />
            <FAQItem
              question="12 aylık ücretsiz takip neyi kapsar?"
              answer="İyileşme sürecinin sürekliliğini sağlamak için tedavi sonrası 12 ay boyunca düzenli takip ve destek programı uyguluyoruz. Olası nüksleri önlemek ve kazanılan becerileri pekiştirmek için yanınızdayız."
            />
            <FAQItem
              question="Nasıl başvurabilirim?"
              answer="İletişim sayfamızdan veya telefon yoluyla bize ulaşabilirsiniz. İlk değerlendirme ücretsizdir ve kişiye özel tedavi planı oluşturulur."
            />
            <div className="sm:flex py-10 px-5 sm:px-10 bg-orange-50 rounded-2xl">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                  <path d="M13.676 15.5617C11.7951 17.8602 10.6666 20.7983 10.6666 24C10.6666 27.2017 11.7951 30.1398 13.6761 32.4383L18.9201 27.1943C18.3372 26.2694 18 25.174 18 24C18 22.8259 18.3372 21.7306 18.92 20.8057L13.676 15.5617Z" fill="#022C22"></path>
                  <path d="M15.5616 13.6761L20.8056 18.9201C21.7306 18.3372 22.8259 18 24 18C25.174 18 26.2694 18.3372 27.1943 18.9201L32.4383 13.6761C30.1398 11.7951 27.2017 10.6666 24 10.6666C20.7982 10.6666 17.8601 11.7951 15.5616 13.6761Z" fill="#022C22"></path>
                  <path d="M34.3239 15.5617L29.0799 20.8057C29.6628 21.7307 30 22.8259 30 24C30 25.174 29.6627 26.2693 29.0799 27.1943L34.3238 32.4383C36.2048 30.1398 37.3333 27.2017 37.3333 24C37.3333 20.7983 36.2048 17.8602 34.3239 15.5617Z" fill="#022C22"></path>
                  <path d="M32.4382 34.3239L27.1942 29.0799C26.2693 29.6628 25.174 30 24 30C22.8259 30 21.7307 29.6628 20.8057 29.0799L15.5617 34.3239C17.8602 36.2048 20.7983 37.3333 24 37.3333C27.2016 37.3333 30.1397 36.2048 32.4382 34.3239Z" fill="#022C22"></path>
                </svg>
              </div>
                             <div>
                 <h5 className="text-xl font-medium mb-4">Hâlâ sorularınız mı var?</h5>
                 <p className="text-gray-700">
                   <span>Yardım için lütfen </span>
                   <Link className="inline-block text-black font-medium underline" to="/contact">İletişim</Link>
                   <span> sayfamızı ziyaret edin veya destek hattımızı arayın. Bağımlılıkla mücadele yolculuğunuzda yanınızdayız.</span>
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <div className="max-w-lg mx-auto md:mx-0 overflow-hidden">
                <div className="flex -mx-4 transition-transform duration-500" style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}>
                  <img className="block flex-shrink-0 w-full px-4" src="/fauna-assets/testimonials/photo-lg.png" alt="" />
                  <img className="block flex-shrink-0 w-full px-4" src="/fauna-assets/testimonials/photo-lg.png" alt="" />
                  <img className="block flex-shrink-0 w-full px-4" src="/fauna-assets/testimonials/photo-lg.png" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="max-w-lg mx-auto md:mr-0 overflow-hidden">
                <div className="flex -mx-4 transition-transform duration-500" style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}>
                                     <div className="flex-shrink-0 px-4 w-full">
                     <h4 className="text-3xl lg:text-4xl font-medium mb-10">"Lunova sayesinde bağımlılıkla mücadelemde çok büyük bir ilerleme kaydettim. Uzman ekibi ve destekleyici yaklaşımları sayesinde iyileşme sürecimde hiç yalnız kalmadım."</h4>
                     <span className="block text-xl font-medium">Ayşe Yılmaz</span>
                     <span className="block mb-12 lg:mb-32 text-lg text-gray-700">Danışan</span>
                   </div>
                   <div className="flex-shrink-0 px-4 w-full">
                     <h4 className="text-3xl lg:text-4xl font-medium mb-10">"12 aylık takip programı gerçekten fark yarattı. İyileşme yolculuğumda süreklilik sağlandı ve her zaman desteklendiğimi hissettim."</h4>
                     <span className="block text-xl font-medium">Mehmet Demir</span>
                     <span className="block mb-12 lg:mb-32 text-lg text-gray-700">Danışan</span>
                   </div>
                   <div className="flex-shrink-0 px-4 w-full">
                     <h4 className="text-3xl lg:text-4xl font-medium mb-10">"Online terapi hizmeti sayesinde zaman ve mekan kısıtlaması olmadan profesyonel destek aldım. Lunova'nın teknolojik yaklaşımı gerçekten etkileyici."</h4>
                     <span className="block text-xl font-medium">Zeynep Kaya</span>
                     <span className="block mb-12 lg:mb-32 text-lg text-gray-700">Danışan</span>
                   </div>
                </div>
                <div>
                  <button
                    className="inline-block mr-4 text-gray-700 hover:text-lime-500"
                    onClick={() => setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount)}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.4 16H7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M16 24.4L7.59998 16L16 7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                  <button
                    className="inline-block text-gray-700 hover:text-lime-500"
                    onClick={() => setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1)}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.59998 16H24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M16 7.59998L24.4 16L16 24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
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
                           Bağımlılıkla Mücadelede Yanınızdayız
                         </h1>
                         <p className="text-lg text-white opacity-80">
                           Bağımlılıkla mücadele ve iyileşme süreçleri hakkında güncel bilgiler ve destek için bizimle iletişime geçin
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

export default Home;
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import FAQItem from '../components/FAQItem';
import { mockJobs } from '../data/mockJobs';
import TopBanner from '../components/TopBanner';

const Careers = () => {
  const departments = ['Topluluk', 'Destek', 'Teknoloji', 'İletişim', 'Hukuk'];

  const departmentLabels: Record<string, string> = {
    Topluluk: 'Topluluk',
    Destek: 'Destek',
    Teknoloji: 'Teknoloji',
    İletişim: 'İletişim & Farkındalık',
    Hukuk: 'Hukuki Bilgi',
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      <TopBanner />

      <Header />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        <img className="absolute bottom-0 left-0" src="/fauna-assets/about/lines.svg" alt="" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-8">Gönüllü Ol</h1>
            <p className="text-2xl text-black font-medium mb-10">
              Lunova, bağımlılıkla mücadele eden bireylerin ve ailelerin yanında durmak isteyen gönüllülerle büyüyor. Birlikte daha güçlüyüz.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Notice */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-amber-50 border-l-4 border-amber-400 rounded-2xl p-6">
            <p className="text-amber-800 font-medium">
              <strong>Bilgi:</strong> Lunova şu an gönüllülük esaslı bir platform olarak gelişimini sürdürmektedir. Ücretli veya freelance pozisyonlar henüz sunulmamaktadır. Aşağıdaki roller tamamen gönüllülük temelinde yürütülmektedir.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Philosophy */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6">Gönüllülük Felsefemiz</h2>
            <p className="text-lg text-gray-700">
              Lunova gönüllülüğü; bireylerin kendi deneyimlerini, uzmanlıklarını ve zamanlarını toplum yararına sunduğu anlamlı bir yolculuktur. Gönüllülerimiz yalnızca destek vermekle kalmaz; kendileri de bu süreçten beslenir.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 mb-4 bg-lime-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="#4d7c0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8v4l3 3" stroke="#4d7c0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Kendini Keşfetmek</h3>
                <p className="text-gray-600 text-sm">Gönüllülük, kendi sınırlarını, güçlü yönlerini ve değerlerini keşfetmek için eşsiz bir alan sunar.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Empati</h3>
                <p className="text-gray-600 text-sm">Bağımlılığın bireysel ve ailesel boyutlarını anlayan, yargılamadan dinleyen bir topluluk inşa ediyoruz.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 mb-4 bg-lime-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#4d7c0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="#4d7c0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#4d7c0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#4d7c0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Toplumsal Sorumluluk</h3>
                <p className="text-gray-600 text-sm">Her gönüllü, bağımlılıkla mücadelede toplumsal farkındalığın ve dayanışmanın somut bir parçası olur.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Önleyici Rol</h3>
                <p className="text-gray-600 text-sm">Gönüllüler, toplumda bağımlılığı önleyici farkındalık çalışmalarının en etkin elçileridir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading text-6xl mb-6">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-700">Gönüllülük hakkında merak ettiklerinizin cevaplarını burada bulabilirsiniz.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQItem
              question="Gönüllü olmak için belirli bir alanda eğitim almış olmam gerekiyor mu?"
              answer="Hayır. Her pozisyon için farklı beklentiler olsa da, temel şart empati ve toplumsal sorumluluk duygusudur. İlgili alanda deneyim artı olarak değerlendirilir."
            />
            <FAQItem
              question="Haftada ne kadar zaman ayırmam gerekiyor?"
              answer="Role göre değişmekle birlikte, haftada 2–4 saat çoğu gönüllü rol için yeterlidir. Özellikle destek rolleri için daha düzenli katılım beklenmektedir."
            />
            <FAQItem
              question="Gönüllülük tamamen online mı yürütülüyor?"
              answer="Evet. Tüm gönüllü aktiviteleri online platformlarda (Zoom, e-posta, dijital araçlar) yürütülmektedir. Türkiye'nin herhangi bir yerinden katılabilirsin."
            />
            <FAQItem
              question="Birden fazla rol için başvurabilir miyim?"
              answer="Evet, birden fazla role ilgin varsa bunu başvurunda belirtebilirsin. Ekibimiz sana en uygun rolü belirlemek için bir görüşme yapacaktır."
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
                  <span>Gönüllülük hakkında daha fazla bilgi almak için </span>
                  <Link className="inline-block text-black font-medium underline" to="/contact">İletişim</Link>
                  <span> sayfamızı ziyaret edin veya bize e-posta gönderin: merhaba@lunova.tr</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etik İlkeler */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6 text-center">Etik İlkeler</h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Lunova gönüllüleri bu ilkeleri benimseyerek görev yapar.
            </p>
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <span className="flex-shrink-0 w-8 h-8 mr-4 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Gizlilik ve Mahremiyet</h4>
                  <p className="text-gray-600">Paylaşılan kişisel bilgiler, yaşantılar ve hikayeler kesinlikle gizli tutulur. Gönüllüler, destekledikleri bireylerin kimlik ve hikayelerini üçüncü şahıslarla paylaşamaz.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <span className="flex-shrink-0 w-8 h-8 mr-4 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Sınırlara Saygı</h4>
                  <p className="text-gray-600">Gönüllüler, kendi uzmanlık sınırlarının farkındadır ve bu sınırları aşan durumlarda profesyonellere yönlendirme yapar. Terapist rolü üstlenilmez.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <span className="flex-shrink-0 w-8 h-8 mr-4 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Yargılamayan Yaklaşım</h4>
                  <p className="text-gray-600">Bağımlılık; zayıflık ya da ahlaki çöküş değil, tedavi edilebilir bir sağlık sorunudur. Tüm bireyler onurlarını koruyarak desteklenir.</p>
                </div>
              </div>
              <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <span className="flex-shrink-0 w-8 h-8 mr-4 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Kendi Bakımını Önceliklendirme</h4>
                  <p className="text-gray-600">Duygusal açıdan tükenmiş bir gönüllü sağlıklı destek sunamaz. Kendi iyi oluşunu korumak, başkalarına destek sunmanın temelidir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Listings */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h2 className="font-heading text-4xl sm:text-5xl tracking-sm mb-6">Açık Gönüllü Rolleri</h2>
              <p className="text-lg text-gray-700">Aşağıdaki alanlarda gönüllü katkıda bulunabilirsin. Tüm roller online, Türkiye genelinde geçerlidir.</p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="block" src="/fauna-assets/career/team-members-photos.png" alt="" />
            </div>
          </div>

          {departments.map(dept => {
            const jobs = mockJobs.filter(job => job.department === dept);
            if (jobs.length === 0) return null;
            return (
              <div key={dept} className="mb-16">
                <span className="block font-medium text-gray-600 mb-6">{departmentLabels[dept]}</span>
                {jobs.map(job => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    location={job.location}
                    type={job.type}
                    department={job.department}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* Gönüllülere Olanaklar */}
      <section className="py-12 lg:py-24 bg-lime-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6 text-center">Gönüllülere Sunulanlar</h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Lunova gönüllülerine bireysel ve mesleki gelişimlerine katkı sağlayan destekler sunulmaktadır.
            </p>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 px-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 mr-4 bg-teal-900 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2L12.09 7.26L17.66 7.27L13.37 10.72L14.9 16.11L10 13L5.1 16.11L6.63 10.72L2.34 7.27L7.91 7.26L10 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Uzman Süpervizyon</h4>
                    <p className="text-gray-600 text-sm">Düzenli aralıklarla alanında uzman profesyoneller eşliğinde süpervizyon seanslarına katılım imkânı.</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 mr-4 bg-teal-900 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12V8M11 10H7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Dijital Kaynak Kütüphanesi</h4>
                    <p className="text-gray-600 text-sm">Bağımlılık, ruh sağlığı ve toplum hizmeti alanlarında özenle derlenmiş kaynaklara erişim.</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 mr-4 bg-teal-900 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Gönüllülük Belgesi</h4>
                    <p className="text-gray-600 text-sm">Aktif gönüllüler için katkılarını belgeleyen resmi katılım belgesi düzenlenmektedir.</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 px-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 mr-4 bg-teal-900 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Akran Öğrenme Ağı</h4>
                    <p className="text-gray-600 text-sm">Farklı alanlardaki gönüllülerle bilgi ve deneyim paylaşımına dayalı yatay bir öğrenme ekosistemi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                          Gönüllü Olmaya Hazır mısın?
                        </h1>
                        <p className="text-lg text-white opacity-80">
                          Başvurmak veya daha fazla bilgi almak için bizimle iletişime geç: <span className="font-semibold opacity-100">merhaba@lunova.tr</span>
                        </p>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 lg:text-right">
                      <Link className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" to="/contact">
                        Başvur
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

export default Careers;

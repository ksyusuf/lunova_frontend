import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import { mockJobs } from '../data/mockJobs';

const Careers = () => {
  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Top Banner */}
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center text-white">
          Bağımlılıkla mücadelede yanınızdayız. İyileşme yolculuğunuzda destek için <a href="#!" className="underline font-semibold">bize ulaşın</a>.
        </p>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        <img className="absolute bottom-0 left-0" src="/fauna-assets/about/lines.svg" alt="" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-8">Kariyer Fırsatları</h1>
            <p className="text-2xl text-black font-medium mb-10">
              Bağımlılıkla mücadelede fark yaratmak isteyen profesyoneller arıyoruz. Lunova ekibine katılın ve bireylerin iyileşme yolculuğunda anlamlı bir fark yaratın.
            </p>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-6">Ekibimize Katılın</h1>
              <p className="text-lg text-gray-700">Bağımlılıkla mücadelede fark yaratmak isteyen profesyoneller arıyoruz.</p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="block" src="/fauna-assets/career/team-members-photos.png" alt="" />
            </div>
          </div>
          
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
              <h3 className="text-3xl font-medium">Açık Pozisyonlar</h3>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="sm:flex">
                <div className="relative inline-block w-full max-w-xs mb-4 sm:mb-0 sm:mr-4 bg-white rounded-full">
                  <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.3999 8.2L9.9999 11.8L13.5999 8.2" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <select className="w-full px-4 py-3 font-medium border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative" name="" id="">
                    <option value="all">Tüm Bölümler</option>
                    <option value="psikoloji">Psikoloji</option>
                    <option value="pazarlama">Pazarlama</option>
                  </select>
                </div>
                <div className="relative inline-block w-full max-w-xs bg-white rounded-full">
                  <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.3999 8.2L9.9999 11.8L13.5999 8.2" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <select className="w-full px-4 py-3 font-medium border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative" name="" id="">
                    <option value="all">Tüm Lokasyonlar</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="izmir">İzmir</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings by Department */}
          <div className="mb-16">
            <span className="block font-medium text-gray-600 mb-6">Psikoloji</span>
            {mockJobs
              .filter(job => job.department === 'Psikoloji')
              .map(job => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  location={job.location}
                  type={job.type}
                  department={job.department}
                />
              ))}
          </div>

          <div className="mb-16">
            <span className="block font-medium text-gray-600 mb-6">Pazarlama</span>
            {mockJobs
              .filter(job => job.department === 'Pazarlama')
              .map(job => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  location={job.location}
                  type={job.type}
                  department={job.department}
                />
              ))}
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
                          Ekibimizin Bir Parçası Olun
                        </h1>
                        <p className="text-lg text-white opacity-80">
                          Bağımlılıkla mücadelede fark yaratmak isteyen profesyoneller arıyoruz. Hemen başvurun.
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

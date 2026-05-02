import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Handle login logic here
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      <TopBanner />

      <Header />

      {/* Login Form Section */}
      <section className="relative pt-52 xs:pt-40 pb-16 md:pb-24 lg:pb-52 bg-orange-50 overflow-hidden">
        <Link className="absolute top-0 left-0 ml-5 mt-12 inline-block" to="/">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#BEF264"></path>
            <rect x="19.1664" y="6.6665" width="1.66667" height="10" rx="0.833333" fill="#022C22"></rect>
            <rect x="19.1664" y="23.3335" width="1.66667" height="10" rx="0.833333" fill="#022C22"></rect>
            <rect x="28.8392" y="9.98291" width="1.66667" height="10" rx="0.833333" transform="rotate(45 28.8392 9.98291)" fill="#022C22"></rect>
            <rect x="17.0537" y="21.7678" width="1.66667" height="10" rx="0.833333" transform="rotate(45 17.0537 21.7678)" fill="#022C22"></rect>
            <rect x="23.3335" y="20.8333" width="1.66667" height="10" rx="0.833333" transform="rotate(-90 23.3335 20.8333)" fill="#022C22"></rect>
            <rect x="6.66638" y="20.8333" width="1.66667" height="10" rx="0.833333" transform="rotate(-90 6.66638 20.8333)" fill="#022C22"></rect>
            <rect x="21.7677" y="22.9463" width="1.66667" height="10" rx="0.833333" transform="rotate(-45 21.7677 22.9463)" fill="#022C22"></rect>
            <rect x="9.98267" y="11.1611" width="1.66667" height="10" rx="0.833333" transform="rotate(-45 9.98267 11.1611)" fill="#022C22"></rect>
          </svg>
        </Link>
        <p className="absolute top-0 right-0 mt-32 xs:mt-12 mr-5">
          <span>Hesabınız yok mu?</span>{' '}
          <Link className="inline-block font-medium underline hover:text-lime-600" to="/register">
            Hemen kayıt olun
          </Link>
        </p>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              <h3 className="text-4xl text-center font-medium mb-10">Giriş Yap</h3>
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
              <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="password">
                Şifre
              </label>
              <div className="relative mb-6">
                <input
                  className="relative w-full px-4 py-3 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 10C1.75 10 4.75 4 10 4C15.25 4 18.25 10 18.25 10C18.25 10 15.25 16 10 16C4.75 16 1.75 10 1.75 10Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M10 12.25C11.2426 12.25 12.25 11.2426 12.25 10C12.25 8.75736 11.2426 7.75 10 7.75C8.75736 7.75 7.75 8.75736 7.75 10C7.75 11.2426 8.75736 12.25 10 12.25Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
              <div className="text-right mb-10">
                <Link className="inline-block text-sm underline font-medium" to="#!">
                  Şifremi Unuttum
                </Link>
              </div>
              <button
                type="submit"
                className="inline-flex w-full py-3 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
              >
                Giriş Yap
              </button>
              <span className="block text-center py-4 mx-auto text-gray-700">veya</span>
              <button
                type="button"
                className="inline-flex w-full py-3 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-black rounded-full transition duration-200"
              >
                <img src="/fauna-assets/sign-in/google-icon.svg" alt="" />
                <span className="ml-4">Google ile Giriş Yap</span>
              </button>
            </form>
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
                          Bağımlılık mücadelenizde destek için bizimle iletişime geçin
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

export default Login;
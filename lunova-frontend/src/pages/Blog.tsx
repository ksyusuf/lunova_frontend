import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { mockBlogPosts } from '../data/mockBlogPosts';

const Blog = () => {
  const [showContent, setShowContent] = useState(false);

  // Filter featured and regular posts
  const featuredPost = mockBlogPosts.find(post => post.featured);
  const regularPosts = mockBlogPosts.filter(post => !post.featured);

  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Top Banner */}
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center">
          Bağımlılıkla mücadelede yanınızdayız. İyileşme yolculuğunuzda destek için <a href="#!" className="underline font-semibold">bize ulaşın</a>.
        </p>
      </div>

      <Header />

      {/* Blog Section */}
      <section className="relative py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-20 -mx-4">
            <div className="w-full sm:w-1/2 px-4 mb-10 sm:mb-0">
              <h1 className="font-heading text-5xl sm:text-6xl">Blog</h1>
              <p className="text-xl text-gray-700 mt-4">
                Bağımlılık, iyileşme ve destek konularında uzman görüşleri
              </p>
            </div>
            <div className="w-full sm:w-1/2 px-4 sm:text-right">
              {regularPosts.length > 3 && (
                <button
                  className={`inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-300 ${showContent ? 'hidden' : ''}`}
                  onClick={() => setShowContent(true)}
                >
                  <span className="mr-2">Tümünü Gör</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {/* Featured Post */}
            {featuredPost && (
              <div className="w-full lg:w-1/2 xl:w-7/12 px-4 mb-8 lg:mb-0">
                <BlogCard post={featuredPost} variant="featured" />
              </div>
            )}
            {/* Regular Posts */}
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="max-w-lg">
                {regularPosts.slice(0, 3).map((post) => (
                  <BlogCard key={post.id} post={post} variant="small" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Posts - Shown when "See all" is clicked */}
          <div className={`flex flex-wrap mt-16 -mx-4 ${showContent ? '' : 'hidden'}`}>
            {regularPosts.slice(3).map((post, index) => (
              <div key={post.id} className={`w-full ${index % 2 === 0 ? 'lg:w-1/2' : 'lg:w-1/2'} px-4 mb-8`}>
                <div className="max-w-lg mx-auto">
                  <BlogCard post={post} variant="small" />
                </div>
              </div>
            ))}
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
                          Bağımlılık mücadelenizde destek ve güncel bilgiler için bizimle iletişime geçin
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

export default Blog;
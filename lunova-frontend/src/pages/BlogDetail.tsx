import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockBlogPosts } from '../data/mockBlogPosts';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = mockBlogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="antialiased bg-body text-body font-body">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Gönderisi Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız blog gönderisi mevcut değil.</p>
          <Link
            to="/blog"
            className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
          >
            Blog'a Dön
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="antialiased bg-body text-body font-body">
      {/* Top Banner */}
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center">
          Bağımlılıkla mücadelede yanınızdayız. İyileşme yolculuğunuzda destek için <a href="#!" className="underline font-semibold">bize ulaşın</a>.
        </p>
      </div>

      <Header />

      {/* Blog Detail Hero */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-teal-900 mb-8 transition duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12.5 4.75L7.25 10L12.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              Blog'lara Geri Dön
            </Link>

            {/* Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6 text-gray-900">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-700 mb-8">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={post.author.avatar}
                  alt={post.author.name}
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-600">{post.publishedDate}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10 5.5V10L13 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <img
              className="w-full h-auto rounded-2xl mb-12 object-cover"
              src={post.image}
              alt={post.title}
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              {/* Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {post.content}
                </p>
                
                {/* Additional content paragraphs - you can expand this based on your needs */}
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Bağımlılıkla mücadele ederken, bireylerin yanında olmak ve onlara destek sağlamak çok önemlidir. 
                  Lunova olarak, her adımda sizlerin yanındayız ve iyileşme yolculuğunuzda profesyonel destek sunuyoruz.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Bağımlılık, bir tercih değil, bir hastalıktır. Bu nedenle profesyonel yardım almak ve 
                  doğru tedavi sürecine başlamak son derece önemlidir. Bütüncül yaklaşımımız sayesinde, 
                  psikolojik, sosyal ve hukuki destekleri bir araya getiriyoruz.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-12 pt-8 border-t">
                <span className="text-sm font-semibold text-gray-900">Etiketler:</span>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-lime-100 text-teal-900 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Section */}
              <div className="pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Bu gönderiyi paylaş</h3>
                <div className="flex gap-4">
                  <a href="#!" className="inline-flex items-center justify-center w-12 h-12 text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-600 rounded-full transition duration-200">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_230_4832)">
                        <path d="M11.5481 19.9999V10.8776H14.6088L15.068 7.32147H11.5481V5.05138C11.5481 4.02211 11.8327 3.32067 13.3104 3.32067L15.1919 3.3199V0.139138C14.8665 0.0968538 13.7496 -9.15527e-05 12.4496 -9.15527e-05C9.734 -9.15527e-05 7.87654 1.65687 7.87654 4.69918V7.32147H4.80652V10.8776H7.87654V19.9999H11.5481Z" fill="currentColor"></path>
                      </g>
                    </svg>
                  </a>
                  <a href="#!" className="inline-flex items-center justify-center w-12 h-12 text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-400 rounded-full transition duration-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2Z" fill="currentColor"></path>
                    </svg>
                  </a>
                  <a href="#!" className="inline-flex items-center justify-center w-12 h-12 text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-700 rounded-full transition duration-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Related Posts or CTA */}
            <div className="mt-12 text-center">
              <Link
                to="/blog"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border-2 border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
              >
                Blog'lara Geri Dön
              </Link>
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

export default BlogDetail;

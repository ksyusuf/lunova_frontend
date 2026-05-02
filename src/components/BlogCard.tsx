import { Link } from 'react-router-dom';
import type { BlogPost } from '../data/mockBlogPosts';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'featured' | 'small';
}

const BlogCard = ({ post, variant = 'small' }: BlogCardProps) => {
  if (variant === 'featured') {
    return (
      <div>
        <img className="block w-full mb-8" src={post.image} alt={post.title} />
        <div className="mb-6">
          {post.tags.map((tag, index) => (
            <Link
              key={index}
              className="inline-block mr-2 px-2 text-sm font-medium hover:bg-gray-50 border rounded-full"
              to="#!"
            >
              {tag}
            </Link>
          ))}
        </div>
        <Link className="block group max-w-2xl" to={`/blog/${post.id}`}>
          <h3 className="text-3xl font-medium group-hover:text-teal-600 transition duration-200 mb-4">
            {post.title}
          </h3>
          <p className="text-lg text-gray-700 mb-6">{post.excerpt}</p>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src={post.author.avatar} alt={post.author.name} />
            <div className="flex items-center ml-4">
              <span className="text-sm font-medium">{post.author.name}</span>
              <span className="mx-2 sm:mx-4">
                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                </svg>
              </span>
              <span className="text-sm font-medium">{post.readTime}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <Link className="flex flex-wrap sm:flex-nowrap group mb-8 items-center" to={`/blog/${post.id}`}>
      <img className="block" src={post.image} alt={post.title} />
      <div className="mt-6 sm:mt-0 sm:ml-8">
        <h3 className="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">
          {post.title}
        </h3>
        <div className="flex items-center">
          <img className="w-8 h-8 rounded-full" src={post.author.avatar} alt={post.author.name} />
          <div className="flex items-center ml-4">
            <span className="text-sm font-medium">{post.author.name}</span>
            <span className="mx-2 sm:mx-4">
              <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
              </svg>
            </span>
            <span className="text-sm font-medium">{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
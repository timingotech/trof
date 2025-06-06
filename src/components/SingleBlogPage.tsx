// SingleBlogPage.js
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, User, Tag } from 'lucide-react';
import { getBlogById, getAllBlogs } from './BlogData';

const SingleBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(true);
type Blog = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
};
const [blog, setBlog] = useState<Blog | null>(null);
const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    // Get the specific blog
const foundBlog = getBlogById(id!);
    
    if (!foundBlog) {
      navigate('/blogs'); // Redirect if blog not found
      return;
    }

    setBlog(foundBlog);

    // Get related blogs (same category, excluding current blog)
    const allBlogs = getAllBlogs();
    const related = allBlogs
      .filter(b => b.category === foundBlog.category && b.id !== foundBlog.id)
      .slice(0, 3);
    
    setRelatedBlogs(related);
    setLoading(false);

    // Scroll to top when blog changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, navigate]);

 const handleShare = async () => {
  if (!blog) return; // ✅ Prevent accessing properties of null

  if (navigator.share) {
    try {
      await navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  } else {
    // Fallback: copy URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  }
};

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog you're looking for doesn't exist.</p>
          <Link
            to="/blogs"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-30">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/blogs"
            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Blogs
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>By {blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Share Button */}
            <div className="mb-8">
              <button
                onClick={handleShare}
                className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </button>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {/* Excerpt */}
              <div className="text-xl text-gray-700 mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-red-600">
                {blog.excerpt}
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-gray-600 font-medium">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Share */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">Found this article helpful? Share it with others!</p>
                <button
                  onClick={handleShare}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share This Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-sky-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <div
                    key={relatedBlog.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {relatedBlog.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{new Date(relatedBlog.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{relatedBlog.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedBlog.excerpt}
                      </p>
                      
                      <Link
                        to={`/blog/${relatedBlog.id}`}
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of the Change
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Your support helps us create more impact stories like this one. Join us in transforming lives across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Donate Now
            </Link> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
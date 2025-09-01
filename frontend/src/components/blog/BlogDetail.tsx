import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../../utils/blogsData";
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../utils/animation';
import Button from '../ui/Button';

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-800 dark:to-blue-900">
        <div className="max-w-4xl mx-auto p-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Blog Not Found</h1>
          <Button
            onClick={() => navigate('/blogs')}
            customvariant="primary"
          >
            Back to Blogs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-800 dark:to-blue-900">
      <motion.div
        className="max-w-4xl mx-auto px-4 md:px-8 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Back Button */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={() => navigate('/blogs')}
            customvariant="primary"
            className="mb-6"
          >
            Back to Blogs
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-8 mt-5">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{blog.date}</span>
                <span className="mx-2">•</span>
                <span>{blog.readTime}</span>
                <span className="mx-2">•</span>
                <span className="text-sky-600 dark:text-sky-500">{blog.category}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {blog.title}
              </h1>

              <div className="flex items-center mb-6">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{blog.author.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{blog.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Table of Contents */}
        {blog.content && (
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Table of Contents</h2>
              <ul className="space-y-2 list-disc px-8">
                {blog.content.map((section, idx) => (
                  <li key={idx} className="text-white"> {section.heading}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Blog Content */}
        <motion.div variants={itemVariants}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            {blog.content.map((section, idx) => (
              <motion.div
                key={idx}
                id={`section-${idx}`}
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {section.heading}
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div variants={itemVariants} className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogs
              .filter(b => b.id !== blog.id && b.category === blog.category)
              .slice(0, 2)
              .map(relatedBlog => (
                <div
                  key={relatedBlog.id}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => navigate(`/blogs/${relatedBlog.id}`)}
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {relatedBlog.excerpt}
                  </p>
                </div>
              ))}
            {blogs.filter(b => b.id !== blog.id && b.category === blog.category).length === 0 && (
              <p className="text-gray-600 dark:text-gray-400">
                No related blogs available at this time.
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;

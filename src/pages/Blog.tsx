import React from 'react';
import BlogCard from "../components/blog/BlogCard";
import { blogs } from "../utils/blogsData";
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animation';

const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <motion.section
        className="px-4 md:px-12 lg:px-24 pt-20 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 mt-10">
            Latest Insights & Articles
          </h1>
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our latest thoughts on technology, innovation, and industry trends
          </p>
        </motion.div>
      </motion.section>

      {/* Blog Grid Section */}
      <motion.section
        className="px-4 md:px-12 lg:px-24 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Blogs;
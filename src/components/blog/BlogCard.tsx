import type { Blog } from '../../types'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const BlogCard = ({ blog }: { blog: Blog }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sky-600 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span>{blog.date}</span>
          <span className="mx-2">•</span>
          <span>{blog.readTime}</span>
        </div>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        <Button
          onClick={() => navigate(`/blogs/${blog.id}`)}
          customvariant="secondary"
          size='small'
          className="mb-6"
        >
          Read More
        </Button>
      </div>
    </motion.div>
  )
}

export default BlogCard

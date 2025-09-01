import { motion } from 'framer-motion';
import { testimonials } from '../../utils/testimonials';

const Testimonials = () => (
  <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6 md:px-16 text-gray-900 dark:text-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold font-heading mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="italic mb-4 text-gray-700 dark:text-gray-300">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

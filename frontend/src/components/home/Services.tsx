import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HOME_SERVICES } from '../../utils/constants';
import Button from '../ui/Button';

const Services = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/services');
  };

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3 font-heading">Our Services</h2>
        <p className="mb-10 text-center mx-5 px-5 lg:mx-10 lg:px-10 text-gray-600 text-center dark:text-gray-300">
          <span className="text-sky-600">Comcares</span> specializes in creating exceptional websites and mobile applications. We work across diverse domains, turning our clients’ ideas into reality.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-1 flex justify-center text-sky-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            customvariant="primary"
            size="large"
            onClick={handleExploreClick}
          >
            Explore More Services
          </Button>
        </div>
      </div>
    </section>
  )
};

export default Services;

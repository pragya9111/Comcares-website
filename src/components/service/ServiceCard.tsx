import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';
import { SERVICES_DATA } from '../../utils/servicesData';

const ServiceCard: React.FC = () => {
  return (
    <div className="mx-10 space-y-20">
      {SERVICES_DATA.map((service, index) => (
        <motion.div
          key={index}
          className={` flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-6 rounded-3xl 
            bg-white dark:bg-gray-900 shadow-lg dark:shadow-slate-900 p-6 md:p-10 transition-colors duration-500
            ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn("left")}
        >
          {/* Text Section */}
          <motion.div
            className="flex-1"
            variants={fadeIn(index % 2 === 0 ? "left" : "right")}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600 dark:text-sky-400 relative">
              {service.title}
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-sky-400 rounded"></span>
            </h3>
            <p className="text-base md:text-md text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>

          {/* Illustration Section */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            variants={fadeIn(index % 2 === 0 ? "right" : "left")}
          >
            <motion.img
              src={service.img}
              alt={service.title}
              className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[380px] rounded-2xl drop-shadow-xl object-contain bg-gray-100 dark:bg-gray-800 p-3"
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCard;
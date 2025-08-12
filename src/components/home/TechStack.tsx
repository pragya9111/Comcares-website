import { motion, type Variants } from "framer-motion";
import { TECH_STACKS } from "../../utils/constants";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const TechStack = () => (
  <section className="py-16 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-900 dark:to-blue-900">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-slate-900 dark:text-white">
      Technologies we work with
    </h2>
    <p className="mb-10 text-gray-600 text-center dark:text-gray-300">
      We use modern technologies to build high-performance solutions.
    </p>

    <motion.div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {TECH_STACKS.map(({ name, logo }) => (
        <motion.div
          key={name}
          variants={itemVariants}
          whileHover={{
            scale: 1.12,
          }}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div
            className="w-16 h-16 md:w-35 md:h-30 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:scale-105 shadow-lg dark:shadow-slate-900 bg-gray-50 dark:bg-gray-800"
          >
            <img
              src={logo}
              alt={name}
              className="w-10 h-10 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <span className="mt-3 text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 text-center">
            {name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default TechStack;


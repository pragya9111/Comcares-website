import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { projects } from "../../utils/portfolioData";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

const FloatingParticle = ({
  className,
  style,
  animateProps,
}: {
  className?: string;
  style?: React.CSSProperties;
  animateProps?: React.ComponentProps<typeof motion.div>['animate'];
}) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0.7, scale: 1 }}
    animate={animateProps}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

const PortfolioGrid: React.FC = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            variants={cardVariants}
            whileHover={{
              rotateX: -8,
              rotateY: 8,
              scale: 1.05,
              boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 15 }}
            style={{ perspective: "1000px" }}
            className="relative group"
          >
            <FloatingParticle
              className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-full blur-md z-10 opacity-60"
              animateProps={{ y: [0, -12, 0], x: [0, 8, 0], scale: [1, 1.2, 1] }}
            />
            <FloatingParticle
              className="absolute bottom-8 right-8 w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-md z-20 opacity-60"
              animateProps={{
                y: [0, 16, 0], x: [0, -10, 0], scale: [1, 1.15, 1],
                transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
              }}
            />
            <FloatingParticle
              className="absolute top-1/2 left-2 w-10 h-10 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full blur-md opacity-60"
              animateProps={{
                y: [0, -8, 0], scale: [1, 1.1, 1],
                transition: { duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
              }}
            />

            {/* Card wrapper */}
            <div className="rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[2px] 
                       shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden h-full">
                <Link to={`/portfolio/${p.id}`} className="block h-full">
                  {/* Image with mockup feel */}
                  <div className="relative flex justify-center items-center p-6">
                    <motion.img
                      src={p.images}
                      alt={p.title}
                      whileHover={{ rotate: 2, scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-2xl w-full h-80 object-cover shadow-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-8">
                    <span className="uppercase tracking-wide text-xs font-semibold 
                                   text-pink-600 dark:text-pink-400">
                      {p.industry || "Web App"}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfolioGrid;

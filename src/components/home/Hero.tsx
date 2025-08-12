import { motion } from "framer-motion";
import { Button } from "@mui/material";
import heroImage from "../../assets/hero-bg3.png";
import { containerVariants, itemVariants } from "../../utils/animation";

const Hero = () => {
  return (
    <motion.section
      className="min-h-screen flex items-center pt-30 px-6 pb-15 md:px-16 bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-gray-900 dark:to-blue-900 transition-colors duration-500"
    >
      <motion.div
        className="max-w-8xl h-full mx-auto w-full grid md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 mt-10 text-slate-900 dark:text-white transition-colors duration-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Digital Innovation for Modern Businesses
          </motion.h1>
          <motion.p
            className="text-md md:text-lg max-w-4xl mx-auto leading-relaxed mb-8 text-gray-700 dark:text-gray-300 transition-colors duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Comcares Technologies delivers next-generation web development, mobile app solutions, and BPO services to help your business thrive in a digital-first world. Our expert team combines creativity, technology, and strategy to accelerate your growth and streamline your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#14b8a6",
                color: "#fff",
                "&:hover": { bgcolor: "#0d9488" },
                boxShadow: "0 4px 24px 0 rgba(20,184,166,0.15)",
                transition: "background 0.3s",
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-[-50px]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="overflow-hidden transition-colors duration-500 p-4"
            animate={{ y: [0, -15, 0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={heroImage}
              alt="Tech Illustration"
              className="w-full max-w-md object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

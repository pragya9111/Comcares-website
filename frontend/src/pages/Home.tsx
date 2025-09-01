import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import TechStack from '../components/home/TechStack';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white font-body">
      <Hero />
      <Services />
      <TechStack />
      <Testimonials />
    </main>
  );
};

export default Home;

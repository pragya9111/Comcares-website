// Portfolio.tsx
import React from "react";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";

const Portfolio: React.FC = () => {
  return (
    <section className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-900 dark:to-blue-900 py-20 px-4 md:px-12 lg:px-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 text-center pt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-slate-900 dark:text-white">
            Our Portfolio
          </h2>
          <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our diverse portfolio of web, mobile, and digital solutions.
            Each project showcases our commitment to innovation, quality, and client
            success.
          </p>
        </div>

        {/* Portfolio Grid */}
        <PortfolioGrid />
      </div>
    </section>
  );
};

export default Portfolio;

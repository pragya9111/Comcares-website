import React from "react";
import ServiceCard from "../components/service/ServiceCard";
import SectionHero from "../components/service/SectionHero";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 
    dark:from-slate-950 dark:via-gray-800 dark:to-blue-900 pb-10">
      {/* Hero Section */}
      <SectionHero />

      {/* Service Blocks */}
      <ServiceCard />
    </div>
  );
}

export default Services;

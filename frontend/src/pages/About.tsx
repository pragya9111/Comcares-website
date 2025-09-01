import React from 'react';
import VisionMissionValues from '../components/about/VisionMissionValues';
import OurStory from '../components/about/OurStory';
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import CallToAction from '../components/about/CallToAction';

const AboutUs: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <AboutHero />

      {/* Stats Section */}
      <AboutStats />

      {/* Vision, Mission, Values */}
      <VisionMissionValues />

      {/* Company Story Section */}
      <OurStory />

      {/* Call to Action */}
      <CallToAction />
    </div >
  );
};

export default AboutUs;
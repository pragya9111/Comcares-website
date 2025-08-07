import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import contact from "../assets/contact.png";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      {/* Header Section */}
      <header className="w-full px-4 pt-20 pb-12 md:px-12 lg:px-24">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 mt-10">
            Let's contact us
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            and talk about your idea
          </p>
        </div>
      </header>

      <main className="w-full px-4 md:px-12 lg:px-24 h-full pb-10">
        {/* Contact Info Grid */}
        <ContactInfo />

        {/* Contact Form Section - Full Width */}
        <section className="max-w-8xl rounded-2xl bg-gray-100 dark:bg-gray-900 shadow-2xl p-8 md:p-12 mt-12 h-full">
          <div className="px-4 md:px-8 lg:px-10">
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12 text-slate-900 dark:text-white">
              Have a project? Contact me to collaborate
            </h2>

            {/* Form Container Box */}
            <div className="max-w-full mx-auto">
              {/* 2-Column Layout: Image + Form */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Image */}
                <div className="flex justify-center lg:top-8">
                  <div className="w-full max-w-md h-full">
                    <img
                      src={contact}
                      alt="Contact Us Illustration - Professional team collaboration"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="w-full h-full">
                  <ContactForm className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
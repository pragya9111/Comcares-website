import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import contact from "../assets/contact.png";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 text-white">
      {/* Header Section */}
      <header className="w-full px-4 py-16 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's contact us
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            and talk about your idea
          </p>
        </div>

        {/* Contact Info Grid */}
        <ContactInfo />

        {/* Contact Form Section - Full Width */}
        <section className="max-w-8xl rounded-2xl bg-gray-900 shadow-2xl p-8 md:p-12">
          <div className="px-4 md:px-12 lg:px-24">
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12 text-white">
              Have a project? Contact me to collaborate
            </h2>

            {/* Form Container Box */}
            <div className="max-w-full mx-auto">
              {/* 2-Column Layout: Image + Form */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Image */}
                <div className="flex justify-center lg:sticky lg:top-8">
                  <div className="w-full max-w-md">
                    <img
                      src={contact}
                      alt="Contact Us Illustration - Professional team collaboration"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="w-full">
                  <ContactForm className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default ContactUs;

import React from 'react';
import { CONTACT_INFO } from '../../utils/constants';

const ContactInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-16">
      {CONTACT_INFO.map((contact, index) => {
        const IconComponent = contact.icon;
        return (
          <div key={index} className="flex flex-col items-center group">
            <div
              className="text-white text-4xl mb-4 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <IconComponent />
            </div>
            <a
              href={contact.href}
              className="font-semibold text-lg hover:text-gray-300 transition-colors duration-200"
              aria-label={`${contact.subtitle}: ${contact.title}`}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {contact.title}
            </a>
            {contact.subtitle !== contact.title && (
              <p className="text-sm text-gray-400 mt-1">{contact.subtitle}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;

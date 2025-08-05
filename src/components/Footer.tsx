import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/comcares-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-transparent dark:from-transparent dark:via-blue-900/10 dark:to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative pt-16 pb-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="Comcares Logo"
                  className="h-10 md:h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <p className="text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
                Empowering businesses through innovative technology solutions, comprehensive BPO services, and cutting-edge digital transformation strategies.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>contact@comcares.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <FiPhone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <FiMapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>418, Onam Palaza, AB Road, Indore, 452001, MP, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About Us', to: '/about' },
                  { label: 'Our Services', to: '/services' },
                  { label: 'Products', to: '/products' },
                  { label: 'Portfolio', to: '/portfolio' },
                  { label: 'Contact Us', to: '/contactus' }
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                    >
                      <FiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Services</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Web Development', to: '/services/web-dev' },
                  { label: 'Mobile Apps', to: '/services/mobile-apps' },
                  { label: 'UI/UX Design', to: '/services/ui-ux' },
                  { label: 'Digital Marketing', to: '/services/marketing' },
                  { label: 'BPO Services', to: '/services/bpo' }
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="group flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                    >
                      <FiArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Bottom Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Social Icons */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-600 dark:text-gray-300 font-medium">Follow Us:</span>
                <div className="flex space-x-4">
                  {[
                    { icon: FaFacebookF, href: '#', label: 'Facebook' },
                    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
                    { icon: FaTwitter, href: '#', label: 'Twitter' },
                    { icon: FaInstagram, href: '#', label: 'Instagram' },
                    { icon: FaGithub, href: '#', label: 'GitHub' }
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                {new Date().getFullYear()} Comcares Technologies. All rights reserved. Built with for innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

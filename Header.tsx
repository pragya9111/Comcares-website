import { Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Dropdown from './Dropdown';
import logo from '../assets/comcares-logo.png';
import { FiLayers, FiGrid, FiMonitor, FiBox, FiCpu } from 'react-icons/fi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { HiMenu, HiX } from 'react-icons/hi';
import { productDescriptions, serviceDescriptions } from '../utils/constants';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const dropdownItems = {
    products: [
      { label: 'Interactive Reports', icon: <FiMonitor />, to: '/products/reports' },
      { label: 'Team Dashboard', icon: <FiGrid />, to: '/products/dashboard' },
      { label: 'Segmentation', icon: <FiLayers />, to: '/products/segmentation' },
      { label: 'Group Analytics', icon: <FiCpu />, to: '/products/analytics' }
    ],
    services: [
      { label: 'Web Development', icon: <FiBox />, to: '/services/web-dev' },
      { label: 'Mobile Apps', icon: <FiGrid />, to: '/services/mobile-apps' },
      { label: 'UI/UX Design', icon: <FiMonitor />, to: '/services/ui-ux' },
      { label: 'Digital Marketing', icon: <FiLayers />, to: '/services/marketing' },
      { label: 'Business Process Outsourcing (BPO)', icon: <TfiHeadphoneAlt />, to: '/services/bpo' }
    ]
  };


  return (
    <header
      // className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 ring-1 ring-white/10 dark:ring-gray-700/30 shadow-md dark:shadow-gray-800/40 transition-all duration-300"
      className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-b border-white/30 dark:border-gray-700/30 shadow-md'

    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Comcares Logo"
              className="h-8 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </Link>

          {/* Desktop Nav + Theme Toggle */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-1 relative">
              {['Home', 'About', 'Portfolio', 'Contact Us'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold transition duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              ))}

              <Dropdown
                title="Products"
                items={dropdownItems.products}
                isOpen={activeDropdown === 'products'}
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
                descriptions={productDescriptions}
              />

              <Dropdown
                title="Services"
                items={dropdownItems.services}
                isOpen={activeDropdown === 'services'}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
                descriptions={serviceDescriptions}
                width="w-80"
              />
            </nav>

            <ThemeToggle />

            {/* Mobile Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition"
            >
              <span className="sr-only">Toggle Menu</span>
              {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="px-6 pt-2 pb-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-b-xl shadow-lg space-y-1">
          {['Home', 'About', 'Portfolio', 'Contact Us'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              onClick={closeMobileMenu}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-lg text-base font-semibold transition hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              {item}
            </Link>
          ))}

          <div className="px-4 py-2">
            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Products</div>
            {dropdownItems.products.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={closeMobileMenu}
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-2 text-sm transition"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="px-4 py-2">
            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Services</div>
            {dropdownItems.services.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={closeMobileMenu}
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-2 text-sm transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Dropdown from './Dropdown';
import logo from '../assets/comcares-logo.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { NAVIGATION_ITEMS, productDescriptions, PRODUCT_ITEMS } from '../utils/constants';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setActiveDropdown(menu);
  };

  // Smooth dropdown close delay to prevent sudden hide on mouse leave
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay
    setCloseTimeout(timeout);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false)
  };

  // Check if current path matches navigation item
  const isActiveRoute = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-b border-white/30 dark:border-gray-700/30 shadow-md'>
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
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 px-4 py-2 rounded-lg text-sm font-semibold transition duration-300 hover:bg-sky-50 dark:hover:bg-sky-900/20 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-sky-600 dark:bg-sky-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  {isActiveRoute(item.path) && (
                    <div className="absolute left-0 bottom-0 w-full h-[2px] bg-sky-600 dark:bg-sky-600" />
                  )}
                </Link>
              ))}

              <Dropdown
                title="Products"
                items={PRODUCT_ITEMS}
                isOpen={activeDropdown === 'products'}
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={() => handleMouseLeave()}
                descriptions={productDescriptions}
              />
            </nav>

            <ThemeToggle />

            {/* Mobile Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition"
            >
              <span className="sr-only">Toggle Menu</span>
              {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out 
      ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
        <div className="px-6 pt-2 pb-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-b-xl shadow-lg space-y-1">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className="block text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 px-4 py-3 rounded-lg text-base font-semibold transition hover:bg-sky-50 dark:hover:bg-sky-900/20"
            >
              <span className={`${isActiveRoute(item.path)
                ? 'text-sky-600 dark:text-sky-400'
                : 'text-gray-700 dark:text-gray-300 group-hover:text-sky-600 dark:group-hover:text-sky-400'
                }`}>
                {item.label}
              </span>
            </Link>
          ))}

          <div className="px-4 py-2">
            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Products</div>
            {PRODUCT_ITEMS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={closeMobileMenu}
                className="block text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 px-2 py-2 text-sm transition"
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
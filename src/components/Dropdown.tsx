import { Link } from 'react-router-dom';
import type { DropdownProps } from '../types';
import { HiChevronDown } from 'react-icons/hi';

const Dropdown = ({
  title,
  items,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  descriptions = [],
  width = 'w-72'
}: DropdownProps) => {
  return (
    <div
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 flex items-center gap-1">
        {title}
        <HiChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className={`absolute left-0 top-full mt-3 ${width} bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border border-gray-200/20 dark:border-gray-700/30 rounded-2xl py-3 z-50 animate-in slide-in-from-top-2 duration-200`}>
          <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 dark:bg-gray-900/95 border-l border-t border-gray-200/20 dark:border-gray-700/30 rotate-45 backdrop-blur-xl"></div>
          <div className="px-2">
            {items.map(({ label, icon, to }, index) => (
              <Link
                key={label}
                to={to}
                className="group/item flex items-center gap-4 px-4 py-3 mx-1 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg group-hover/item:from-blue-500 group-hover/item:to-indigo-500 group-hover/item:text-white transition-all duration-300">
                  {icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{label}</div>
                  {descriptions[index] && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 group-hover/item:text-blue-400 transition-colors">
                      {descriptions[index]}
                    </div>
                  )}
                </div>
                <HiChevronDown className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

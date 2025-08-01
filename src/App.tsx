import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const html = document.documentElement;
    if (currentTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // Also apply to body for better compatibility
    const body = document.body;
    if (currentTheme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [currentTheme]);

  return (
    <div className={currentTheme}>
      <div className={'min-h-screen bg-cyan-50 text-slate-900 dark:bg-slate-950 dark:text-white'}>
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-heading">
              Hi, Dev
              <span className="text-sm text-blue-600 dark:text-red-600">s</span>
            </h1>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
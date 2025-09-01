import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppSelector, type RootState } from '../store/store';
import type { LayoutProps } from '../types';


const MainLayout = ({ children }: LayoutProps) => {
  const currentTheme = useAppSelector((state: RootState) => state.theme.theme);

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
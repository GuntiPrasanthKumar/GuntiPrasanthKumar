import React from 'react';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import { Header } from './Header';
import { Footer } from '../sections/Footer';
import { BackgroundSystem } from './BackgroundSystem';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollRestoration();

  return (
    <>
      <BackgroundSystem />
      <div className="relative z-10 flex min-h-screen flex-col bg-transparent text-foreground selection:bg-primary/30 selection:text-foreground">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

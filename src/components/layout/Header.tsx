import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Sun } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useActiveSection } from '@/hooks/useActiveSection';

const MobileMenuLazy = React.lazy(() =>
  import('./MobileMenu').then((module) => ({ default: module.MobileMenu }))
);

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = ['hero', 'about', 'journey', 'projects', 'skills', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-colors duration-300 border-b ${
          scrolled
            ? 'bg-[#030303]/90 border-card-border/70 backdrop-blur-md'
            : 'bg-transparent border-transparent'
        }`}
      >
        <Container clean>
          <div className="flex h-[72px] items-center justify-between px-6 md:px-8 lg:px-12">
            {/* Left: Initials Logo */}
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-card-border/50 border border-card-border font-heading text-sm font-bold text-foreground transition-transform hover:scale-105">
              GP
            </a>

            {/* Center: Desktop Nav Menu */}
            <nav className="hidden md:flex items-center gap-1 relative bg-card/40 border border-card-border/40 rounded-full px-2 py-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                      isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 z-[-1] rounded-full bg-primary/10 border border-primary/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle (Dark Default) */}
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-[#09090b]/40 text-muted-foreground hover:text-foreground hover:bg-card-border transition-colors cursor-pointer">
                <Sun className="h-4 w-4" />
              </button>

              {/* Social Buttons */}
              <a
                href="https://github.com/GuntiPrasanthKumar"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-[#09090b]/40 text-muted-foreground hover:text-foreground hover:bg-card-border transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/gunti-prasanth-kumar-68207027a/"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-[#09090b]/40 text-muted-foreground hover:text-foreground hover:bg-card-border transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Resume Button */}
              <a
                href="#"
                className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg border border-card-border bg-[#09090b] px-4 text-xs font-semibold text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Resume
              </a>

              {/* Mobile Menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-[#09090b] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Lazy Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Suspense fallback={null}>
            <MobileMenuLazy
              isOpen={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              activeSection={activeSection}
              onItemClick={handleNavClick}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

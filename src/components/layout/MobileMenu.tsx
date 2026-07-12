import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onItemClick: (id: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  onItemClick,
}) => {
  if (!isOpen) return null;

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: 'easeOut',
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  } as const;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col bg-[#030303]/95 backdrop-blur-lg p-6"
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-card-border/50 border border-card-border font-heading text-sm font-bold text-foreground">
          GP
        </div>
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-[#09090b] text-muted-foreground hover:text-foreground hover:bg-card-border transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Nav List */}
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col flex-grow items-center justify-center gap-8"
      >
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            variants={itemVariants}
            href={item.href}
            onClick={() => {
              onItemClick(item.id);
              onClose();
            }}
            className={`font-heading text-3xl font-extrabold tracking-tight transition-colors cursor-pointer ${
              activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.nav>
    </motion.div>
  );
};

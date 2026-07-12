import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Container } from './Container';

interface SectionProps extends Omit<HTMLMotionProps<'section'>, 'children'> {
  children: React.ReactNode;
  id: string;
  className?: string;
  clean?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  clean = false,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Premium, slow section reveal settings
  const initialStyles = shouldReduceMotion 
    ? { opacity: 0 } 
    : { opacity: 0, y: 24, scale: 0.985 };

  const animateStyles = shouldReduceMotion 
    ? { opacity: 1 } 
    : { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.section
      id={id}
      className={cn(
        "relative py-16 md:py-24 lg:py-32 overflow-hidden",
        className
      )}
      initial={initialStyles}
      whileInView={animateStyles}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        type: shouldReduceMotion ? 'tween' : 'spring',
        stiffness: 70, 
        damping: 18,
        duration: 0.7 
      }}
      {...props}
    >
      {clean ? children : <Container>{children}</Container>}
    </motion.section>
  );
};

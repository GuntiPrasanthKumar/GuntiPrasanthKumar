import React from 'react';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-card-border bg-[#030303] py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Footer Section</span>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Gunti Prasanth Kumar. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

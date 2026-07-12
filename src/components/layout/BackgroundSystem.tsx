import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const BackgroundSystem: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for buttery smooth spotlight lagging
  const springX = useSpring(mouseX, { stiffness: 50, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 22 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#0a0a0a]">
      {/* Layer 2: Moving Ambient Spotlight (opacity < 8%) */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.035),transparent_70%)]"
      />

      {/* Layer 3: Subtle Engineering Grid (visible on large screens, opacity < 5%) */}
      <div className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,#1f2028_1px,transparent_1px),linear-gradient(to_bottom,#1f2028_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.03]" />

      {/* Layer 4: Soft noise texture generated dynamically */}
      <div className="absolute inset-0 bg-repeat bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22noiseFilter%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/></svg>')] opacity-[0.14] mix-blend-overlay" />

      {/* Layer 5: Tiny Floating Glowing Nodes (random paths, slow) */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -35, 25, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 h-[3px] w-[3px] rounded-full bg-primary/45 blur-[0.5px]"
        />
        <motion.div
          animate={{
            x: [0, -35, 20, 0],
            y: [0, 25, -45, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 h-[3px] w-[3px] rounded-full bg-accent/45 blur-[0.5px]"
        />
      </div>
    </div>
  );
};

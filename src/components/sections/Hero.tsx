import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown, Code, Server, Cpu } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize values between -0.5 and 0.5
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // 3D Parallax Map transforms (differing factors to create physical depth)
  const card1X = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const card1Y = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  const card2X = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const card2Y = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

  const card3X = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const card3Y = useTransform(mouseY, [-0.5, 0.5], [8, -8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 18,
      },
    },
  } as const;

  const handleScrollToAbout = () => {
    const aboutEl = document.getElementById('about');
    aboutEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center pt-24 pb-12 overflow-hidden"
      clean
    >
      {/* ================= BACKGROUND: SPATIAL GRID & SPOTLIGHT ================= */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#16161d_1px,transparent_1px),linear-gradient(to_bottom,#16161d_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-35" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_800px_at_center,rgba(59,130,246,0.06),transparent)]" />
      
      {/* Dynamic Moving Background Dots */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/4 top-1/3 h-1.5 w-1.5 rounded-full bg-primary blur-[1px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute right-1/4 top-1/4 h-1 w-1 rounded-full bg-accent blur-[1px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
        
        {/* ================= LEFT COLUMN: PRIMARY TYPOGRAPHY ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-6 flex flex-col text-left space-y-6 lg:pr-6"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
              AI ENGINEER • FULL STACK DEVELOPER
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl font-extrabold tracking-tight sm:text-7xl text-foreground leading-[1.05]"
          >
            Gunti Prasanth <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kumar
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl font-bold tracking-tight text-foreground/90 max-w-lg leading-snug"
          >
            Building production-ready AI products that solve real-world problems.
          </motion.p>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-muted-foreground max-w-md leading-relaxed"
          >
            Information Technology Undergraduate at Aditya University. Passionate about Agentic AI, LLMs, and intelligent, data-driven software systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#0c0c0e] border border-primary/20 hover:border-primary/50 text-xs font-bold tracking-wider uppercase text-white px-7 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_12px_rgba(59,130,246,0.1)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.25)]"
            >
              View Projects
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-card-border bg-[#0c0c0e] hover:bg-card-border/50 text-xs font-bold tracking-wider uppercase text-foreground px-7 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Text Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 text-xs font-semibold text-muted-foreground font-mono">
            <a
              href="https://github.com/GuntiPrasanthKumar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gunti-prasanth-kumar-68207027a/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:prasanthgunti07@gmail.com"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Email
            </a>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT COLUMN: INTERACTIVE VISUAL ================= */}
        <div className="lg:col-span-6 relative h-[480px] w-full max-w-lg mx-auto flex items-center justify-center">
          
          {/* Card 1: Agent Status (Front Card) */}
          <motion.div
            style={{ x: card1X, y: card1Y }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="absolute z-30 top-10 left-4 w-72 rounded-xl border border-card-border/60 bg-[#09090b]/80 backdrop-blur-md p-5 text-left shadow-2xl hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="h-4 w-4 text-primary" />
                <span className="font-mono text-[10px] text-muted-foreground uppercase font-bold">
                  agent-runtime.sh
                </span>
              </div>
              <span className="inline-flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            </div>
            <div className="mt-4 font-mono text-[11px] space-y-2 text-zinc-400">
              <p className="text-zinc-600">&gt; executing task validation...</p>
              <p>&gt; face-pose metrics: <span className="text-accent">99.4%</span></p>
              <p>&gt; decision loop latency: <span className="text-primary">12ms</span></p>
            </div>
          </motion.div>

          {/* Card 2: Neural Net Visualization (Center back) */}
          <motion.div
            style={{ x: card2X, y: card2Y }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="absolute z-10 w-80 h-64 rounded-xl border border-card-border/40 bg-[#09090b]/40 backdrop-blur-sm p-5 text-left shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-muted-foreground" />
              <span className="font-mono text-[10px] text-muted-foreground uppercase font-bold">
                topology_viewer
              </span>
            </div>

            {/* Neural SVG Node layout */}
            <div className="relative flex-grow flex items-center justify-center">
              <svg className="w-full h-32" viewBox="0 0 200 100">
                <line x1="20" y1="50" x2="80" y2="20" stroke="#1f2028" strokeWidth="1" />
                <line x1="20" y1="50" x2="80" y2="50" stroke="#1f2028" strokeWidth="1" />
                <line x1="20" y1="50" x2="80" y2="80" stroke="#1f2028" strokeWidth="1" />
                <line x1="80" y1="20" x2="160" y2="50" stroke="#1f2028" strokeWidth="1" />
                <line x1="80" y1="50" x2="160" y2="50" stroke="#1f2028" strokeWidth="1" />
                <line x1="80" y1="80" x2="160" y2="50" stroke="#1f2028" strokeWidth="1" />

                {/* Node Circles */}
                <circle cx="20" cy="50" r="4" fill="#3B82F6" />
                <circle cx="80" cy="20" r="4" fill="#71717A" />
                
                {/* Pulsing Active Core Node */}
                <circle cx="80" cy="50" r="5" fill="#10B981">
                  <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
                </circle>
                
                <circle cx="80" cy="80" r="4" fill="#71717A" />
                <circle cx="160" cy="50" r="4" fill="#3B82F6" />
              </svg>
            </div>
          </motion.div>

          {/* Card 3: Code evaluation snippet (Right front) */}
          <motion.div
            style={{ x: card3X, y: card3Y }}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="absolute z-20 bottom-12 right-2 w-72 rounded-xl border border-card-border/60 bg-[#09090b]/80 backdrop-blur-md p-5 text-left shadow-2xl hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-accent" />
              <span className="font-mono text-[10px] text-muted-foreground uppercase font-bold">
                evaluator.py
              </span>
            </div>
            <div className="mt-4 font-mono text-[10px] space-y-1 text-zinc-300 leading-snug">
              <p><span className="text-primary">def</span> <span className="text-yellow-500">evaluate_model</span>(task):</p>
              <p className="pl-4">agent = Agent(task)</p>
              <p className="pl-4 text-accent">return agent.execute()</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.button
        onClick={handleScrollToAbout}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label="Scroll to About Section"
      >
        <span className="text-[9px] font-mono tracking-widest uppercase">Explore</span>
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </Section>
  );
};

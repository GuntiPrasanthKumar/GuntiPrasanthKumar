import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';

interface PhilosophyItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const philosophies: PhilosophyItem[] = [
    {
      id: 0,
      title: "Solve Real Problems",
      subtitle: "Utility > Complexity",
      description: "Technology is a tool to resolve human inefficiencies. I design and build systems prioritizing raw utility and business impact over academic complexity."
    },
    {
      id: 1,
      title: "Simplicity Scales",
      subtitle: "Maintainable Architectures",
      description: "Complex software breaks. I specialize in writing highly readable, decoupled architectures that are simple to debug, test, and scale."
    },
    {
      id: 2,
      title: "User-Centric Design",
      subtitle: "Frictionless UX",
      description: "Whether building an internal dev-tool or a customer-facing SaaS, the interface must feel fluid, fast, and completely intuitive."
    },
    {
      id: 3,
      title: "Ship and Iterate",
      subtitle: "Continuous Execution",
      description: "Working code in production is the absolute metric of success. I build modular systems that allow rapid deployment, iteration, and feedback loop updates."
    }
  ];

  return (
    <Section id="about" className="border-t border-card-border/50 bg-[#09090b]/10">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Background
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Integrating AI with Core Software Engineering
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I am Gunti Prasanth Kumar, an Information Technology undergraduate at Aditya University (Class of 2027) focused on the bridge between machine learning applications and modern web architectures.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I build products that embed deep learning, RAG pipelines, and autonomous agent workflows into robust full-stack systems, aiming to make AI execution clean, cost-effective, and highly interactive.
          </p>
        </div>

        {/* Right Column: Philosophy Tabs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="rounded-xl border border-card-border bg-[#09090b] p-6 sm:p-8 text-left space-y-6">
            <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
              Engineering Philosophy
            </h3>
            
            {/* Tabs List */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              {philosophies.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 min-w-[120px] rounded-lg px-4 py-3 text-xs font-semibold tracking-wider uppercase border text-center transition-all ${
                    activeTab === idx
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'bg-transparent border-card-border text-muted-foreground hover:text-foreground hover:border-zinc-700'
                  }`}
                >
                  {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                </button>
              ))}
            </div>

            {/* Tab Panel Content */}
            <div className="relative min-h-[140px] rounded-lg border border-card-border/60 bg-[#030303]/60 p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="text-base font-bold text-foreground">
                      {philosophies[activeTab].title}
                    </h4>
                    <span className="font-mono text-[11px] text-primary uppercase font-semibold">
                      {philosophies[activeTab].subtitle}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {philosophies[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

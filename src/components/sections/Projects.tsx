import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  metrics: string[];
  isActive?: boolean;
}

export const Projects: React.FC = () => {
  const [selectedProj, setSelectedProj] = useState(0);

  const projects: Project[] = [
    {
      id: 0,
      title: "SkillTrove",
      category: "AI Learning & Proctoring Platform",
      description: "Adaptive Bloom's taxonomy coding/aptitude assessments with secure face/eye tracking AI proctoring.",
      longDescription: "A comprehensive SaaS platform built to orchestrate next-generation assessments. Combines TensorFlow.js eye and head-pose tracking algorithms directly in the browser to maintain test integrity, matching adaptive question trees structured using Bloom's Taxonomy learning nodes.",
      tech: ["React 19", "Node.js", "MongoDB", "TensorFlow.js", "Tailwind CSS"],
      github: "https://github.com/GuntiPrasanthKumar/SKILLTROVEMAX",
      metrics: ["99.2% eye-tracking accuracy", "Adaptive test routing loops", "Real-time JSON analytics feedback"],
      isActive: true
    },
    {
      id: 1,
      title: "AI Forensic Analyzer",
      category: "Natural Language Processing (NLP)",
      description: "Extracting forensic insights and automated data analysis reports from structural text fields.",
      longDescription: "An advanced forensic research tool leveraging natural language processing and semantic token embeddings. It parses complex raw records and integrates the Gemini API to analyze timelines, trace document anomalies, and output full audit-ready markdown reports.",
      tech: ["Python", "FastAPI", "Gemini API", "LangChain", "Vector Search"],
      github: "https://github.com/GuntiPrasanthKumar/AI-ForensicLab",
      metrics: ["Recursive document anomaly parsing", "Zero-shot structural report generation", "FastAPI non-blocking query loop"]
    },
    {
      id: 2,
      title: "ClimateSCOMC",
      category: "Machine Learning / Data Intelligence",
      description: "Predictive climate intelligence platform using modeling and spatial datasets.",
      longDescription: "A predictive analytics application designed to map and simulate environmental trends. Resolves public datasets and integrates predictive regressors to compute atmospheric shifts, projecting actionable insights on a custom geo-mapping vector canvas.",
      tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Vite"],
      github: "https://github.com/GuntiPrasanthKumar/SCOMC",
      metrics: ["Multi-variant model training pipelines", "Interactive coordinates mapping canvas", "94% historical prediction test accuracy"]
    }
  ];

  return (
    <Section id="projects" className="border-t border-card-border/50 bg-[#030303]">
      <div className="flex flex-col space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Work
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Featured Research &amp; Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Interactive software, NLP frameworks, and data platforms engineered for high-performance execution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Projects Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProj(idx)}
                className={`group rounded-xl border p-5 transition-all text-left space-y-2 relative overflow-hidden ${
                  selectedProj === idx
                    ? 'border-primary bg-[#09090b]'
                    : 'border-card-border bg-[#09090b]/40 hover:border-zinc-700 hover:bg-[#09090b]/60'
                }`}
              >
                {proj.isActive && (
                  <span className="absolute top-3 right-3 rounded-full bg-accent/15 border border-accent/30 px-2 py-0.5 text-[9px] font-semibold text-accent uppercase tracking-wider">
                    Building
                  </span>
                )}
                <span className="text-[10px] font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  {proj.category}
                </span>
                <h3 className="text-base font-bold text-foreground">{proj.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{proj.description}</p>
              </button>
            ))}
          </div>

          {/* Project Details Panel */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-grow rounded-xl border border-card-border bg-[#09090b] p-6 sm:p-8 text-left space-y-6 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProj}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-primary font-semibold uppercase tracking-wider">
                      {projects[selectedProj].category}
                    </span>
                    <h3 className="font-heading text-2xl font-extrabold text-foreground">
                      {projects[selectedProj].title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {projects[selectedProj].longDescription}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">
                      Key Metrics / Features
                    </h4>
                    <ul className="space-y-1.5 pl-4 border-l border-primary/20">
                      {projects[selectedProj].metrics.map((m, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground font-mono">
                          ↳ {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {projects[selectedProj].tech.map((t) => (
                      <span key={t} className="rounded-md border border-card-border/80 bg-[#030303] px-2.5 py-1 text-xs font-mono text-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="border-t border-card-border pt-6 mt-6 flex justify-between items-center">
                <a
                  href={projects[selectedProj].github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  View Repository ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

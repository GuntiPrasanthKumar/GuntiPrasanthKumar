import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

interface JourneyStep {
  id: number;
  title: string;
  subtitle: string;
  details: string;
  tech: string[];
}

export const Journey: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps: JourneyStep[] = [
    {
      id: 0,
      title: "Machine Learning",
      subtitle: "Foundation Layer",
      details: "Began with statistical learning foundations, linear models, optimization techniques, and classic libraries.",
      tech: ["Python", "Scikit-Learn", "NumPy", "Pandas"]
    },
    {
      id: 1,
      title: "Deep Learning",
      subtitle: "Representation Learning",
      details: "Transitioned to neural architectures, training convolutional networks (CNNs) and recurrent models (RNNs).",
      tech: ["TensorFlow", "Keras", "Neural Nets"]
    },
    {
      id: 2,
      title: "Large Language Models",
      subtitle: "Transformer Architectures",
      details: "Explored transformers, sequence modeling, pre-training steps, and fine-tuning foundations.",
      tech: ["Hugging Face", "Transformers", "GPT API"]
    },
    {
      id: 3,
      title: "Retrieval-Augmented Generation",
      subtitle: "Contextual Knowledge Injection",
      details: "Engineered pipelines injecting vector databases to supply LLMs with domain-specific external context.",
      tech: ["MongoDB", "Pinecone", "Vector Search", "ChromaDB"]
    },
    {
      id: 4,
      title: "LangGraph",
      subtitle: "Stateful Multi-Agent Orchestration",
      details: "Designed cyclic, stateful workflows that enable collaborative multi-agent execution and routing logic.",
      tech: ["LangChain", "LangGraph", "State Management"]
    },
    {
      id: 5,
      title: "Model Context Protocol (MCP)",
      subtitle: "Universal Context Infrastructure",
      details: "Integrated Model Context Protocol to build unified tools, assets, and data sync layers for AI models.",
      tech: ["MCP Server", "TypeScript", "Vite"]
    },
    {
      id: 6,
      title: "Agentic AI",
      subtitle: "Autonomous Decision Loops",
      details: "Building adaptive agents capable of eye/head proctoring tracking, code parsing, and recursive tool calls.",
      tech: ["SkillTrove Proctoring", "Autonomous Agents", "Next-Gen AI"]
    }
  ];

  return (
    <Section id="journey" className="border-t border-card-border/50 bg-[#030303]">
      <div className="flex flex-col items-center space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Evolution
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            My Learning &amp; Research Journey
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A linear progression from classical statistical algorithms to stateful agentic decision-loops.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative w-full max-w-3xl pl-8 md:pl-0">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 bg-card-border" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Timeline node dot */}
                  <div
                    className={`absolute left-[15px] md:left-1/2 top-1.5 md:top-auto -translate-x-1/2 z-10 h-3 w-3 rounded-full border transition-all duration-300 ${
                      isHovered
                        ? 'border-primary bg-primary scale-125 shadow-[0_0_8px_#3B82F6]'
                        : 'border-card-border bg-[#030303]'
                    }`}
                  />

                  {/* Left Side Content Box (for Even index items) */}
                  <div className={`w-full md:w-[45%] text-left ${isEven ? 'md:text-right md:order-1' : 'md:order-2 md:opacity-0 md:pointer-events-none'}`}>
                    {isEven && (
                      <motion.div
                        className={`rounded-xl border p-5 transition-all duration-300 ${
                          isHovered ? 'border-primary bg-card/60' : 'border-card-border bg-[#09090b]'
                        }`}
                      >
                        <span className="font-mono text-[10px] tracking-wider text-primary uppercase font-bold">
                          {step.subtitle}
                        </span>
                        <h3 className="text-base font-bold text-foreground mt-1">{step.title}</h3>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{step.details}</p>
                        <div className={`flex flex-wrap gap-1.5 mt-3 ${isEven ? 'md:justify-end' : ''}`}>
                          {step.tech.map((t, tIdx) => (
                            <span key={tIdx} className="rounded-md border border-card-border/80 bg-[#030303] px-2 py-0.5 text-[9px] font-mono text-muted-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[10%] order-2" />

                  {/* Right Side Content Box (for Odd index items) */}
                  <div className={`w-full md:w-[45%] text-left ${!isEven ? 'md:order-3' : 'md:order-1 md:opacity-0 md:pointer-events-none'}`}>
                    {!isEven && (
                      <motion.div
                        className={`rounded-xl border p-5 transition-all duration-300 ${
                          isHovered ? 'border-primary bg-card/60' : 'border-card-border bg-[#09090b]'
                        }`}
                      >
                        <span className="font-mono text-[10px] tracking-wider text-primary uppercase font-bold">
                          {step.subtitle}
                        </span>
                        <h3 className="text-base font-bold text-foreground mt-1">{step.title}</h3>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{step.details}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {step.tech.map((t, tIdx) => (
                            <span key={tIdx} className="rounded-md border border-card-border/80 bg-[#030303] px-2 py-0.5 text-[9px] font-mono text-muted-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

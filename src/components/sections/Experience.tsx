import React from 'react';
import { Section } from '@/components/ui/Section';

interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  points: string[];
  skills: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "AI Lead & Founder",
      organization: "SkillTrove Core Team",
      period: "2025 - Present",
      points: [
        "Architecting adaptive assessment engines utilizing structured taxonomy trees in React 19.",
        "Developing secure browser-based facial and pose tracking proctoring scripts with TensorFlow.js.",
        "Designing state management models to log structural candidate metrics and JSON analytical payloads."
      ],
      skills: ["React 19", "TensorFlow.js", "Node.js", "MongoDB"]
    },
    {
      role: "Open Source Contributor & Researcher",
      organization: "Autonomous AI Workflows",
      period: "2024 - Present",
      points: [
        "Integrating LangGraph models to orchestrate multi-agent cyclic execution pipelines.",
        "Configuring Model Context Protocol (MCP) servers to expose universal directory index tools to Claude.",
        "Developing micro-libraries mapping custom embeddings and semantic vector retrieval."
      ],
      skills: ["LangGraph", "FastAPI", "Python", "MCP Server"]
    }
  ];

  return (
    <Section id="experience" className="border-t border-card-border/50 bg-[#09090b]/10">
      <div className="flex flex-col space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            History
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Experience &amp; Contributions
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Practical milestones in lead software design, open-source models, and agentic framework integrations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto w-full space-y-8 text-left">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-card-border/80 space-y-3 group hover:border-primary transition-colors duration-300">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-card-border group-hover:bg-primary transition-colors" />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <div>
                  <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground font-semibold">{exp.organization}</span>
                </div>
                <span className="font-mono text-[10px] text-primary bg-primary/5 border border-primary/10 rounded px-2 py-0.5 w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 pl-4 list-disc text-xs text-muted-foreground leading-relaxed">
                {exp.points.map((p, pIdx) => (
                  <li key={pIdx}>{p}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((s) => (
                  <span key={s} className="rounded-md border border-card-border/50 bg-[#030303] px-2 py-0.5 text-[9px] font-mono text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

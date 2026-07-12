import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Gemini API", level: 88 },
        { name: "OpenAI API", level: 85 },
        { name: "LangChain & LangGraph", level: 80 }
      ]
    },
    {
      title: "Software Engineering",
      skills: [
        { name: "React.js & Vite", level: 88 },
        { name: "JavaScript / TS", level: 85 },
        { name: "Node.js & Express", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 78 }
      ]
    },
    {
      title: "Developer Toolkit",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "VS Code", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Vercel & Render", level: 80 }
      ]
    }
  ];

  return (
    <Section id="skills" className="border-t border-card-border/50 bg-[#09090b]/10">
      <div className="flex flex-col space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Capabilities
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Technical Stack &amp; Skills
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Practical development tools, frameworks, and APIs leveraged to build next-generation applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-xl border border-card-border bg-[#09090b] p-6 text-left space-y-6"
            >
              <h3 className="font-heading text-sm font-bold tracking-widest text-primary uppercase border-b border-card-border pb-3">
                {cat.title}
              </h3>
              
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 group">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1 w-full rounded-full bg-card-border overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

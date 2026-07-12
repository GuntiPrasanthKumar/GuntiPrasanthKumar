import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const Certificates: React.FC = () => {
  const certs: Certificate[] = [
    {
      title: "Google AI Specialist",
      issuer: "Google",
      date: "2025",
      credentialUrl: "#"
    },
    {
      title: "Advanced Machine Learning with TensorFlow",
      issuer: "Coursera / DeepLearning.AI",
      date: "2024",
      credentialUrl: "#"
    },
    {
      title: "Full Stack Software Engineering Specialization",
      issuer: "Meta",
      date: "2024",
      credentialUrl: "#"
    }
  ];

  return (
    <Section id="certificates" className="border-t border-card-border/50 bg-[#030303]">
      <div className="flex flex-col space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Credentials
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Academic Certifications
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Verified academic milestones and technical specializations completed throughout my training.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto w-full">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-xl border border-card-border bg-[#09090b] p-6 text-left space-y-4 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300"
            >
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] text-primary uppercase font-bold tracking-wider">
                  {cert.issuer}
                </span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-card-border/50">
                <span className="font-mono text-[10px] text-muted-foreground">{cert.date}</span>
                <a
                  href={cert.credentialUrl}
                  className="text-[10px] font-semibold text-foreground uppercase tracking-wider hover:underline"
                >
                  Verify ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    // Simulate API request to route messages
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (status === 'error') setStatus('idle');
  };

  return (
    <Section id="contact" className="border-t border-card-border/50 bg-[#09090b]/10 pb-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 max-w-5xl mx-auto w-full">
        {/* Left Column: Direct Links */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Communication
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Get in Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Have a question, collaboration idea, or an AI product to build? Drop a payload in the API client or reach out through traditional channels.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Email Address</span>
              <a href="mailto:prasanthgunti07@gmail.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                prasanthgunti07@gmail.com
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-muted-foreground uppercase">LinkedIn Payload</span>
              <a
                href="https://www.linkedin.com/in/gunti-prasanth-kumar-68207027a/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                linkedin.com/in/gunti-prasanth-kumar-68207027a/ ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: API-Style JSON Client form */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="rounded-xl border border-card-border bg-[#09090b] overflow-hidden">
            {/* Header Client tab */}
            <div className="flex items-center justify-between border-b border-card-border px-4 py-3 bg-[#030303]/80">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-accent uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                POST // api.gpk.dev/v1/message
              </div>
              <span className="font-mono text-[9px] text-muted-foreground uppercase">
                Content-Type: JSON
              </span>
            </div>

            {/* Form client body */}
            <form onSubmit={handleSubmit} className="p-6 text-left space-y-6">
              <div className="font-mono text-xs sm:text-sm space-y-4 bg-[#030303] border border-card-border/60 rounded-lg p-5">
                <span className="text-muted-foreground">&#123;</span>
                
                {/* Name Row */}
                <div className="flex items-center gap-2 pl-4">
                  <span className="text-primary">"name":</span>
                  <span className="text-foreground">"</span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter name"
                    className="flex-grow bg-transparent border-none outline-none text-accent p-0 focus:ring-0 placeholder:text-zinc-800 text-xs sm:text-sm"
                  />
                  <span className="text-foreground">",</span>
                </div>

                {/* Email Row */}
                <div className="flex items-center gap-2 pl-4">
                  <span className="text-primary">"email":</span>
                  <span className="text-foreground">"</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@domain.com"
                    className="flex-grow bg-transparent border-none outline-none text-accent p-0 focus:ring-0 placeholder:text-zinc-800 text-xs sm:text-sm"
                  />
                  <span className="text-foreground">",</span>
                </div>

                {/* Message Row */}
                <div className="flex items-start gap-2 pl-4">
                  <span className="text-primary pt-0.5">"message":</span>
                  <span className="text-foreground pt-0.5">"</span>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Input message payload here..."
                    className="flex-grow bg-transparent border-none outline-none text-accent p-0 focus:ring-0 placeholder:text-zinc-800 resize-none text-xs sm:text-sm leading-relaxed"
                  />
                  <span className="text-foreground pt-0.5">"</span>
                </div>

                <span className="text-muted-foreground">&#125;</span>
              </div>

              {/* Status bar & buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs font-mono">
                  {status === 'loading' && <span className="text-muted-foreground animate-pulse">Sending payload...</span>}
                  {status === 'success' && <span className="text-accent">HTTP 200: Message sent successfully.</span>}
                  {status === 'error' && <span className="text-red-500">Error: All payload keys are required.</span>}
                  {status === 'idle' && <span className="text-zinc-600">Waiting for trigger...</span>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-xs font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  Execute Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

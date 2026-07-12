import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Journey } from '@/components/sections/Journey';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Certificates } from '@/components/sections/Certificates';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </Layout>
    </Router>
  );
}

export default App;

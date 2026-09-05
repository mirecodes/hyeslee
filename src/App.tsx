import React from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ResearchSection } from './components/ResearchSection';
import { CourseProjectSection } from './components/CourseProjectSection';
import { PublicationSection } from './components/PublicationSection';
import { EtcSection } from './components/EtcSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
      {/* Top Header Navigation Tabs (Text Only) */}
      <Header />

      {/* Main Flat CV Sections Assembly */}
      <main style={{ flex: 1 }}>
        <AboutSection />
        <EducationSection />
        <ResearchSection />
        <CourseProjectSection />
        <PublicationSection />
        <EtcSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

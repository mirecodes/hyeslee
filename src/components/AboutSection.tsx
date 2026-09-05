import React from 'react';
import { Mail, FileText, MapPin } from 'lucide-react';

// Official GitHub Vector Mark SVG
const GithubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Official LinkedIn Vector Mark SVG
const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

export const AboutSection: React.FC = () => {
  const profile = {
    name: 'Hyesung Lee',
    profileImage: '/profile.jpg',
    location: 'Zürich, Switzerland',
    email: 'mireflare@snu.ac.kr',
    githubUrl: 'https://github.com/mirecodes',
    linkedinUrl: 'https://linkedin.com',
    cvUrl: '/cv/hyesunglee.pdf',
    interests: [
      'Multi-Agent Robotic Systems',
      'Learning-Based Control (PPO, ACT, SERL)',
      'Sim-to-Real Articulated Reconstruction',
      'ROS1/2, Isaac Sim & MuJoCo',
      'Soft & Origami Robotics',
      'Gaussian Splatting'
    ],
    bio: [
    'I am a Master\'s student in Robotics, Systems, and Control at ETH Zürich.',
    'I earned my B.S. with Summa Cum Laude in Mechanical Engineering and Computer Science from Seoul National University.',
    'I have conduected researches spanning diverse areas of robotics, including hardware prototyping, analytical control, learning-based methods, and simulation to digital twin integration.',
    'My research interest is to design collaborative control strategies for multi-agent robotic systems by bridging model-based knowledge with data-driven learning.'
     ]
  };

  return (
    <section id="about" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Asymmetric Grid Ratio Layout (Photo: 260px, Text: 1fr) */}
        <div className="about-grid-layout">
          
          {/* Left Column: Flat Profile Photo + Constrained Icon-Only Links Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '260px' }}>
            
            {/* Seamless Profile Image Frame - 3:4 Aspect Ratio cropped from top */}
            <div
              style={{
                width: '100%',
                maxWidth: '260px',
                aspectRatio: '3 / 4',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                src={profile.profileImage}
                alt={profile.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block'
                }}
              />
            </div>

            {/* Clickable Icon-Only Bar - Strictly Constrained within Profile Photo Width (260px) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                width: '100%',
                maxWidth: '260px',
                marginTop: '1rem'
              }}
            >
              {/* Email Icon */}
              <a
                href={`mailto:${profile.email}`}
                className="icon-link-btn"
                title={`Email: ${profile.email}`}
                aria-label={`Email: ${profile.email}`}
              >
                <Mail size={18} style={{ color: 'var(--primary-blue)' }} />
              </a>

              {/* GitHub Official Icon */}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link-btn"
                title="GitHub: github.com/mirecodes"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              {/* LinkedIn Official Icon */}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}

              {/* CV Document Icon */}
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link-btn"
                  title="Curriculum Vitae (PDF)"
                  aria-label="Curriculum Vitae (PDF)"
                >
                  <FileText size={18} style={{ color: 'var(--primary-blue)' }} />
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Bio Summary & Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            {/* Name & Title */}
            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {profile.name}
            </h1>

            {/* Bio Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
              {profile.bio.map((paragraph, idx) => (
                <p key={idx} style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Location (Relocated: Below Bio, Above Research Focus) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '1.25rem' }}>
              <MapPin size={16} style={{ color: 'var(--primary-blue)' }} />
              <span>{profile.location}</span>
            </div>

            {/* Core Focus Tags */}
            {/* <div>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.625rem' }}>
                Research Focus
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {profile.interests.map((interest, idx) => (
                  <span key={idx} className="tag-pill-outline" style={{ fontSize: '0.78125rem', padding: '3px 12px' }}>
                    {interest}
                  </span>
                ))}
              </div>
            </div> */}

          </div>

        </div>

      </div>

      <style>{`
        .about-grid-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        .icon-link-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-light);
          background-color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .icon-link-btn:hover {
          border-color: var(--primary-blue);
          background-color: var(--bg-tertiary);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .about-grid-layout {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

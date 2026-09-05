import React from 'react';

export const TechTicker: React.FC = () => {
  const logos = [
    'REACT', 'TYPESCRIPT', 'VITE', 'NEXT.JS', 'TAILWIND', 'NODE.JS'
  ];

  return (
    <section style={{ padding: '3rem 0', backgroundColor: '#FAFAFA', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h4
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontWeight: 700,
            marginBottom: '2rem'
          }}
        >
          TRUSTED BY INDUSTRY LEADERS & POWERED BY MODERN STACK
        </h4>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            opacity: 0.75
          }}
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                color: '#64748B',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  backgroundColor: '#CBD5E1',
                  opacity: 0.6
                }}
              />
              <span>{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

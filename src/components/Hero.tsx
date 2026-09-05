import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section style={{ paddingTop: '3.5rem', paddingBottom: '3rem', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Top Status Pill Badge */}
        <div style={{ marginBottom: '1.75rem' }}>
          <a href="#models" className="pill-badge" style={{ textDecoration: 'none', transition: 'all 0.2s ease' }}>
            <span
              style={{
                backgroundColor: 'var(--bg-dark)',
                color: 'var(--text-on-dark)',
                padding: '2px 8px',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700
              }}
            >
              NEW
            </span>
            <span>Auralis v2.0 is now live</span>
            <ArrowRight size={14} style={{ color: 'var(--text-secondary)' }} />
          </a>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            marginBottom: '1.25rem',
            color: 'var(--text-primary)',
            maxWidth: '820px',
            margin: '0 auto 1.25rem auto'
          }}
        >
          Create AI audio that <br style={{ display: 'none' }} />
          <span style={{ color: 'var(--text-primary)' }}>sounds human</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            margin: '0 auto 2.25rem auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        {/* Action Pills */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#models" className="btn btn-primary-dark" style={{ padding: '0.875rem 2rem', fontSize: '0.9375rem' }}>
            Start Building
          </a>
          <a href="#showcase" className="btn btn-outline" style={{ padding: '0.875rem 2rem', fontSize: '0.9375rem' }}>
            Explore Platform
          </a>
        </div>

      </div>
    </section>
  );
};

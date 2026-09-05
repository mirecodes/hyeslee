import React from 'react';
import { Mail, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-subtle)', padding: '2.5rem 0' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)'
          }}
        >
          <div>
            © 2026 Hyesung Lee. Built with React & TypeScript for GitHub Pages.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href="mailto:mireflare@snu.ac.kr" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Mail size={14} />
              <span>Contact</span>
            </a>
            <a href="https://github.com/mirecodes" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Code2 size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

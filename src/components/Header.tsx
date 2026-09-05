import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'education', 'researches', 'projects', 'publications', 'etc'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'researches', label: 'Researches' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'etc', label: 'Etc.' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'var(--bg-primary)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        transition: 'all 0.25s ease-in-out',
        padding: '0.75rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        
        {/* Pure Text Navigation Tabs Centered (No Icons) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            backgroundColor: '#F1F5F9',
            padding: '4px 8px',
            borderRadius: '9999px',
            border: '1px solid var(--border-light)'
          }}
          className="desktop-nav-only"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '7px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                  color: isActive ? 'var(--primary-blue)' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 2px 6px rgba(0, 0, 0, 0.06)' : 'none'
                }}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <div style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)' }} className="mobile-toggle">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'flex', border: 'none', background: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--border-light)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            textAlign: 'center'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              style={{
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: activeTab === item.id ? 'var(--primary-blue)' : 'var(--text-primary)',
                textDecoration: 'none',
                padding: '8px 0'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav-only {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (min-width: 641px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const MediaShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showcase" style={{ paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            backgroundColor: '#0F172A',
            backgroundImage: 'radial-gradient(ellipse at 50% 0%, #1E3A8A 0%, #0F172A 70%)',
            boxShadow: 'var(--shadow-hero)',
            padding: '2.5rem 1.5rem',
            minHeight: '420px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* Main Visualizer Audio Waveform Area */}
          <div
            style={{
              width: '100%',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '2rem 0'
            }}
          >
            {/* SVG Waveform Curve Graphic */}
            <svg
              viewBox="0 0 1000 300"
              style={{
                width: '90%',
                maxHeight: '220px',
                filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.4))'
              }}
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0F172A" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area Fill under waveform */}
              <path
                d="M 0 150 Q 150 40 300 150 T 600 150 T 900 120 T 1000 150 L 1000 300 L 0 300 Z"
                fill="url(#fillGradient)"
              />

              {/* Dynamic Wave Line */}
              <path
                d="M 0 150 Q 150 30 300 160 T 600 120 T 850 170 T 1000 150"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* Central Interactive Play Button Overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s ease',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              aria-label="Play preview"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
            >
              {isPlaying ? <Pause size={28} fill="#FFFFFF" /> : <Play size={28} fill="#FFFFFF" style={{ marginLeft: '4px' }} />}
            </button>
          </div>

          {/* Floating Control Bar at Bottom (Glassmorphism) */}
          <div
            style={{
              width: '94%',
              maxWidth: '840px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              borderRadius: '16px',
              padding: '0.875rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}
          >
            {/* Left Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {isPlaying ? <Pause size={18} fill="#FFFFFF" /> : <Play size={18} fill="#FFFFFF" style={{ marginLeft: '2px' }} />}
              </button>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0F172A' }}>
                  Synthesized Voice Output
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 500 }}>
                  Model: Aura-v2 English
                </div>
              </div>
            </div>

            {/* Right Waveform Equalizer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {[18, 32, 24, 40, 20, 36, 16, 28].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: '3.5px',
                    height: isPlaying ? `${h}px` : '12px',
                    backgroundColor: isPlaying ? '#2563EB' : '#94A3B8',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease',
                    animation: isPlaying ? `wave 1s ease-in-out infinite alternate ${i * 0.1}s` : 'none'
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

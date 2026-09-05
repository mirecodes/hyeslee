import React from 'react';
import { MediaPreview } from './MediaPreview';
import { FileText, Video } from 'lucide-react';

const courseProjects = [
  {
    id: 'course-1',
    title: 'Swan Book Stand',
    role: 'Mechatronics Competition',
    period: 'Spring 2025',
    category: 'Mechatronics | SNU',
    description: 'Built a mechatronic reading stand that automatically scans, interprets, and turns book pages without destruction.',
    mediaUrl: `${import.meta.env.BASE_URL}images/projects/swan-book-stand.png`,
    mediaType: 'image' as const,
    metrics: '3rd Place Award',
    pdfUrl: `${import.meta.env.BASE_URL}papers/swan-book-stand.pdf`,
    videoUrl: 'https://www.youtube.com/watch?v=4cHLKh9sdVk'
  },
  {
    id: 'course-2',
    title: 'Three-Point Bending Bridge Design Competition',
    role: 'Materials & Manufacturing Contest',
    period: 'Spring 2025',
    category: 'Materials & Manufacturing | SNU',
    description: 'Achieved 140 kg load resistance under 3-point bending test using a 90 g carbon-fiber composite structure.',
    mediaUrl: `${import.meta.env.BASE_URL}images/projects/carbon-bridge.jpg`,
    mediaType: 'image' as const,
    aspectRatio: '3 / 4',
    metrics: '1st Place Award'
  },
  {
    id: 'course-3',
    title: 'Jumping & Locomotive Robot Design',
    role: 'Creative Engineering Design Project',
    period: 'Fall 2020',
    category: 'Creative Engineering Design | SNU',
    description: 'Designed a rubber band–actuated jumping robot using a wooden-link structure. Designed a wooden-link locomotive robot based on joint–link locomotion principles.',
    mediaUrl: `${import.meta.env.BASE_URL}images/projects/jumping-robot.jpg`,
    mediaType: 'image' as const,
    aspectRatio: '3 / 4'
  }
];

export const CourseProjectSection: React.FC = () => {

  return (
    <section id="projects" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="section-header">
          <h2>Projects</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {courseProjects.map((project) => (
            <div
              key={project.id}
              className="course-project-item-row"
              style={{
                borderBottom: '1px solid #F1F5F9',
                paddingBottom: '2.5rem'
              }}
            >
              {/* Left Side: Media Preview */}
              <div style={{ width: '240px', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
                <MediaPreview
                  mediaUrl={project.mediaUrl}
                  mediaType={project.mediaType || 'image'}
                  title={project.title}
                  width={(project as any).aspectRatio === '3 / 4' ? '160px' : '240px'}
                  aspectRatio={(project as any).aspectRatio || '4 / 3'}
                />
              </div>

              {/* Right Side: Content Description */}
              <div style={{ flex: 1, minWidth: 0 }}>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.375rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-blue)' }}>
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      backgroundColor: '#F1F5F9',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      padding: '2px 8px'
                    }}>
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                  {project.title}
                </h3>

                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.625rem' }}>
                  {project.role} • {project.period}
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {project.description}
                </p>

                {/* Keywords Plain Text */}
                {(project as any).tags && (project as any).tags.length > 0 && (
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Keywords: </span>
                    <span>{(project as any).tags.join(', ')}</span>
                  </div>
                )}

                {/* Pill Style Action Buttons (PDF, Video) */}
                {((project as any).pdfUrl || (project as any).videoUrl) && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.625rem', marginTop: '0.75rem' }}>
                    {(project as any).pdfUrl && (
                      <a
                        href={(project as any).pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tag-pill-outline"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', padding: '4px 14px', fontSize: '0.8125rem' }}
                      >
                        <FileText size={13} />
                        <span>PDF</span>
                      </a>
                    )}
                    {(project as any).videoUrl && (
                      <a
                        href={(project as any).videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tag-pill-outline"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', padding: '4px 14px', fontSize: '0.8125rem' }}
                      >
                        <Video size={13} />
                        <span>Video</span>
                      </a>
                    )}
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .course-project-item-row {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }
        @media (max-width: 640px) {
          .course-project-item-row {
            flex-direction: column;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

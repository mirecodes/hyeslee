import React from 'react';
import { Globe, FileText, Video, BookMarked } from 'lucide-react';

const publicationData = [
  {
    id: 'pub-rora',
    title: 'RORA: Realistic Object Reconstruction with Articulation',
    authors: ['HS. Lee', 'YS. Lee', 'KT. Lee', 'DJ. Lee', 'YS. Lee'],
    venue: 'arXiv preprint arXiv:2608.04842 (under review)',
    year: 2026,
    type: 'Preprint' as const,
    doi: 'arXiv:2608.04842',
    abstract: 'Designed an end-to-end pipeline for real-to-sim articulated object reconstruction, suggesting Automatic Joint Suggestion Algorithm with Human-in-the-loop tuning process. The reconstructed asset is used in simulation for humanoid manipulation tasks.',
    mediaUrl: `${import.meta.env.BASE_URL}images/researches/res-1.png`,
    mediaType: 'image' as const,
    demoUrl: 'https://mirecodes.github.io/project-rora/',
    pdfUrl: 'https://arxiv.org/abs/2608.04842',
    videoUrl: 'https://www.youtube.com/watch?v=HHk9_XTM3uw',
    tags: ['Digital Twin', 'Real-to-Sim', 'Gaussian Splatting', 'Articulation', 'Robot Manipulation']
  }
];

export const PublicationSection: React.FC = () => {
  return (
    <section id="publications" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="section-header">
          <h2>Publications</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {publicationData.map((pub) => (
            <div
              key={pub.id}
              style={{
                borderBottom: '1px solid #F1F5F9',
                paddingBottom: '2rem'
              }}
            >
              {/* Top Row: arXiv ID in blue + status tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.375rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                {pub.doi ? (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wave-link"
                    style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-blue)', textDecoration: 'none' }}
                  >
                    {pub.doi}
                  </a>
                ) : (
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-blue)' }}>
                    {pub.type} • {pub.year}
                  </span>
                )}

                {pub.venue && (
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    backgroundColor: '#F1F5F9',
                    border: '1px solid #E2E8F0',
                    borderRadius: '4px',
                    padding: '2px 8px'
                  }}>
                    Under Review
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.375rem', lineHeight: 1.4 }}>
                {pub.title}
              </h3>

              {/* Authors */}
              <div style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                {pub.authors.map((author, idx) => {
                  const isSelf = author.includes('Hyesung Lee') || author.includes('HS. Lee');
                  return (
                    <span key={idx}>
                      <span style={{ fontWeight: isSelf ? 700 : 400, color: isSelf ? 'var(--primary-blue)' : 'inherit', textDecoration: isSelf ? 'underline' : 'none' }}>
                        {author}
                      </span>
                      {idx < pub.authors.length - 1 ? ', ' : ''}
                    </span>
                  );
                })}
              </div>

              {/* Venue */}
              <div style={{ fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <BookMarked size={15} style={{ color: 'var(--primary-blue)' }} />
                <span>{pub.venue}</span>
              </div>

              {/* Capsule (Pill) Style Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.625rem' }}>
                {pub.demoUrl && (
                  <a
                    href={pub.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag-pill-outline"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', padding: '4px 14px', fontSize: '0.8125rem' }}
                  >
                    <Globe size={13} />
                    <span>Project Page</span>
                  </a>
                )}
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag-pill-outline"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', padding: '4px 14px', fontSize: '0.8125rem' }}
                  >
                    <FileText size={13} />
                    <span>{pub.pdfUrl.includes('arxiv') ? 'arXiv' : 'PDF'}</span>
                  </a>
                )}
                {pub.videoUrl && (
                  <a
                    href={pub.videoUrl}
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

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

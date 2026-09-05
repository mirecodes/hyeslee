import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    id: 'edu-1',
    degree: 'Master of Science in Robotics, Systems, and Control',
    institution: 'ETH Zürich (Swiss Federal Institute of Technology Zürich)',
    institutionUrl: 'https://ethz.ch/en.html',
    location: 'Zürich, Switzerland',
    period: 'Sep. 2026 — Present',
    major: 'Master of Science in Robotics, Systems, and Control',
  },
  {
    id: 'edu-2',
    degree: 'Bachelor of Science in Mechanical Engineering & Computer Science and Engineering',
    institution: 'Seoul National University',
    institutionUrl: 'https://www.snu.ac.kr/',
    location: 'Seoul, South Korea',
    period: 'Mar. 2020 — Aug. 2026',
    major: 'Bachelor of Science in Mechanical Engineering, Double Major in Computer Science',
    description: 'Graduated Summa Cum Laude.',
    highlights: [
      'Interactive and Networked Robotics Laboratory (INRoL)',
      'Bio Robotics Laboratory (BRL)',
    ],
    subEvents: [
      {
        id: 'sub-eth',
        period: 'Feb. 2024 — Aug. 2024',
        title: 'Exchange Student in Mechanical Engineering',
        institution: 'ETH Zürich (Mechanical Engineering Department)',
        institutionUrl: 'https://ethz.ch/en.html',
        description: ['One semester exchange in D-MAVT.'],
        highlights: ['Computational Robotics Laboratory (CRL)']
      },
      {
        id: 'sub-military',
        period: 'Mar. 2022 — Oct. 2023',
        title: 'Military Service (Republic of Korea Army Sergeant)',
        institution: 'Republic of Korea Army',
        description: 'Completed 18 months of mandatory military service with Honorable Discharge.'
      }
    ]
  },
  {
    id: 'edu-4',
    degree: 'High School Diploma',
    institution: 'Gwangju Science Academy for Gifted (GSA)',
    institutionUrl: 'https://gsa.gen.hs.kr/',
    location: 'Gwangju, South Korea',
    period: 'Feb. 2017 — Jan. 2019',
    description: ['Top 5 students Award among Graduates', 'Best R&E Award in Physics']
  }
];

// Helper function to parse markdown-style bold text (e.g. **highlight text**) & string array
const parseDescription = (desc: string | string[]) => {
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} style={{ fontWeight: 800, color: 'var(--primary-blue)' }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  if (Array.isArray(desc)) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {desc.map((item, idx) => (
          <p key={idx} style={{ margin: 0 }}>
            {renderText(item)}
          </p>
        ))}
      </div>
    );
  }

  return renderText(desc);
};

export const EducationSection: React.FC = () => {
  return (
    <section id="education" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="section-header">
          <h2>Education</h2>
        </div>

        {/* Timeline Layout matching attached reference image */}
        <div className="timeline-tree">
          
          {educationData.map((edu) => {
            // Extract starting year for year badge pill
            const yearMatch = edu.period.match(/\d{4}/);
            const displayYear = yearMatch ? yearMatch[0] : '2024';

            return (
              <div key={edu.id} className="timeline-year-node">
                
                {/* Year Pill Badge (Matching reference image 2026 / 2025 badge) */}
                <div className="year-pill-badge">
                  {displayYear}
                </div>

                {/* Timeline Entry Item */}
                <div className="timeline-item-entry">
                  {/* Circle Icon Node on vertical line */}
                  <div className="timeline-icon-circle">
                    <GraduationCap size={16} />
                  </div>

                  {/* Degree Title & Institution */}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {edu.degree}
                  </h3>

                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                    {edu.institutionUrl ? (
                      <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="wave-link">
                        {edu.institution}
                      </a>
                    ) : (
                      edu.institution
                    )}
                  </div>

                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                    {(edu as any).gpa ? <span>• GPA: {(edu as any).gpa}</span> : null}
                  </div>

                  {edu.description && (
                    <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                      {parseDescription(edu.description)}
                    </p>
                  )}

                  {/* Tilted / Italic Major Display below Description */}
                  {edu.major && (
                    <div style={{ fontSize: '0.875rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      Major: {edu.major}
                    </div>
                  )}

                  {/* Outlined Pill Tags */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: edu.subEvents ? '1.5rem' : '0' }}>
                      {edu.highlights.map((highlight, idx) => {
                        let targetId = '';
                        if (highlight.includes('INRL') || highlight.includes('Interactive')) targetId = 'res-1';
                        if (highlight.includes('Biorobotics') || highlight.includes('Bio Robotics') || highlight.includes('Bio')) targetId = 'res-4';

                        if (targetId) {
                          return (
                            <a key={idx} href={`#${targetId}`} className="tag-pill-outline" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                              {highlight}
                            </a>
                          );
                        }

                        return (
                          <span key={idx} className="tag-pill-outline">
                            {highlight}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {/* Sub-timeline hollow circles for Exchange Student & Military Service under B.S. */}
                  {edu.subEvents && edu.subEvents.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                      {edu.subEvents.map((sub) => (
                        <div key={sub.id} style={{ position: 'relative', paddingLeft: '0.5rem' }}>
                          {/* Hollow Circle Node precisely centered on the vertical line (left: 0 of timeline-tree) */}
                          <div style={{
                            position: 'absolute',
                            left: '-2.0rem',
                            top: '5px',
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            backgroundColor: '#FFFFFF',
                            border: '3px solid var(--primary-blue)',
                            transform: 'translateX(-50%)',
                            boxSizing: 'border-box',
                            zIndex: 2
                          }} />
                          
                          <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                            {sub.title}
                          </h4>

                          {sub.institution && (
                            <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '0.375rem' }}>
                              {(sub as any).institutionUrl ? (
                                <a href={(sub as any).institutionUrl} target="_blank" rel="noopener noreferrer" className="wave-link">
                                  {sub.institution}
                                </a>
                              ) : (
                                sub.institution
                              )}
                            </div>
                          )}

                          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Calendar size={14} />
                            <span>{sub.period}</span>
                          </div>

                          {sub.description && (
                            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: sub.highlights ? '0.5rem' : '0' }}>
                              {parseDescription(sub.description)}
                            </div>
                          )}

                          {sub.highlights && sub.highlights.length > 0 && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.375rem' }}>
                              {sub.highlights.map((highlight, idx) => {
                                let targetId = '';
                                if (highlight.includes('CRL') || highlight.includes('Computational')) targetId = 'res-3';

                                if (targetId) {
                                  return (
                                    <a key={idx} href={`#${targetId}`} className="tag-pill-outline" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                      {highlight}
                                    </a>
                                  );
                                }

                                return (
                                  <span key={idx} className="tag-pill-outline">
                                    {highlight}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

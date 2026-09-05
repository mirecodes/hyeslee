import React from 'react';
import { MediaPreview } from './MediaPreview';
import { Globe, FileText, Video } from 'lucide-react';

const researchProjects = [
  {
    id: 'res-1',
    title: 'RORA: Realistic Object Reconstruction with Articulation',
    role: 'Bachelor Thesis & Submitted to Journal',
    period: 'Mar. 2025 — Dec. 2025',
    category: 'Interactive & Networked Robotics Lab, SNU',
    labUrl: 'https://www.inrol.snu.ac.kr/',
    description: 'Designed an end-to-end pipeline for real-to-sim articulated object reconstruction, suggesting Automatic Joint Suggestion Algorithm with Human-in-the-loop tuning process. The reconstrucdted asset is used in simulation for humanoid manipulation tasks.',
    supervisors: [
      { name: 'Prof. Yongseok Lee', url: 'https://scholar.google.com/citations?user=iMjIpUkAAAAJ&hl=en' },
      { name: 'Prof. Dongjun Lee', url: 'https://scholar.google.com/citations?user=qKexATgAAAAJ&hl=en' }
    ],
    tags: ['Digital Twin', 'Real-to-Sim', 'Gaussian Splatting', 'Articulation', 'Robot Manipulation',],
    mediaUrl: `${import.meta.env.BASE_URL}images/researches/res-1.png`,
    mediaType: 'image' as const,
    demoUrl: 'https://mirecodes.github.io/project-rora/',
    pdfUrl: 'https://arxiv.org/abs/2608.04842',
    videoUrl: 'https://www.youtube.com/watch?v=HHk9_XTM3uw',
    metrics: 'arXiv:2608.04842 (Under Review)'
  },
  {
    id: 'res-2',
    title: 'Master-Slave Teleoperation System for Cooperative Robot with Compliance and Haptic Feedback',
    role: 'Research Intern',
    period: 'Jan. 2025 — Apr. 2025',
    category: 'AI Research Team, Neuromeka Co., Ltd.',
    labUrl: 'https://en.neuromeka.com/',
    description: 'Built a master-slave teleoperation system for collaborative robot arm. Implemented gravity compensation, force feedback, and compliance control based on the GELLO framework. Trained the robot with ACT and SERL policies.',
    supervisors: [
      { name: 'Dr. Joonho Lee', url: 'https://scholar.google.com/citations?user=6Htb7swAAAAJ&hl=en' }
    ],
    tags: ['Controls', 'Compliance', 'Haptic Feedback', 'Teleoperatoin', 'Data Collectoin'],
    mediaUrl: `${import.meta.env.BASE_URL}images/researches/res-2.png`,
    mediaType: 'image' as const,
    pdfUrl: `${import.meta.env.BASE_URL}papers/neuromeka-teleop.pdf`,
    videoUrl: 'https://youtu.be/wZFTdRmPDlw?si=ZtfYt3tf6WtzqfSY'
  },
  {
    id: 'res-3',
    title: 'Reinforcement Learning for a Wheeled Quadrupedal Robot',
    role: 'Semester Project',
    period: 'Mar. 2024 — Aug. 2024',
    category: 'Computational Robotics Lab, ETH Zürich',
    labUrl: 'https://crl.ethz.ch/',
    description: 'Trained Unitree B2W wheeled-quadrupedal robot with PPO policy. Obtained various stable locomotion styles from hierarchical control designs.',
    supervisors: [
      { name: 'Prof. Dr. Stelian Coros', url: 'https://scholar.google.com/citations?user=sX31JjwAAAAJ&hl=en' }
    ],
    tags: ['Reinforcement Learning', 'PPO policy', 'Wheel-legged locomotion', 'Unitree B2W',],
    mediaUrl: `${import.meta.env.BASE_URL}images/researches/res-3.png`,
    mediaType: 'image' as const,
    pdfUrl: `${import.meta.env.BASE_URL}papers/eth-b2w-locomotion.pdf`,
    videoUrl: '#'
  },
  {
    id: 'res-4',
    title: 'Controlled Buckling of Soft Everting Structures for Reconfigurable Robotic Grippers',
    role: 'Undergraduate Research Intern',
    period: 'Oct. 2023 — Jan. 2024',
    category: 'Bio Robotics Lab, SNU',
    labUrl: 'https://www.biorobotics.snu.ac.kr/',
    description: 'Designed and manufactured pneumatic elongation soft robot with controlled buckling. Applied origami structure on soft robot and modeled 3D folding kinematics mathematically.',
    supervisors: [
      { name: 'Prof. Kyujin Cho', url: 'https://scholar.google.com/citations?user=0tZCHoUAAAAJ&hl=en' }
    ],
    tags: ['Elongation Robot', 'Origami Structure', 'Penumatic Actuation', 'Soft Robotics'],
    mediaUrl: `${import.meta.env.BASE_URL}images/researches/res-4.png`,
    mediaType: 'image' as const,
    pdfUrl: `${import.meta.env.BASE_URL}papers/brl-soft-robotics.pdf`,
    videoUrl: '#'
  }
];

export const ResearchSection: React.FC = () => {

  return (
    <section id="researches" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="section-header">
          <h2>Researches</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {researchProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="research-item-row"
              style={{
                borderBottom: '1px solid #F1F5F9',
                paddingBottom: '2.5rem'
              }}
            >
              {/* Left Side: 4:3 Aspect Ratio Media Preview */}
              <MediaPreview
                mediaUrl={project.mediaUrl}
                mediaType={project.mediaType || 'image'}
                title={project.title}
                width="240px"
              />

              {/* Right Side: Content Description & Links */}
              <div style={{ flex: 1, minWidth: 0 }}>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.375rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.labUrl ? (
                    <a
                      href={project.labUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-blue)', textDecoration: 'none' }}
                      className="wave-link"
                    >
                      {project.category}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary-blue)' }}>
                      {project.category}
                    </span>
                  )}
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

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                  {project.description}
                </p>

                {/* Supervisor Row */}
                {project.supervisors && project.supervisors.length > 0 && (
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.875rem' }}>
                    <span>Supervised by </span>
                    {project.supervisors.map((sup, idx) => (
                      <React.Fragment key={sup.name}>
                        {idx > 0 && ', '}
                        <a
                          href={sup.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}
                        >
                          {sup.name}
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {/* Keywords Plain Text */}
                {project.tags && project.tags.length > 0 && (
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Keywords: </span>
                    <span>{project.tags.join(', ')}</span>
                  </div>
                )}

                {/* Pill Style Action Buttons (Project Page, Archive, Video, Repository) */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.625rem' }}>
                  {/* 1. Project Page */}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tag-pill-outline"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', padding: '4px 14px', fontSize: '0.8125rem' }}
                    >
                      <Globe size={13} />
                      <span>Project Page</span>
                    </a>
                  )}

                  {/* 2. Paper (PDF / arXiv) */}
                  {(project.pdfUrl || (project as any).arxivUrl) && (
                    <a
                      href={project.pdfUrl || (project as any).arxivUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tag-pill-outline"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', padding: '4px 14px', fontSize: '0.8125rem' }}
                    >
                      <FileText size={13} />
                      <span>{project.pdfUrl?.includes('arxiv') ? 'arXiv' : 'PDF'}</span>
                    </a>
                  )}

                  {/* 3. Video (YouTube) */}
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

              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .research-item-row {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }
        @media (max-width: 640px) {
          .research-item-row {
            flex-direction: column;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

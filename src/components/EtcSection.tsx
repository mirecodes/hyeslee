import React from 'react';
import { Award, Lightbulb, Users, GraduationCap, ExternalLink } from 'lucide-react';

const scholarshipData = [
  {
    id: 'sch-1',
    title: 'National Presidential Science Scholarship',
    organization: 'Republic of Korea',
    year: '2020 — 2025',
    amount: 'Full 4-Year Tuition & Stipend',
    description: 'Full coverage of 4 years tuition and living stipend awarded to top science and engineering scholars.'
  },
  {
    id: 'sch-2',
    title: 'Talent Scholarship of Jeollanam-do Province',
    organization: 'Jeolla-namdo State',
    year: '2020 — 2025',
    amount: 'Full 4-Year Talent Development Grant',
    description: 'Full coverage 4-year talent development grant.'
  },
  {
    id: 'sch-3',
    title: 'Han-sung Nobel Scholarship',
    organization: 'Hanseong Sonjaehan Scholarship Foundation',
    year: '2018',
    description: 'Awarded to promising high school science scholars.'
  }
];

const patentData = [
  {
    id: 'pat-1',
    title: 'Flashlight with a Light-Transmitting Member',
    patentNumber: 'Patent No. KR 10-2014098 B1 (App. 10-2018-0010621) (2019)',
    status: 'Granted',
    url: 'https://patents.google.com/patent/KR102014098B1/en'
  }
];

const activityData = [
  {
    id: 'act-1',
    title: 'SNU Tomorrow\'s Engineering Membership (STEM)',
    organization: 'College of Engineering, SNU',
    period: 'Mar. 2025 — Aug. 2026',
    description: 'Honor Society in College of Engineering, SNU. Operated international student events in Seoul and delivered academic talks on robot learning frameworks.',
    highlights: ['SNU Engineering Honor Society', 'Robot Learning Academic Talk Leader']
  },
  {
    id: 'act-2',
    title: 'Bulnabi Autonomous Flight Drone Club',
    organization: 'College of Engineering, SNU',
    period: 'Sep. 2024 — Dec. 2024',
    description: 'Acquired practical experience in drone hardware, control, and simulation-based validation.'
  },
  {
    id: 'act-3',
    title: 'Military Open Source Hackathon',
    organization: 'Ministry of Defense, Republic of Korea',
    period: 'Sep. 2022 — Nov. 2022',
    description: 'Developed a real-time web reporting and monitoring application for broken facilities.'
  },
  {
    id: 'act-4',
    title: 'Military Service',
    organization: 'Republic of Korea Army',
    period: 'Mar. 2022 — Oct. 2023',
    description: 'Completed 18 months of mandatory military service as Army Sergeant with Honorable Discharge.'
  },
  {
    id: 'act-5',
    title: 'SNU Buddy (Official Student Organization of International Affairs)',
    organization: 'Seoul National University',
    period: 'Aug. 2021 — Feb. 2022',
    description: 'Organized networking events for incoming exchange students and supported international student adaptation.'
  }
];

const volunteerData = [
  {
    id: 'vol-1',
    role: 'Teaching Tutor — Calculus 1',
    organization: 'College of Engineering, SNU',
    period: 'Winter 2023',
    description: 'Conducted problem-solving tutoring sessions for undergraduate Calculus 1 students.'
  },
  {
    id: 'vol-2',
    role: 'Mathematics Volunteer Class for Underprivileged Youth',
    organization: 'Community Youth Center',
    period: 'Winter 2023',
    description: 'Taught mathematics to underprivileged youth students.'
  },
  {
    id: 'vol-3',
    role: 'Science Class for High School Equivalency Exam Students',
    organization: 'Educational Volunteer Corps',
    period: 'Winter 2021',
    description: 'Taught science subjects for students preparing for the high school equivalency examination.'
  },
  {
    id: 'vol-4',
    role: 'C Programming Instructor for Middle School Students',
    organization: 'SNU Student Volunteer Brigade',
    period: 'Winter 2020',
    description: 'Taught fundamental C programming and computational thinking to middle school students.'
  }
];

export const EtcSection: React.FC = () => {
  return (
    <section id="etc" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="section-header">
          <h2>Other Activities</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          
          {/* 1. Scholarships */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem', width: 'fit-content' }}>
              <Award size={20} style={{ color: 'var(--primary-blue)' }} />
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Scholarships
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {scholarshipData.map((sch) => (
                <div key={sch.id} style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {sch.title}
                    </h4>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {sch.year}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '0.375rem' }}>
                    {sch.organization} {sch.amount && `— ${sch.amount}`}
                  </div>
                  {sch.description && (
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {sch.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Patents */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem', width: 'fit-content' }}>
              <Lightbulb size={20} style={{ color: 'var(--primary-blue)' }} />
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Patents
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {patentData.map((pat) => (
                <div key={pat.id} style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {pat.title}
                    </h4>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      backgroundColor: '#F1F5F9',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      padding: '2px 8px'
                    }}>
                      {pat.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {pat.patentNumber}
                  </div>
                  {(pat as any).description && (
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                      {(pat as any).description}
                    </p>
                  )}
                  {pat.url && (
                    <a
                      href={pat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="publication-link"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary-blue)', textDecoration: 'none' }}
                    >
                      <ExternalLink size={14} /> View Patent on Google Patents
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Activities */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem', width: 'fit-content' }}>
              <Users size={20} style={{ color: 'var(--primary-blue)' }} />
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Activities
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {activityData.map((act) => (
                <div key={act.id} style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {act.title}
                    </h4>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {act.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '0.375rem' }}>
                    {act.organization}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Teaching */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem', width: 'fit-content' }}>
              <GraduationCap size={20} style={{ color: 'var(--primary-blue)' }} />
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Teaching
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {volunteerData.map((vol) => (
                <div key={vol.id} style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {vol.role}
                    </h4>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {vol.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '0.375rem' }}>
                    {vol.organization}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {vol.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

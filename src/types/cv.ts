export interface ProfileInfo {
  name: string;
  englishName: string;
  role: string;
  tagline: string;
  bio: string[];
  profileImage: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl?: string;
  cvUrl?: string;
  interests: string[];
  status: string;
}

export interface SubEventItem {
  id: string;
  period: string;
  title: string;
  institution?: string;
  description?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  major: string;
  gpa?: string;
  description?: string;
  highlights?: string[];
  subEvents?: SubEventItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  period: string;
  category: string;
  description: string;
  tags: string[];
  projectType: 'research' | 'course';
  image?: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'gif';
  githubUrl?: string;
  demoUrl?: string;
  metrics?: string;
  highlights?: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Conference' | 'Journal' | 'Workshop' | 'Preprint';
  pdfUrl?: string;
  codeUrl?: string;
  doi?: string;
  abstract?: string;
}

export interface ScholarshipItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  amount?: string;
  description?: string;
}

export interface PatentItem {
  id: string;
  title: string;
  patentNumber: string;
  status: 'Granted' | 'Filed' | 'Pending';
  year: string;
  assignee: string;
  description?: string;
  url?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface VolunteerItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

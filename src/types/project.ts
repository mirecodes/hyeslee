export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: string;
}

export interface TechItem {
  name: string;
  category: string;
  iconName: string;
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  badge?: string;
  actionText: string;
  actionUrl: string;
}

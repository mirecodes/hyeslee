import type { Project, FeatureCardItem, TechItem } from '../types/project';

export const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'tts-engine',
    title: 'Text to Speech Engine',
    category: 'AI & Synthesis',
    description: 'Ultra-low latency neural text-to-speech engine optimized for real-time web streaming applications.',
    icon: 'Volume2',
    actionText: 'Explore TTS →',
    actionUrl: '#projects'
  },
  {
    id: 'stt-intelligence',
    title: 'Speech to Text',
    category: 'Audio Intelligence',
    description: 'High-accuracy whisper-based speech recognition model supporting multilingual punctuation and speaker diarization.',
    icon: 'Mic',
    actionText: 'Explore STT →',
    actionUrl: '#projects'
  },
  {
    id: 'voice-cloning',
    title: 'Voice Cloning Studio',
    category: 'Generative Audio',
    description: 'Zero-shot voice cloning framework capable of reproducing natural timbre and expressiveness from 3-second samples.',
    icon: 'Sliders',
    actionText: 'Explore Cloning →',
    actionUrl: '#projects'
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'auralis-ai',
    title: 'Auralis Web Audio Platform',
    category: 'Web Application / React & TS',
    description: 'A modern AI audio synthesis platform with real-time waveform visualization, customizable voice models, and interactive API playgrounds.',
    tags: ['React', 'TypeScript', 'WebAudio API', 'Vite', 'CSS Modules'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    metrics: '99.4% Synthesized Fidelity'
  },
  {
    id: 'cloud-analytics',
    title: 'Pulse Analytics Dashboard',
    category: 'SaaS / Full Stack',
    description: 'Real-time telemetry and API monitoring interface with customized SVG charts, dark/light theme tokens, and websocket streaming.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    metrics: '120k Events / Sec'
  },
  {
    id: 'neural-design',
    title: 'Modular UI Design System',
    category: 'Design Engineering',
    description: 'A robust, accessible React component design system with CSS custom properties, automated token generation, and GitHub Pages documentation.',
    tags: ['TypeScript', 'Design System', 'React', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    metrics: '100% Type Safe'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'TypeScript', category: 'Language', iconName: 'Code' },
  { name: 'React 19', category: 'Framework', iconName: 'Atom' },
  { name: 'Vite', category: 'Build Tool', iconName: 'Zap' },
  { name: 'Node.js', category: 'Runtime', iconName: 'Server' },
  { name: 'GitHub Pages', category: 'DevOps', iconName: 'Globe' },
  { name: 'CSS System', category: 'Styling', iconName: 'Palette' }
];

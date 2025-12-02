export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: string;
  details?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  description?: string;
  image?: string;
}

export interface AcademicModule {
  type: 'intro' | 'grades' | 'thesis' | 'project' | 'achievements';
  label: string; // The text shown on the image (e.g., "Thesis")
  title: string; // The title shown in the content area
  content: string | string[]; // The main text content
  image: string;
  tags?: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  details: string[]; // Keep for backward compatibility or simple view
  description?: string; // Keep for backward compatibility
  image?: string;
  modules?: AcademicModule[]; // New field for the interactive layout
}

export interface Recommendation {
  author: string;
  title: string;
  relation: string;
  content: string[];
}

export interface TranscriptCourse {
  title: string;
  credits: number;
  score: number;
  grade: string;
  semester: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  achievements: string[];
}

export interface SkillItem {
  category: string;
  items: string[];
}

export interface NavSection {
  id: string;
  label: string;
  icon: any;
  subItems?: { id: string; label: string }[];
}
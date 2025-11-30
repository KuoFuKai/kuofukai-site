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

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  details: string[];
  description?: string;
  image?: string;
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
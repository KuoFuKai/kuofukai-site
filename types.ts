export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: string;
  details?: string;
  gallery?: AcademicGalleryItem[]; // New field for timeline photo marquee
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
  label: string; // Tab Label
  title: string; // Content Title
  content: string | string[]; 
  tags?: string[];
  honors?: string[]; // Field to embed honors/awards list inside a module (e.g. Intro)
}

export interface AcademicGalleryItem {
  image: string;
  description: string;
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
  modules?: AcademicModule[]; 
  gallery?: AcademicGalleryItem[]; // New field for the independent photo marquee
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

export interface SkillDetail {
  name: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Expert';
  startYear: string;
}

export interface SkillItem {
  category: string;
  items: SkillDetail[];
}

export interface NavSection {
  id: string;
  label: string;
  icon: any;
  subItems?: { id: string; label: string }[];
}
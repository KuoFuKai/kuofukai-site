
/**
 * Represents a single item in the main timeline.
 */
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: string;
  details?: string;
  gallery?: AcademicGalleryItem[]; // New field for timeline photo marquee
}

/**
 * Represents a professional experience entry (Job).
 */
export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  tagline?: string; // Added field for company description/market position
  department?: string; // Added field for department name
  modules: AcademicModule[]; // Unified structure
  gallery?: AcademicGalleryItem[];
  image?: string; // Keep for backward compatibility if needed, though gallery is preferred
  achievements?: string[]; // Legacy field for backward compatibility
  description?: string; // Legacy field for backward compatibility
}

/**
 * Represents an extracurricular activity.
 */
export interface AcademicActivity {
  name: string;
  year: string;
}

/**
 * Represents a part-time job or internship during academic years.
 */
export interface AcademicJob {
  role: string;
  company: string;
  year: string;
}

/**
 * Represents a content module within an Education or Experience entry.
 * Used to structure detailed information like "Intro", "Grades", "Thesis", etc.
 */
export interface AcademicModule {
  type: 'intro' | 'grades' | 'thesis' | 'project' | 'achievements';
  label: string; // Tab Label
  title: string; // Content Title
  content: string | string[];
  tags?: string[];
  honors?: { title: string; year: string }[]; // Changed to object array to support year badges
  activities?: AcademicActivity[]; // New field for extracurricular activities
  jobs?: AcademicJob[]; // New field for internships/part-time work in academic context
}

/**
 * Represents an image in the gallery marquee.
 */
export interface AcademicGalleryItem {
  image: string;
  description: string;
}

/**
 * Represents an educational background entry.
 */
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
  stats?: {
    gpa?: string;
    avgScore?: string;
    rank?: string;
    rankLabel?: string; // Added to support custom labels like "2-Year Grad Rate"
  };
}

/**
 * Represents a professional or academic recommendation.
 */
export interface Recommendation {
  author: string;
  title: string;
  relation: string;
  content: string[];
}

/**
 * Represents a single course record in the transcript.
 */
export interface TranscriptCourse {
  title: string;
  credits: number;
  score: number;
  grade: string;
  semester: string;
}

/**
 * Represents a highlighted project (e.g., Thesis, Capstone).
 */
export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  achievements: string[];
}

/**
 * Represents a specific skill with proficiency and experience duration.
 */
export interface SkillDetail {
  name: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Expert';
  startYear: string;
}

/**
 * Represents a category of skills.
 */
export interface SkillItem {
  category: string;
  items: SkillDetail[];
}

/**
 * Represents a navigation section in the sidebar.
 */
export interface NavSection {
  id: string;
  label: string;
  icon: any;
  subItems?: { id: string; label: string }[];
}
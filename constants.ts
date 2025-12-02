import { TimelineItem, ExperienceItem, EducationItem, Recommendation, TranscriptCourse, ProjectItem, SkillItem } from './types';

export const PERSONAL_INFO = {
  name: "Kevin",
  tagline: "Resilience. Innovation. The American Dream.",
  about: `Although my undergraduate degree was in Information and Communications rather than computer science, I have been deeply passionate about software development since college. I believe that well-designed software has the power to improve people’s quality of life. 
  
  I am not a person born with a silver spoon or innate genius. I often think it is a miracle that I did not go astray. I was born into a family that had fallen on hard times. My parents, who only had a junior high school education, worked as an ironworker and a cleaner. I lost my father to suicide due to economic pressures before my high school exams, and my mother passed away from cancer during my early career. Raised by my grandmother, I learned independence early.
  
  Despite these hardships, I have never made a choice I regretted. From self-teaching Android development to caring for my terminally ill mother while working full-time, and later achieving top marks in my Master's degree while working as a Senior Engineer, I give my all to everything I do.`,
  dei_statement: `Coming from an impoverished background with limited educational resources, I learned to be resourceful and resilient. As an Asian male, my diversity lies in my non-traditional path: a "late bloomer" who overcame significant family tragedy and economic hardship to excel in engineering. I have developed a strong capacity for empathy, allowing me to connect with people from all walks of life—whether leading study groups in a language school in the Philippines or hosting international friends in Taiwan. My mentors have described me as "a burning sun," bringing energy and cohesion to diverse teams.`
};

export const TIMELINE: TimelineItem[] = [
  {
    year: "Childhood",
    title: "Humble Beginnings",
    description: "Raised by grandmother. Parents worked labor jobs. Overcame father's suicide before high school exams.",
    icon: "User",
    details: "Growing up in a low-income household taught me the value of every resource. I learned resilience early on, understanding that my path would require twice the effort."
  },
  {
    year: "High School",
    title: "The Turning Point",
    description: "Ranked last until 11th grade. Scored full marks in English, then became 1st in all subjects. Graduated top of the class.",
    icon: "TrendingUp",
    details: "A single success in an English exam sparked a chain reaction of confidence. I realized that with focused effort, I could master any subject, eventually graduating at the top of my class."
  },
  {
    year: "2015",
    title: "Self-Taught Success",
    description: "Taught myself Java/Android. Developed an award-winning travel app in 1 month during senior year.",
    icon: "Smartphone",
    details: "While my peers focused on design, I dove into code. I built a fully functional Android app with Google Maps integration from scratch, winning Best System Design."
  },
  {
    year: "2016",
    title: "Military Service",
    description: "Served in a remote island outpost (3% chance). Endured harsh conditions and 0°C weather with resilience.",
    icon: "Shield",
    details: "Stationed on a frontline island, I stood guard in freezing temperatures. The physical and mental endurance I built here continues to serve me in my engineering career."
  },
  {
    year: "2017",
    title: "Synnex Technology",
    description: "Started as a non-CS major struggling in a dev role. Became a core pillar, optimizing workflows.",
    icon: "Briefcase",
    details: "My first dev job was brutal. I cried in the bathroom from frustration but refused to quit. Within a year, I was optimizing systems that saved the company significant time and money."
  },
  {
    year: "2019",
    title: "Caregiver",
    description: "Cared for mother with terminal cancer and bipolar disorder while working full-time.",
    icon: "Heart",
    details: "Balancing a full-time engineering role with 24/7 caregiving for my terminally ill mother was the hardest period of my life, but it forged an unbreakable spirit."
  },
  {
    year: "2022",
    title: "NCKU Master's",
    description: "Applied immediately after mother's passing. Admitted to Engineering Science program.",
    icon: "BookOpen",
    details: "Honoring my promise to pursue higher education, I prepared my application in just two days after her passing and was accepted into a top engineering program."
  },
  {
    year: "2022-2024",
    title: "Dual Life",
    description: "Senior Engineer at Delta + Master's Student. Averaged 3 hours of sleep.",
    icon: "Zap",
    details: "Working days at Delta Electronics and studying nights/weekends at NCKU. I slept 3 hours a night to maintain a 3.97 GPA and perform at a senior engineering level."
  },
  {
    year: "2024",
    title: "Thesis & Awards",
    description: "Highest score in oral defense. Presented at ISASD Tokyo. IET Honorable Mention.",
    icon: "Award",
    details: "My thesis on Generative AI on Edge Devices received international recognition. I traveled to Tokyo to present it, marking a major academic milestone."
  },
  {
    year: "Present",
    title: "The Next Chapter",
    description: "Debt-free, stable, and ready to pursue a US Graduate degree.",
    icon: "Plane",
    details: "At 32, I am finally free of financial burdens and family obligations. I am ready to bring my rich life experience and technical skills to a US graduate program."
  }
];

export const SKILLS: SkillItem[] = [
  {
    category: "Languages & Core",
    items: ["Java", "Python", "SQL", "C/C++", "JavaScript/TypeScript"]
  },
  {
    category: "Frameworks & Tools",
    items: ["Spring Boot", "React", "Docker", "Kubernetes", "Android SDK", "Git"]
  },
  {
    category: "AI & Data",
    items: ["PyTorch", "YOLO", "RAG (Retrieval Augmented Generation)", "LLM Integration", "NVIDIA Jetson", "OpenCV"]
  },
  {
    category: "Industry Knowledge",
    items: ["Smart Manufacturing", "IPC-CFX", "EDI/API Integration", "Agile/Scrum", "System Architecture"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "delta",
    company: "Delta Electronics",
    role: "Senior Software Design Engineer",
    period: "July 2022 – March 2025",
    location: "Tainan, Taiwan",
    achievements: [
      "Analyzed and developed industrial automation applications, including monitoring software for multi-vendor equipment such as pick-and-place machines and reflow ovens.",
      "Held regular meetings with equipment vendors (Panasonic, Ersa, Rehm) to ensure development of IPC-CFX data structures aligned with Industry 4.0 strategy."
    ],
    description: "At Delta, I bridged the gap between hardware and software in a high-stakes manufacturing environment. I led the development of monitoring systems that are critical for the SMT process, working directly with international equipment vendors to standardize data protocols."
  },
  {
    id: "synnex",
    company: "Synnex Technology Intl",
    role: "Senior Java Full Stack Developer",
    period: "February 2017 – June 2022",
    location: "Taipei, Taiwan",
    achievements: [
      "Collaborated with international vendors (Apple, Cisco, Google, HP, Microsoft) to develop EDI/API data transmission systems.",
      "Developed shared functionalities covering 80% of data exchange scenarios, reducing B2B development time from a week to a day.",
      "Completed a critical two-week project in two days, securing a client's AUD 100,000 reward."
    ],
    description: "Starting as a junior developer, I rapidly grew into a senior role. My focus was on high-efficiency data exchange platforms. I took pride in optimizing legacy code and creating reusable frameworks that drastically reduced development time for the entire team."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "master",
    school: "National Cheng Kung University (NCKU)",
    degree: "Master of Science in Engineering Science",
    period: "Sep 2022 – Jun 2024",
    location: "Tainan, Taiwan",
    gpa: "3.97/4.3 (Avg: 91.3)",
    modules: [
      {
        type: "intro",
        label: "Introduction",
        title: "Master's Journey",
        content: "My Master's journey was defined by efficiency and innovation. Despite working full-time, I maintained top grades. My research focused on running modern Generative AI on edge devices (NVIDIA Jetson), proving that powerful AI doesn't always need a cloud connection.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
        tags: ["Edge AI", "NVIDIA Jetson", "Resilience"]
      },
      {
        type: "grades",
        label: "Transcript",
        title: "Academic Excellence",
        content: [
          "GPA: 3.97/4.3 (Average: 91.3)",
          "Artificial Intelligence: 95 (A+)",
          "Digital Integrated Circuit Design: 95 (A+)",
          "Heterogeneous Multicore Systems: 94 (A+)",
          "Computer Vision: 88 (A)"
        ],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
        tags: ["GPA 3.97", "Top of Class"]
      },
      {
        type: "thesis",
        label: "Thesis",
        title: "Generative AI on Edge",
        content: "Thesis: Developing a Mobile Learning and Tour-Guiding System Based on Generative AI Approach. I proposed a low-energy Multimodal Large Language Model (MLLM) architecture integrated with RAG and YOLO, capable of running offline on NVIDIA Jetson hardware.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        tags: ["LLM", "RAG", "YOLO", "Python"]
      },
      {
        type: "achievements",
        label: "Honors",
        title: "Awards & Recognition",
        content: [
          "Highest Score in Oral Defense among all candidates.",
          "Honorable Mention by IET Taipei Local Network (2024).",
          "Oral Presentation at ISASD 2024 in Tokyo, Japan."
        ],
        image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=1000&auto=format&fit=crop",
        tags: ["IET Award", "ISASD Tokyo"]
      }
    ],
    details: [], // Fallback
    description: "" // Fallback
  },
  {
    id: "university",
    school: "Shih Hsin University",
    degree: "Bachelor of Arts in Info. & Comms.",
    period: "Sep 2011 – Jun 2015",
    location: "Taipei, Taiwan",
    gpa: "3.8/4.0 (Avg: 84.1)",
    modules: [
      {
        type: "intro",
        label: "Introduction",
        title: "The Self-Taught Developer",
        content: "Although my degree was in Info & Comms, I steered my education towards computer science. My capstone project was a testament to self-learning: I built a complete Android app using Google Maps API by studying books in the library.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
        tags: ["Self-Taught", "Android", "Java"]
      },
      {
        type: "grades",
        label: "Transcript",
        title: "Core CS Coursework",
        content: [
          "Computer & Information Tech: 99 (A)",
          "Image Digitizing: 95 (A)",
          "Computer Animation II: 95 (A)",
          "Intro to Info & Comm: 94 (A)"
        ],
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
        tags: ["GPA 3.8", "Computer Science"]
      },
      {
        type: "project",
        label: "Capstone",
        title: "Android Travel Planner",
        content: "Independently developed an Android application integrating Google Maps API to assist independent travelers. Built entirely through self-study of Java and Android frameworks, doing the work of a full team solo.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
        tags: ["Best System Design", "Google Maps API"]
      },
      {
        type: "achievements",
        label: "Awards",
        title: "Undergraduate Honors",
        content: [
          "Best System Design Award (2015) - Dept. of Info & Comms",
          "Mayor’s Award (2011)",
          "Model Student Award (2011)"
        ],
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1000&auto=format&fit=crop",
        tags: ["Top Honors", "Leadership"]
      }
    ],
    details: [],
    description: ""
  },
  {
    id: "highschool",
    school: "Jingwen High School",
    degree: "High School Diploma",
    period: "Sep 2008 – Jun 2011",
    location: "Taipei, Taiwan",
    modules: [
      {
        type: "intro",
        label: "Introduction",
        title: "The Turning Point",
        content: "This was my turning point. Coming from the bottom of the rankings, I discovered the joy of academic achievement through sheer hard work. Overcoming my father's tragic passing right before exams, I still managed to graduate at the top of my class.",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop",
        tags: ["Resilience", "Top Rank"]
      },
      {
        type: "achievements",
        label: "Achievements",
        title: "Graduating Top of Class",
        content: [
          "Ranked 1st in class (2010, 2011)",
          "Mayor’s Award to Outstanding Graduates",
          "Transformation: From last place to Valedictorian level performance."
        ],
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop",
        tags: ["#1 Rank", "Mayor's Award"]
      }
    ],
    details: [],
    description: ""
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    author: "Mu-Yen Chen",
    title: "Professor, Dept. of Engineering Science",
    relation: "Thesis Advisor @ NCKU",
    content: [
      "Kevin distinguishes himself through his academic excellence, research maturity, self-directed learning, and ability to execute complex ideas effectively.",
      "During his oral defense, Kevin earned the highest score among all candidates. One committee member even remarked that his thesis demonstrated 'doctoral-level scope and depth'.",
      "He is resilient, highly motivated, and capable of rapid growth in demanding environments."
    ]
  },
  {
    author: "Kuo-Lun Hsiao",
    title: "Professor, Dept. of Information Management",
    relation: "Thesis Committee @ NTCUST",
    content: [
      "Completing coursework and producing a thesis within two years is already challenging for most part-time students in Taiwan; Kevin not only achieved this but produced a thesis of notably high quality.",
      "Kevin is a diligent, highly motivated, and rapidly growing researcher. I fully recommend him for admission."
    ]
  },
  {
    author: "Greg Kuo",
    title: "Department Chief, IT-AIoT",
    relation: "Supervisor @ Delta Electronics",
    content: [
      "Unlike many part-time graduate students who focus primarily on obtaining a degree, Kevin had a genuine passion for learning and research.",
      "I was impressed by his resilience and optimism, especially considering the challenges he had overcome in his personal life.",
      "Kevin is a hard-working engineer with excellent learning capacity and resilience under pressure."
    ]
  }
];

export const TRANSCRIPTS: TranscriptCourse[] = [
  // NCKU
  { title: "Artificial Intelligence", credits: 3, score: 95, grade: "A+", semester: "Fall 2022" },
  { title: "Digital Integrated Circuit Design", credits: 3, score: 95, grade: "A+", semester: "Spring 2023" },
  { title: "Implementation of Heterogeneous Multicore Embedded System", credits: 3, score: 94, grade: "A+", semester: "Spring 2023" },
  { title: "Computer Vision", credits: 3, score: 88, grade: "A", semester: "Fall 2022" },
  { title: "Advanced Data Structures", credits: 3, score: 86, grade: "A", semester: "Spring 2024" },
  { title: "Advanced Algorithm", credits: 3, score: 85, grade: "A", semester: "Spring 2024" },
  // Selected SHU
  { title: "Computer and Information Technology", credits: 2, score: 99, grade: "A", semester: "Spring 2012" },
  { title: "History of Taiwan", credits: 2, score: 98, grade: "A", semester: "Spring 2014" },
  { title: "Image Digitizing", credits: 2, score: 95, grade: "A", semester: "Fall 2012" },
  { title: "Computer Animation II", credits: 4, score: 95, grade: "A", semester: "Spring 2013" },
  { title: "Introduction to Information and Communication (I)", credits: 2, score: 94, grade: "A", semester: "Fall 2011" },
  { title: "Case Study on Digital Resource Management", credits: 3, score: 93, grade: "A", semester: "Spring 2015" },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Generative AI Mobile Guide",
    subtitle: "Master's Thesis (2024)",
    description: "Proposed a low-energy Multimodal Large Language Model (MLLM) architecture capable of running offline on NVIDIA Jetson hardware. Integrated LLMs, RAG, YOLO, and Whisper to support vision, speech, and reasoning for mobile learning at the Tainan Confucius Temple.",
    tags: ["Python", "NVIDIA Jetson", "RAG", "YOLO", "LLM", "Whisper"],
    achievements: [
      "Verified 18.0% learning efficiency increase vs human guides.",
      "Oral Presentation at ISASD Tokyo.",
      "IET Taipei Honorable Mention."
    ]
  },
  {
    title: "Self-Guided Travel Planner",
    subtitle: "Undergraduate Capstone (2015)",
    description: "An independently developed Android application integrating Google Maps API to assist independent travelers. Built entirely through self-study of Java and Android frameworks.",
    tags: ["Java", "Android SDK", "Google Maps API", "SQLite"],
    achievements: [
      "Best System Design Award (Dept. of Info & Comms).",
      "Completed solo while teammates handled non-tech roles."
    ]
  }
];
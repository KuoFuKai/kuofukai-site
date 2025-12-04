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
    year: "1993",
    title: "Humble Beginnings",
    description: "Born into financial adversity and raised by the enduring love of a grandmother.",
    icon: "User",
    details: `I was born into a family that had fallen into decline. Originally, our family owned considerable land in Taipei, but in the year of my birth, my grandfather's company declared bankruptcy. consequently, from the moment I entered the world, my family—including my parents, uncle, and aunt—was desperately working to pay off debts. My parents were not highly educated; both only graduated from junior high school and never attended high school. My mother, an adopted daughter in an old agricultural society, was treated unfairly and poorly by her adoptive parents, and sadly, some of that physical and verbal discipline was passed down to me. Since my parents were busy working, I was raised by my grandmother from a young age. She was my primary caregiver, and I shared the deepest bond with her.

Academically, I was unremarkable as a child. Throughout elementary and junior high school, I consistently ranked in the bottom three of my class, spending my days doodling in textbooks. During junior high, my father often lived at the factory, and my mother frequently worked night shifts at a nursing home caring for the elderly. As an only child, I felt a profound sense of loneliness very early on. During those times, the computer became my best friend. In my third year of junior high, I discovered online that students who got into top high schools seemed to live happy, fulfilling lives. I desperately wanted to turn my life around and be like them. However, even though I wanted to study hard and stayed late at school every day, I didn't know where to start. I lacked the foundation from previous years, and there was no one to guide me toward the future.`,
    gallery: [
      { image: "https://picsum.photos/seed/1993-1/800/600", description: "Early childhood memories" },
      { image: "https://picsum.photos/seed/1993-2/800/600", description: "Raised by grandmother" },
      { image: "https://picsum.photos/seed/1993-3/800/600", description: "A quiet resilience" }
    ]
  },
  {
    year: "2008",
    title: "The Turning Point",
    description: "Rising from academic struggles to the top of the class amidst profound family tragedy.",
    icon: "TrendingUp",
    details: `Because my scores on the national exam were mediocre, I could only enter a very poor-quality high school filled with delinquent students. I will never forget the time I scored full marks on a history exam; a classmate immediately sneered, "You're already in this school, why bother studying?" I ignored him—he was a hooligan, after all. I sought friendship among the few remaining well-behaved students, mostly from other classes.

My grades remained stagnant during my first year. It wasn't until my second year, when I ranked first in an English exam and won the applause of the whole class, that I became unstoppable. I began ranking first in every subject. For the last two years of high school, I was ranked first in my class and fifth in the entire school. However, I never became arrogant; instead, I often served as a tutor for classmates who wanted to learn.

Fate, however, played a cruel joke. Before my major college entrance exam, my father committed suicide due to economic pressures. At the same time, my mother was embroiled in a property dispute with my father's family. In high school, I couldn't truly forgive my mother, as I had been raised by my grandmother. Despite this overwhelming grief, I managed to rank first among all ordinary classes in the school on the national exam. This is a rare feat in Taiwan, as most parents who value education send their children to cram schools on weekends. Due to my family's financial situation, I relied almost entirely on self-study during evening sessions at school and weekends at the library. In my senior year, I was honored as a Model Student and received the Taipei Mayor's Award on behalf of my class, accepting the certificate personally from the Mayor of Taipei.`,
    gallery: [
      { image: "https://picsum.photos/seed/2008-1/800/600", description: "Receiving Mayor's Award" },
      { image: "https://picsum.photos/seed/2008-2/800/600", description: "Self-study at the library" },
      { image: "https://picsum.photos/seed/2008-3/800/600", description: "Top of the class" }
    ]
  },
  {
    year: "2011",
    title: "Finding Passion in Limitations",
    description: "Discovering computer science through self-determination and achieving technical excellence beyond the curriculum.",
    icon: "Smartphone",
    details: `Upon entering university, my academic background still limited me. Even though I was a top student at my high school, I was only on par with average students from better high schools. Although I knew my passion lay in computers, my scores prevented me from majoring in Computer Science. I had to settle for a related field, the Department of Information and Communication. However, I took many programming-related courses within the department and served as a tutor after class, particularly for Java and SQL; many classmates would ask me questions and study with me.

I was not content with being an ordinary student. Starting in my sophomore year, I worked at the school library to subsidize our household income, going to work every day even during winter and summer breaks. Academically, I maximized my learning. While 128 credits were required to graduate, I completed 150 credits. I double-majored in Digital Multimedia Learning to learn computer animation and took a program in Graphic Design, mastering Photoshop and Illustrator.

For our senior graduation exhibition, my group decided to build an Android App themed around independent travel. While the other four members handled planning, marketing, PM, and design, I served as the lead developer. I built my first App in just one month by buying books and teaching myself. In my department, only two people, including myself, managed to complete Android software using actual code. I won the department's "Best System Design Award" at the external exhibition. This was a glorious moment in my life; I realized that if I could achieve something the school hadn't even taught me, there was no difficulty in life I couldn't overcome.`,
    gallery: [
      { image: "https://picsum.photos/seed/2011-1/800/600", description: "Coding the first App" },
      { image: "https://picsum.photos/seed/2011-2/800/600", description: "Best System Design Award" },
      { image: "https://picsum.photos/seed/2011-3/800/600", description: "Double major studies" }
    ]
  },
  {
    year: "2015",
    title: "Forged in Fire",
    description: "Endurance, resilience, and brotherhood on the harsh frontline of the Matsu Islands.",
    icon: "Shield",
    details: `From July 2015 to July 2016, I served my mandatory military service in the Taiwan Air Force. Fate once again tested me; during the lottery draw, I was assigned to the most remote unit. Out of over 800 people in my draft, only 11, including me, were sent to this unit located on Dongyin, an outer island of Matsu. This small island is the frontline facing China.

There, we lived under constant high stress, standing guard for three shifts a day (two hours per shift: morning, afternoon, and early morning). We could only return home once every two months. If I lost a game of Rock-Paper-Scissors, I had to jump into a freezing, foul-smelling ditch to clear grease blockages from the kitchen. I also faced unreasonable treatment and humiliation from officers and slept in tunnels blasted out by explosives.

On that remote island far from home, I withstood many hardships for a year, but I also met many comrades who remain my good brothers to this day. While I stood guard in 0-degree weather in Dongyin, some of my university classmates, holding Green Cards and supported by wealthy families with houses and cars, were training to be pilots in the US—also in 0-degree weather, but with a vastly different fate.`,
    gallery: [
      { image: "https://picsum.photos/seed/2015-1/800/600", description: "Matsu Island Outpost" },
      { image: "https://picsum.photos/seed/2015-2/800/600", description: "Standing guard in winter" },
      { image: "https://picsum.photos/seed/2015-3/800/600", description: "Military service brotherhood" }
    ]
  },
  {
    year: "2017",
    title: "The Rise of a Full Stack Developer",
    description: "Overcoming imposter syndrome and personal tragedy to become a key technical contributor.",
    icon: "Briefcase",
    details: `After my discharge in 2017, I joined Synnex Technology International Corporation, one of the largest distributors of IT products in the world, as a Java Full Stack Developer. Because I wasn't a CS major, I faced many difficulties and obstacles in my first year. Almost every month during the Monthly Report, I was humiliated by my supervisor in front of everyone, and I shed tears in the office restroom multiple times. However, I didn't run away; I worked harder to improve myself. I believed that if I escaped then, I would face the same problems later.

By my second year, my code had fewer bugs, and I developed my own ideas regarding system design. I assisted my team in implementing a shared JSON system that reduced the development time for customized order software for vendors from one week to one day, covering 80% of use cases. Once, I was assigned a critical task that a colleague hadn't been able to solve in two weeks; I finished it in two days. I pulled all-nighters until 6:00 AM for two consecutive days—still showing up for work at 8:00 AM—and successfully saved the company a 100,000 AUD reward from Apple.

That year, my aunt suddenly declared bankruptcy, forcing me to shoulder a heavier financial burden at home. Simultaneously, my grandmother was diagnosed with stage 3 breast cancer. In the face of illness, I realized how small humans are. Every day after work, I would buy food and go to the hospital to eat dinner with her. Fortunately, she gradually recovered. By my third year, I began to think about further education and a career change. I wanted to learn more, take on greater responsibilities, and started dreaming of studying abroad.`,
    gallery: [
      { image: "https://picsum.photos/seed/2017-1/800/600", description: "Working at Synnex" },
      { image: "https://picsum.photos/seed/2017-2/800/600", description: "Optimizing system architecture" },
      { image: "https://picsum.photos/seed/2017-3/800/600", description: "Caring for grandmother" }
    ]
  },
  {
    year: "2020",
    title: "The Longest Night",
    description: "Balancing a demanding career while acting as the primary caregiver for a terminally ill mother during the pandemic.",
    icon: "Heart",
    details: `Just as I thought things were getting on track, in 2020, my mother was suddenly diagnosed with cancer. My personality is such that once I feel a lack of challenge in a company, I want to leave for a more challenging environment, and I also wanted to pursue a Master's degree to deepen my professional knowledge. However, because I needed more paid leave to take care of her, I had to stay at my original company. This was a challenge in itself, as my relationship with my mother was not good. Around 2019, my mother, whom I hadn't seen for a long time, suddenly showed up after work to insult my deceased father and my grandmother, who had just recovered from cancer. When she attacked my beloved grandmother, I snapped, and we argued until the police arrived.

About half a year later, she got cancer. The moment I found out, I decided to take her on a trip after her hospital checkups to create memories. After surgery, we thought she was better, but the bad news returned—the cancer cells had quickly spread to her brain. During this time, she also suffered from Bipolar Disorder. The most chaotic moment involved a fire truck, a police car, and an ambulance all crowded into the alley of my home. That was the first time in my life I received calls from the police so frequently. She was eventually admitted to the psychiatric intensive care unit, where I stayed with her for quite some time—my first frequent experience with mental hospitals.

My most vivid memory is from the COVID-19 pandemic. Even while working from home, I had to live in the hospital with my laptop to accompany my mother. I had to bathe her, help her to the toilet, and clean up when she wet the bed. When the cancer metastasized to her skin, I helped change her dressings almost daily. One distinct memory is when my mother needed to use the toilet but couldn't step over the small threshold. My grandmother, having just recovered from cancer, helped me support her. My mother's slipper fell off as we crossed the step, and the three of us looked at each other and shared a helpless smile. Hospital visits were the most troublesome because we lived in a walk-up apartment. I had to carry her downstairs before the visit and carry her back up afterward (luckily, I was working out at the time).

Sometimes, I would cry secretly while keeping vigil, burdened by both financial and caregiving pressures. I remember one pitiful moment standing outside the examination room, holding my laptop, communicating with the nurse about my mother's condition while simultaneously discussing work progress with my remote supervisor. When she entered hospice care, to maintain my income, I took 30 minutes of leave every lunch break, rode my scooter for 30 minutes to the hospital with lunch, paid for a nasal swab test to enter, ate with her for 30 minutes, and then rode 30 minutes back to work.

This life lasted for over two years. As an only child, I had to shoulder it all. However, I did not waste that time. I took vocational training courses in Python AI, Kubernetes, Podman, and Business English. On the day my mother passed away, I suddenly spoke many truths from my heart. I told her I loved her, hoped to treat her better in the next life, and promised that if I had the ability in the future, I would establish a foundation in her name to help women re-entering the workforce.

I was 28, and both my parents were gone. I felt a sense of emptiness. However, within a month of her passing, at a company dinner, I realized I was the only one there with just a Bachelor's degree. That night, I decided to pursue a Master's. After a round of research, I found most deadlines were three days away. I spent two days preparing my application and recommendation letters and barely sent them out on the deadline. I wasn't immediately accepted, unlike two-thirds of the applicants; due to low application scores, I had to interview. Perhaps my mother was watching over me—I scored very high on the interview and was admitted as the first person on the waiting list to National Cheng Kung University (NCKU), a top-four university in Taiwan.`,
    gallery: [
      { image: "https://picsum.photos/seed/2020-1/800/600", description: "Working from hospital" },
      { image: "https://picsum.photos/seed/2020-2/800/600", description: "Vocational training" },
      { image: "https://picsum.photos/seed/2020-3/800/600", description: "Preparing applications" }
    ]
  },
  {
    year: "2022",
    title: "Dual Life",
    description: "Achieving academic distinction and professional success at the cost of extreme personal sacrifice.",
    icon: "Zap",
    details: `NCKU is in Tainan, but I was in Taipei. Starting in 2022, I simultaneously experienced resigning, getting married, buying a house, finding my ideal job (Delta Electronics, one of the largest providers of switching power supplies and thermal management solutions in the world), and studying for my Master's. During those days, I spent 50 minutes commuting to the Southern Taiwan Science Park for work every morning, and another 50 minutes commuting to NCKU for class every night. I pulled all-nighters constantly, but I set a goal: graduate in two years.

I found an advisor immediately after acceptance and joined the lab's Weekly Meetings before school even started. I also sat in on senior oral defenses—something most students don't do until later. Because I didn't want the degree just for the diploma, I deliberately chose difficult courses like Computer Networks, Computer Vision, Advanced Data Structures, and Advanced Algorithms. Despite never having taken the basic versions of some of these, I achieved straight A's.

My thesis topic was my own choice. Initially, I looked at AOI defect detection, but later proposed a unique MLLM (Multimodal Large Language Model) architecture to assist blind navigation. On my teacher's advice, I pivoted the system toward digital learning and tour-guiding. As a full-time employee, this was dangerous; my thesis required on-site testing with edge devices, system stability, and questionnaire analysis—a path rarely chosen even by full-time students. But I wanted a thesis I could be proud of in my later years. Thus, I chose: Developing a Mobile Learning and Tour-Guiding System Based on a Generative AI Approach.

While writing my thesis, I slept only three hours a day. I used every weekend and spare moment. In late June 2024, I passed my oral defense with the highest score. The committee members remarked that my Master's thesis was of Ph.D. level quality and jokingly asked if I ever slept. I was one of only three students (out of 30) to graduate on time.

I then took my thesis to Tokyo, Japan, to present at the International Conference on Intelligent Science and Sustainable Development (ISASD). This was rare for a working student; the other two attendees only presented posters, but I cared deeply about my academic achievement. In July 2024, I flew to the Tokyo Institute of Technology and gave a full English presentation—a risk, as I had never done so before—but it received unanimous praise. My paper later won a "Honorable Mention Award" from the Institution of Engineering and Technology, Taipei Local Network in October 2024. It was also accepted by the International Journal of Human-Computer Interaction on December 3, 2025, titled From Content to Conversation: Explaining Adoption of On-Device Generative AI Tour Guides.

It is worth mentioning the background of these achievements: during my Master's, my then-wife felt neglected. We often argued until 2:00 AM even when I had finals the next day. We divorced in January 2025, six months after I graduated. In the final month, I sought help from a psychiatrist. Fortunately, I have moved past that pain and continue toward my dreams. Since graduating, I haven't slowed down; I learned Scuba Diving and obtained licenses for driving fishing vessels and yachts—skills possessed by very few young people in Taiwan.`,
    gallery: [
      { image: "https://picsum.photos/seed/2022-1/800/600", description: "NCKU Campus" },
      { image: "https://picsum.photos/seed/2022-2/800/600", description: "Delta Electronics Lab" },
      { image: "https://picsum.photos/seed/2022-3/800/600", description: "Thesis Presentation" }
    ]
  },
  {
    year: "2025",
    title: "Expanding Horizons",
    description: "Stepping onto the international stage through intensive language training and cross-cultural leadership.",
    icon: "Globe",
    details: `When I finally graduated in June 2024, it felt like a dream come true. I intended to resign immediately to study English in the Philippines, as applying to foreign schools requires IELTS scores, aiming for the late 2024 application season. However, out of loyalty to my supervisor who asked me to stay, I delayed my departure until March 2025.

I chose what is reputed to be the best IELTS school in the Philippines, opting for the Spartan system and the "Guarantee Class." This meant I was confined to campus from Monday to Friday, attending classes from 8:00 AM to 5:00 PM, followed by mandatory self-study until 10:00 PM, with mock exams every Saturday morning. Knowing I am someone who values efficiency and maximizes results, I resolutely chose this most difficult path.

My time in the Philippines marked my first true step onto the international stage. From day one, I made many friends from Japan and Korea. Despite the grueling study schedule, I organized weekly weekend trips for us in Baguio. I discovered that my personality translates across borders; just as I maintain good relationships with friends from every stage of life in Taiwan, I did the same abroad. This gave me immense confidence. Even now, though we are no longer in the Philippines, I frequently coordinate cross-national video calls, managing time zones for friends in Vancouver, Christchurch, Kuala Lumpur, Seoul, and Nagoya. During my time in the Philippines, I not only formed close bonds with my classmates but also established unparalleled relationships with every teacher, regardless of their age. One teacher described me by saying, "Every time I see you, it's like seeing the sun; however, the people who appear the most optimistic always have the saddest stories." This experience gave me lifelong friends, and we share a dream to go on a Road Trip in North America together.`,
    gallery: [
      { image: "https://picsum.photos/seed/2025-1/800/600", description: "Studying in Philippines" },
      { image: "https://picsum.photos/seed/2025-2/800/600", description: "International friends" },
      { image: "https://picsum.photos/seed/2025-3/800/600", description: "Weekend trips in Baguio" }
    ]
  },
  {
    year: "Present",
    title: "The Unwritten Future",
    description: "A resilient, self-made professional ready to break the ceiling and inspire others.",
    icon: "Plane",
    details: `For a child born into circumstances like mine, I know that nothing comes easily; everything requires effort. I used to blame fate, but I no longer complain. I have accepted my background and my destiny. I am 32 years old. I was born into poverty with insufficient educational resources, which forced me to strive for resources on my own. I am a late bloomer who has experienced the extreme highs and lows of life. I have lost family members, been married, and been divorced.

My personality allows me to quickly understand people's traits and tendencies, offering support and encouragement tailored to their specific difficulties or goals. I have met too many people who possess resources but do not know how to use them. What I want to test is how far someone born like me can go to break through their own ceiling.

Looking back on my journey, even though my starting point was lower than others, I have continued to climb. I remain passionate about life, strict with myself, and lenient with others. I hope that you, reading this, can give me a chance to realize my dreams and change my life, allowing the world to see that even a child born with my background has the opportunity to make their dreams a reality.`,
    gallery: [
      { image: "https://picsum.photos/seed/present-1/800/600", description: "Ready for US Graduate School" },
      { image: "https://picsum.photos/seed/present-2/800/600", description: "Embracing the future" },
      { image: "https://picsum.photos/seed/present-3/800/600", description: "New beginnings" }
    ]
  }
];

export const SKILLS: SkillItem[] = [
  {
    category: "Languages & Core",
    items: [
      { name: "Java", proficiency: "Expert", startYear: "2012" },
      { name: "SQL (MySQL/Oracle)", proficiency: "Expert", startYear: "2015" },
      { name: "JavaScript/TypeScript", proficiency: "Expert", startYear: "2017" },
      { name: "Python", proficiency: "Intermediate", startYear: "2022" },
      { name: "C/C++", proficiency: "Intermediate", startYear: "2022" }
    ]
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "Spring Boot", proficiency: "Expert", startYear: "2017" },
      { name: "Android SDK", proficiency: "Expert", startYear: "2015" },
      { name: "Git / CI/CD", proficiency: "Expert", startYear: "2017" },
      { name: "React", proficiency: "Intermediate", startYear: "2020" },
      { name: "Docker / Kubernetes", proficiency: "Intermediate", startYear: "2021" }
    ]
  },
  {
    category: "AI & Edge Computing",
    items: [
      { name: "LLM Integration (RAG)", proficiency: "Intermediate", startYear: "2023" },
      { name: "NVIDIA Jetson", proficiency: "Intermediate", startYear: "2023" },
      { name: "YOLO (Computer Vision)", proficiency: "Intermediate", startYear: "2023" },
      { name: "PyTorch", proficiency: "Intermediate", startYear: "2022" },
      { name: "OpenCV", proficiency: "Intermediate", startYear: "2022" }
    ]
  },
  {
    category: "Design & Multimedia",
    items: [
      { name: "Adobe Photoshop", proficiency: "Expert", startYear: "2011" },
      { name: "Adobe Illustrator", proficiency: "Expert", startYear: "2011" },
      { name: "Adobe Premiere", proficiency: "Intermediate", startYear: "2012" },
      { name: "Autodesk Maya", proficiency: "Intermediate", startYear: "2013" },
      { name: "3ds Max", proficiency: "Intermediate", startYear: "2012" }
    ]
  },
  {
    category: "Industry Knowledge",
    items: [
      { name: "EDI/API Integration", proficiency: "Expert", startYear: "2017" },
      { name: "Smart Manufacturing", proficiency: "Expert", startYear: "2022" },
      { name: "IPC-CFX Standard", proficiency: "Expert", startYear: "2023" },
      { name: "System Architecture", proficiency: "Intermediate", startYear: "2019" },
      { name: "Agile/Scrum", proficiency: "Expert", startYear: "2018" }
    ]
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
        tags: ["Edge AI", "NVIDIA Jetson", "Resilience"],
        honors: [
          "Highest Score in Oral Defense among all candidates.",
          "Honorable Mention by IET Taipei Local Network (2024).",
          "Oral Presentation at ISASD 2024 in Tokyo, Japan."
        ]
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
        tags: ["GPA 3.97", "Top of Class"]
      },
      {
        type: "thesis",
        label: "Thesis",
        title: "Generative AI on Edge",
        content: "Thesis: Developing a Mobile Learning and Tour-Guiding System Based on Generative AI Approach. I proposed a low-energy Multimodal Large Language Model (MLLM) architecture integrated with RAG and YOLO, capable of running offline on NVIDIA Jetson hardware.",
        tags: ["LLM", "RAG", "YOLO", "Python"]
      }
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=1000&auto=format&fit=crop",
        description: "Received Honorable Mention by IET Taipei Local Network (2024) in Taipei, Taiwan"
      },
      {
        image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1000&auto=format&fit=crop",
        description: "Presented Thesis on ISASD in Tokyo, Japan (2024)"
      },
      {
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
        description: "Working late nights at Delta Electronics Lab"
      },
      {
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        description: "Testing Generative AI models on NVIDIA Jetson Edge devices"
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
        tags: ["Self-Taught", "Android", "Java"],
        honors: [
          "Best System Design Award (2015) - Dept. of Info & Comms",
          "Academic Excellence Award (Graduation)"
        ]
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
        tags: ["GPA 3.8", "Computer Science"]
      },
      {
        type: "project",
        label: "Capstone",
        title: "Android Travel Planner",
        content: "Independently developed an Android application integrating Google Maps API to assist independent travelers. Built entirely through self-study of Java and Android frameworks, doing the work of a full team solo.",
        tags: ["Best System Design", "Google Maps API"]
      }
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop",
        description: "Awarded Best System Design for Android Travel Planner Capstone (2015)"
      },
      {
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop",
        description: "Graduated with Academic Excellence Award"
      },
      {
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
        description: "Self-studying Android Development in the library"
      },
      {
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
        description: "Developing early prototypes for mobile applications"
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
        tags: ["Resilience", "Top Rank"],
        honors: [
          "Ranked 1st in class (2010, 2011)",
          "Mayor’s Award to Outstanding Graduates",
          "Transformation: From last place to Valedictorian level performance."
        ]
      }
    ],
    gallery: [
       {
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop",
        description: "Receiving the Mayor's Award for Academic Excellence (2011)"
      },
      {
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop",
        description: "High School Graduation Ceremony - Top of Class"
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
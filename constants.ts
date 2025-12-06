import { TimelineItem, ExperienceItem, EducationItem, Recommendation, TranscriptCourse, ProjectItem, SkillItem } from './types';

export const PERSONAL_INFO = {
  name: "Kevin",
  tagline: "8+ Years Senior Software Engineer",
  about: `Welcome to my personal website! My life reads like a twisting novel; I was not born into a well-educated family, nor was I gifted with innate genius or extraordinary luck. I often think it is a miracle that I didn't go astray or end up in a low-skilled trade. Yet, I have always felt that I don't belong here, but rather in a distant Western country. If you have a moment, I invite you to read my story. Perhaps it might resonate with your own journey.`,
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
      { image: "/images/timeline/1993/1.jpg", description: "小學畢業照，猜的到我在哪嗎?" },
      { image: "/images/timeline/1993/2.jpg", description: "國中班遊" }
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
      { image: "/images/timeline/2008/1.jpg", description: "畢業典禮照" },
      { image: "/images/timeline/2008/2.jpg", description: "接收台北市市長頒發的獎狀" }
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
    tagline: "one of the largest providers of switching power supplies and thermal management solutions in the world",
    department: "SMART MANUFACTURING (SMT)",
    modules: [
      {
        type: "intro",
        label: "Overview",
        title: "Role & Impact",
        content: "At Delta, I bridged the gap between hardware and software in a high-stakes manufacturing environment. I led the development of monitoring systems that are critical for the SMT process, working directly with international equipment vendors to standardize data protocols."
      },
      {
        type: "achievements",
        label: "Achievements",
        title: "Key Contributions",
        content: [
          "Analyzed and developed industrial automation applications, including monitoring software for multi-vendor equipment such as pick-and-place machines and reflow ovens.",
          "Held regular meetings with equipment vendors (Panasonic, Ersa, Rehm) to ensure development of IPC-CFX data structures aligned with Industry 4.0 strategy."
        ]
      },
      {
        type: "project",
        label: "Tech Stack",
        title: "Tools & Technologies",
        content: [
          "**Core & Backend:** Java 17, Spring Boot, Node-RED (IoT Flows), SQL",
          "**Data & Performance:** ElasticSearch (Log/Search), Redis (Caching)",
          "**Infrastructure & DevOps:** Docker, Linux, Git (Version Control)",
          "**API & Tools:** Swagger (OpenAPI), Postman, IntelliJ IDEA, DBeaver"
        ]
      }
    ],
    gallery: [
      { image: "https://picsum.photos/seed/delta-1/800/600", description: "Delta Electronics HQ" },
      { image: "https://picsum.photos/seed/delta-2/800/600", description: "SMT Production Line" }
    ],
    achievements: [], // Kept for type compatibility if strict
    description: "", // Kept for type compatibility if strict
  },
  {
    id: "synnex",
    company: "Synnex Technology Intl",
    role: "Senior Java Full Stack Developer",
    period: "February 2017 – June 2022",
    location: "Taipei, Taiwan",
    tagline: "one of the largest distributors of IT products in the world",
    department: "VENDOR DATA INTEGRATED PLATFORM (VDIP)",
    modules: [
      {
        type: "intro",
        label: "Overview",
        title: "Role & Impact",
        content: "As a core member of the VDIP (Vendor Data Integration Platform) team, I was responsible for the full lifecycle (Analysis, Design, Programming) of the group's B2B systems. I facilitated seamless information exchange between Synnex and over 20 global tech giants across Australia, China, Hong Kong, New Zealand, and Taiwan."
      },
      {
        type: "achievements",
        label: "Achievements",
        title: "Key Contributions",
        content: [
          "Engineered shared EDI/API modules for Purchasing & Product Management, reducing B2B integration time from 1 week to 1 day (80% efficiency gain).",
          "Led technical communications in English with global Vendor IT teams to define specs and implement cross-system integrations.",
          "Completed a critical integration project for an Australian client in 2 days (estimated 2 weeks), securing a 100,000 AUD reward."
        ]
      },
      {
        type: "project",
        label: "Tech Stack",
        title: "Enterprise Ecosystem",
        content: [
          "**Integration & Middleware:** Software AG WebMethods (v6.5/10.5/10.11), Microsoft Azure, SSIS, Oracle WebLogic, Wildfly (JBoss)",
          "**Languages & Backend:** Java (6/8/11), Spring Boot, Spring MVC, Spring Data JPA, Struts, Hibernate",
          "**Frontend:** JSP, jQuery, DWR",
          "**Database:** Oracle (PL/SQL), PostgreSQL, MS SQL Server",
          "**Tools & QA:** Eclipse, SVN, Postman, Micro Focus UFT (Automation)"
        ]
      }
    ],
    gallery: [
      { image: "https://picsum.photos/seed/synnex-1/800/600", description: "Synnex Technology Office" },
      { image: "https://picsum.photos/seed/synnex-2/800/600", description: "Global Vendor Integration" }
    ],
    achievements: [], // Kept for type compatibility if strict
    description: "", // Kept for type compatibility if strict
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
    stats: {
      gpa: "3.97 / 4.3",
      avgScore: "91.3",
      rank: "10% (3/30)",
      rankLabel: "2-Year Grad Rate"
    },
    modules: [
      {
        type: "intro",
        label: "Introduction",
        title: "The Dual Life: Engineer & Scholar",
        content: "My Master's degree was a victory over time and circumstance. Living a 'dual life,' I commuted between Tainan and the Science Park daily, balancing a high-pressure Senior Engineer role at Delta Electronics with rigorous academic research. I often think it is a miracle that I didn't go astray or end up in a low-skilled trade. Yet, I have always felt that I don't belong here, but rather in a distant Western country. If you have a moment, I invite you to read my story. Perhaps it might resonate with your own journey.",
        tags: ["Edge AI", "NVIDIA Jetson", "Resilience"],
        honors: [
          { title: "Accepted by IJHCI (SSCI): 'From Content to Conversation: Explaining Adoption of On-Device Generative AI Tour Guides'", year: "December 3, 2025" },
          { title: "Honorable Mention - Institution of Engineering and Technology (IET), Taipei Local Network", year: "October, 2024" },
          { title: "Published and Presented at International Conference on Intelligent Science and Sustainable Development (ISASD), Tokyo", year: "July, 2024" }
        ]
      },
      {
        type: "grades",
        label: "Transcript",
        title: "Academic Excellence",
        content: [
          // AI & Algorithms (Core)
          "Artificial Intelligence|95|A+",
          "Computer Vision|88|A",
          "Advanced Algorithm|85|A",
          "Advanced Data Structures|86|A",
          // Embedded Systems & Hardware (Specialization)
          "Digital Integrated Circuit Design|95|A+",
          "Implementation of Heterogeneous Multicore Embedded System|94|A+",
          "Networked Embedded System and Its Applications|84|A-",
          "Computer Networks|82|A-",
          "Fundamentals of Computer|84|A-",
          // Other Engineering
          "Introduction to Electronic Packaging|84|A-",
          "Biomimetic System|84|A-"
        ],
        tags: ["GPA 3.97", "Avg Score: 91.3"]
      },
      {
        type: "thesis",
        label: "Thesis",
        title: "Edge AI Smart Tour Guide (Master's Thesis Project)",
        content: [
          "📖 **Overview**\nDeveloping a Mobile Learning and Tour-guiding System based on Generative AI Approach. This project is an offline multimodal generative AI tour assistant based on **Embedded Systems**, designed to solve the issues of high latency, cost, and network dependency associated with cloud-based LLMs.\n\nThe system runs entirely offline on a single-board computer (**Nvidia Jetson Orin NX**), integrating Visual Recognition (**YOLO**), Voice Interaction (**Whisper / eSpeak**), and Large Language Models (**Breeze-7B**). It utilizes **RAG (Retrieval-Augmented Generation)** technology to access local knowledge bases. Field experiments at the Tainan Confucius Temple confirmed that this system improved learning efficiency by **18.0%** compared to human guides.",
          
          "🛠️ **Tech Stack**\nThis project demonstrates the ability to deploy and optimize large AI models on edge devices.\n\n• **Hardware:** Nvidia Jetson Orin NX (16GB RAM)\n• **Language:** Python 3.10\n• **Core Models:**\n  - LLM: MediaTek Breeze-7B (Traditional Chinese model based on Mistral-7B)\n  - Vision: YOLOv8 (Object Detection)\n  - ASR (Speech-to-Text): OpenAI Whisper (Base model)\n  - TTS (Text-to-Speech): eSpeak / pyttsx3\n• **Key Technologies:**\n  - RAG (Retrieval-Augmented Generation): LangChain + FAISS + Sentence-Transformers (Knowledge Base Retrieval)\n  - Quantization: BitsAndBytes (4-bit NF4 Quantization, significantly reducing VRAM usage)\n  - Multiprocessing: Separated vision inference and language interaction loops using threading/multiprocessing to ensure real-time performance.\n• **Tools:** PyTorch, CUDA 11.8/12.1, OpenCV",
          
          "🚀 **System Architecture & Features**\n1. **Multimodal Interaction on Edge**\n  - **See:** Uses YOLOv8 to detect historical buildings (e.g., Dacheng Hall) in real-time.\n  - **Listen:** Uses Whisper for offline speech recognition, supporting Chinese spoken commands.\n  - **Think:** Uses quantized Breeze-7B (4-bit) for natural language understanding and generation.\n  - **Speak:** Outputs AI-generated tour content via TTS.\n\n2. **RAG (Retrieval-Augmented Generation)**\n  To solve LLM hallucinations and supplement domain-specific knowledge (Confucius Temple History), a FAISS-based vector database was implemented.\n  The system converts user voice queries into embeddings, retrieves relevant article chunks from the database, and feeds them to the LLM to generate accurate explanations.\n\n3. **Performance Optimization**\n  - **Memory Management:** Successfully deployed a 7B parameter model on a 16GB embedded device using 4-bit quantization.\n  - **Multitasking:** Implemented multiprocessing to decouple the 'Object Detection Loop' from the 'LLM Inference Loop', preventing vision lag from affecting voice interaction.",
          
          "📂 **Code Structure**\n```plaintext\nsrc/\n├── activate.sh          # System Startup Script (Env Vars)\n├── main.py              # Main Entry Point (Multithreading)\n├── llm_setup.py         # LLM Loader & BitsAndBytes Quantization\n├── rag_setup.py         # Vector DB (FAISS) & Embedding Loader\n├── yolo_util.py         # YOLOv8 Inference & Image Preprocessing\n├── llm_util.py          # RAG Retrieval Process & Prompt Templates\n├── tts_util.py          # Text-to-Speech Module (pyttsx3)\n└── log_util.py          # System Logging\n```",

          "💡 **Results**\n• **Offline Capability:** Successfully achieved full AI tour service without internet access.\n• **Low Power:** System power consumption is only **10W-25W** (vs. hundreds of watts for Cloud GPUs).\n• **Educational Impact:** The experimental group's post-test scores improved by **34.2%**, significantly outperforming the control group."
        ],
        tags: ["Edge AI", "NVIDIA Jetson", "RAG", "YOLO", "LLM", "Python"]
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
    school: "Shih Hsin University (SHU)",
    degree: "Bachelor of Arts in Information and Communications",
    period: "Sep 2011 – Jun 2015",
    location: "Taipei, Taiwan",
    gpa: "3.8/4.0 (Avg: 84.1)",
    stats: {
      gpa: "3.8 / 4.0",
      avgScore: "84.1",
      rank: "13 / 58"
    },
    modules: [
      {
        type: "intro",
        label: "Introduction",
        title: "Finding Passion in Limitations",
        content: "Determined to bridge the gap between my Information & Communications major and a true Computer Science curriculum, I refused to be limited by the standard path. I completed 150 credits—far beyond the required 128—while double-majoring in Digital Multimedia to master the full creative stack. Outside the classroom, I supported my family by working at the university library and established myself as a peer tutor for Java and SQL. This era was defined by a hunger for knowledge and the discipline to acquire it against all odds.",
        tags: ["Self-Taught", "Android", "Java"],
        honors: [
          { title: "Best System Design Award - Department of Information and Communications", year: "November, 2014" }
        ],
        jobs: [
          {
            role: "Logistics Assistant",
            company: "Yang Feng International Co., Ltd.",
            year: "Apr 2015 – Jun 2015"
          },
          {
            role: "Digital Content Assistant",
            company: "Hwa Da Digital Co., Ltd.",
            year: "Mar 2014 – Mar 2015"
          },
          {
            role: "Information Service Assistant",
            company: "Shih Hsin University Library",
            year: "Jul 2012 – Jan 2014"
          }
        ],
        activities: [
           { name: "Department Student Association (Info. & Comms.)", year: "2013 – 2014" },
           { name: "Guitar Club", year: "2012 – 2013" }
        ]
      },
      {
        type: "grades",
        label: "Transcript",
        title: "Core CS Coursework",
        content: [
          // Core Computer Science
          "Computer and Information Technology|99|A",
          "Introduction to Programming Language|78|B",
          "System Analysis|88|A",
          "Database Management System|70|B",
          "Network Communications|75|B",
          "Fundamental Data Analysis|61|C",
          // Web & Digital Design
          "Web-page Design|90|A",
          "Planning and Designing of Web Sites|88|A",
          "Internet Content Design|83|A",
          "Markup Language|85|A",
          "Introduction to Digital Content|91|A",
          "Digital Content Management|82|A",
          "Image Digitizing|95|A",
          "Digital Graphic Design|84|A",
          // Animation & Multimedia
          "Computer Animation II|95|A",
          "Computer Animation I|80|A",
          "Introduction to Computer Animation|75|B",
          // General
          "Competitive Intelligence|86|A",
          "Advanced English Usage|80|A",
          "Intermediate English Usage|78|B"
        ],
        tags: ["GPA 3.8", "Dept Rank: 13/58"]
      },
      {
        type: "project",
        label: "Capstone",
        title: "Taiwander: Roaming Taiwan (Android App)",
        content: [
          "📱 **Taiwander (Android App)**\nA native Android application integrating LBS positioning, itinerary planning, and local travel information. Won **Best System Design Award**.",
          
          "📖 **Overview**\nDesigned for independent travelers, Taiwander solves the problem of fragmented travel information. It integrates attraction recommendations, transportation info, and accommodation searches with Google Maps API. Users can arrange depth tours (1-5 days) with offline access support.",
          
          "🛠️ **Tech Stack**\nBuilt with **Native Java** on the Android SDK, focusing on offline capabilities and hardware integration.\n\n• **Core:** Java (JDK 7), Android SDK (Activity, Fragment, ViewPager)\n• **Data:** SQLite (Raw SQL queries, SQLiteOpenHelper)\n• **Maps & LBS:** Google Maps Android API v2, LocationManager (GPS/Network)\n• **Performance:** AsyncTasks for background operations, Bitmap memory optimization",
          
          "🚀 **Key Engineering Features**\n1. **Smart Itinerary Planner**\n  - Implements **ViewPager + Fragments** for swipeable multi-day scheduling.\n  - Saves user planning results into local SQLite tables for full offline access.\n\n2. **Pre-loaded Database Deployment**\n  - Solved 'out-of-box' data requirement by packaging a pre-made DB in assets.\n  - streams the DB binary to system paths upon first launch.\n\n3. **Dynamic Recommendation Engine**\n  - Filters attractions based on User Preferences (Region/Type).\n  - Dynamically assembles SQL queries to bind results to UI adapters.\n\n4. **Memory Optimization**\n  - Implemented efficient **BitmapFactory** decoding to prevent Out-Of-Memory (OOM) crashes on older devices.",

          "📂 **Project Structure**\n```plaintext\nsrc/com/example/happy/\n├── MainActivity.java       # Entry Point & Navigation\n├── Map.java                # Google Maps Controller\n├── DBManager.java          # Asset to System DB Migration\n├── CustomTour.java         # Itinerary Logic (FragmentActivity)\n├── RecommendedTour.java    # SQL Query Builder\n└── [Region]Content.java    # Dynamic Content Loaders\n```",
          
          "💡 **Conclusion**\nAlthough built during the early stages of Android development, this project encompassed the complete App development lifecycle—ranging from database planning and UI/UX design to Google services integration and hardware sensor (GPS) application. It serves not only as a travel tool but as a testament to my learning journey, evolving from basic Java logic to mastering complex Android frameworks."
        ],
        tags: ["Java", "Android SDK", "SQLite", "Google Maps API", "LBS", "ViewPager"]
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
    school: "Taipei Municipal Vocational High School",
    degree: "Vocational High School Diploma",
    period: "Sep 2008 – Jun 2011",
    location: "Taipei, Taiwan",
    stats: {
      rank: "Top 1% (5/Entire School)",
      rankLabel: "School Rank"
    },
    modules: [
      {
        type: "intro",
        label: "Story",
        title: "The Turning Point",
        content: "Entering high school marked the lowest point of my academic journey initially, as I was assigned to a school with a reputation for delinquency. However, it became the stage for my most significant transformation. Amidst a challenging environment, I found the resolve to change my destiny. Starting with a perfect score in History, I built momentum that propelled me to the top of my class. This period defined my resilience, proving that one's starting point does not dictate their finish line.",
        tags: ["Resilience", "Top 1%", "Mayor's Award"],
        honors: [
          { title: "Taipei Mayor's Award (Highest Honor for Graduates)", year: "2011" },
          { title: "Model Student Award", year: "2011" },
          { title: "Ranked 1st in Class for 4 consecutive semesters", year: "2009-2011" },
          { title: "Ranked 5th in Entire School (across all departments)", year: "2011" }
        ],
        activities: [
          { name: "Information Technology Club", year: "2008 – 2011" }
        ]
      },
      {
        type: "achievements",
        label: "Achievements",
        title: "Rising Above",
        content: [
          "**Taipei Mayor's Award:** Awarded to the top student of the graduating class, presented personally by the Mayor of Taipei. This symbolized a complete turnaround from my earlier academic struggles.",
          "**Self-Directed Learning:** Due to my family's financial situation after my father's passing, I relied entirely on self-study, spending evenings at school and weekends at the library instead of attending cram schools.",
          "**Peer Leadership:** Served as a tutor for classmates in English and History, fostering a supportive learning environment despite the school's general atmosphere."
        ]
      }
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop",
        description: "Receiving the Taipei Mayor's Award"
      },
      {
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
        description: "Self-study at the library"
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
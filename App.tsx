import React, { useState, useEffect, useRef } from 'react';
import { 
  Home,
  Book,
  Briefcase,
  Sun, 
  Moon,
  Globe,
  ChevronRight,
  Code2,
  Upload,
  ArrowUp,
  ChevronLeft,
  ChevronDown
} from 'lucide-react';
import { 
  TIMELINE, 
  EXPERIENCE, 
  EDUCATION, 
  SKILLS
} from './constants';
import { NavSection, TimelineItem } from './types';

// --- Components ---

// 1. Responsive Timeline with Scene Transitions
const ResponsiveTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem>(TIMELINE[TIMELINE.length - 1]);
  const [viewState, setViewState] = useState<'grid' | 'detail'>('grid');
  
  // Ref for the sliding container (for animation)
  const detailContainerRef = useRef<HTMLDivElement>(null);
  // Ref for the internal scrollable content (for scroll logic)
  const detailScrollRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  
  // Touch handling
  const [touchStart, setTouchStart] = useState(0);

  const handleEraClick = (item: TimelineItem) => {
    setSelectedItem(item);
  };

  const backToGrid = () => {
    setViewState('grid');
  };

  // Grid View: Scroll Down to Enter Detail
  const handleGridWheel = (e: React.WheelEvent) => {
    if (viewState === 'grid' && gridContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = gridContainerRef.current;
      const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 20;
      const isNotScrollable = scrollHeight <= clientHeight;

      if ((isAtBottom || isNotScrollable) && e.deltaY > 30) {
        setViewState('detail');
      }
    }
  };

  // Detail View: Scroll Up to Go Back
  // NOTE: Now we check detailScrollRef for the scrollTop position
  const handleDetailWheel = (e: React.WheelEvent) => {
    if (viewState === 'detail' && detailScrollRef.current) {
      if (detailScrollRef.current.scrollTop <= 0 && e.deltaY < -40) {
        backToGrid();
      }
    }
  };

  // Touch Handlers for Grid (Swipe Up to Detail)
  const handleGridTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };
  
  const handleGridTouchEnd = (e: React.TouchEvent) => {
    const endY = e.changedTouches[0].clientY;
    const { scrollTop, scrollHeight, clientHeight } = gridContainerRef.current!;
    const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 20;
    
    // Swipe Up (drag finger up, content moves down conceptually, but y decreases)
    if ((isAtBottom || scrollHeight <= clientHeight) && touchStart - endY > 70) {
      setViewState('detail');
    }
  };

  // Touch Handlers for Detail (Swipe Down to Grid)
  const handleDetailTouchStart = (e: React.TouchEvent) => {
    if (detailScrollRef.current?.scrollTop === 0) {
      setTouchStart(e.touches[0].clientY);
    }
  };

  const handleDetailTouchEnd = (e: React.TouchEvent) => {
    const endY = e.changedTouches[0].clientY;
    if (detailScrollRef.current?.scrollTop === 0 && endY - touchStart > 70) {
      backToGrid();
    }
  };

  // Navigation Logic
  const currentIndex = TIMELINE.findIndex(item => item.year === selectedItem.year);
  const prevItem = currentIndex > 0 ? TIMELINE[currentIndex - 1] : null;
  const nextItem = currentIndex < TIMELINE.length - 1 ? TIMELINE[currentIndex + 1] : null;

  const handleNavigate = (item: TimelineItem) => {
    setSelectedItem(item);
    // Smooth scroll to top of detail view
    if (detailScrollRef.current) {
      detailScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-full w-full bg-slate-900 text-white overflow-hidden">
      
      {/* SCENE 1: GRID VIEW */}
      <div 
        className={`absolute inset-0 z-10 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          viewState === 'grid' ? 'translate-y-0 opacity-100' : '-translate-y-1/2 opacity-50 pointer-events-none'
        }`}
      >
         {/* Background Grid Effect */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="flex-shrink-0 pt-8 px-4 md:px-12 mb-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-neon mb-3 tracking-tight">MY JOURNEY</h2>
          <p className="text-slate-400 text-lg flex items-center gap-2">
            <span className="w-8 h-[1px] bg-slate-500"></span>
            Select an era to explore
          </p>
        </div>

        {/* Scrollable Grid Area */}
        <div 
          ref={gridContainerRef}
          onWheel={handleGridWheel}
          onTouchStart={handleGridTouchStart}
          onTouchEnd={handleGridTouchEnd}
          className="flex-1 overflow-y-auto no-scrollbar pb-64 relative z-10 px-4 md:px-12"
        >
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {TIMELINE.map((item, index) => {
                const isActive = selectedItem.year === item.year;
                return (
                  <div 
                    key={index} 
                    className={`
                      relative p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center group min-h-[220px]
                      ${isActive
                        ? 'bg-slate-800 border-4 border-white shadow-[0_0_25px_rgba(255,255,255,0.15)] scale-105 z-10' 
                        : 'bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-slate-500 hover:-translate-y-1'
                      }
                    `}
                    onClick={() => handleEraClick(item)}
                  >
                    <div className={`text-2xl font-mono font-bold mb-4 ${isActive ? 'text-neon' : 'text-slate-500 group-hover:text-slate-300'}`}>
                      {item.year}
                    </div>
                    
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors shadow-inner ${isActive ? 'bg-neon text-black' : 'bg-slate-700/50 text-slate-400'}`}>
                       <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-black' : 'bg-slate-500'}`} />
                    </div>

                    <h3 className={`font-bold text-lg leading-snug ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                      {item.title}
                    </h3>
                  </div>
                );
              })}
           </div>
        </div>

        {/* Bottom Preview Panel */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-20 flex flex-col justify-center px-4 md:px-12 transition-transform duration-300">
           <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                 <div className="flex items-center gap-4 mb-2">
                    <span className="px-3 py-1 bg-neon/10 text-neon rounded font-mono text-sm font-bold border border-neon/20">
                      {selectedItem.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                 </div>
                 <p className="text-slate-400 text-lg leading-relaxed line-clamp-2 md:line-clamp-2">
                   {selectedItem.description}
                 </p>
              </div>
              
              {/* Scroll Prompt */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 text-slate-400 animate-pulse">
                <span className="text-sm font-bold uppercase tracking-widest text-neon">Scroll Down</span>
                <ChevronDown size={32} className="text-white" />
              </div>
           </div>
        </div>
      </div>

      {/* SCENE 2: DETAIL VIEW (Slide Up) */}
      <div 
        ref={detailContainerRef}
        className={`absolute inset-0 z-30 bg-slate-950 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          viewState === 'detail' ? 'translate-y-0' : 'translate-y-[105%]'
        }`}
      >
        {/* Navigation / Dismiss Bar */}
        <div className="flex-shrink-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <button 
            onClick={backToGrid}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold"
          >
            <ChevronLeft size={18} />
            Back to Timeline
          </button>
          <div className="text-slate-500 text-xs flex items-center gap-1 opacity-60">
            <ArrowUp size={14} className="animate-bounce" />
            Scroll Up to Return
          </div>
        </div>

        {/* Main Content Area with Fixed Sides */}
        <div className="flex-1 relative overflow-hidden">
          
          {/* FLOATING LEFT NAVIGATION (Previous) */}
          {prevItem && (
            <button 
              onClick={(e) => { e.stopPropagation(); handleNavigate(prevItem); }}
              className="absolute left-0 top-0 bottom-0 z-40 w-16 md:w-24 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center justify-center md:justify-start md:pl-6 group cursor-pointer outline-none transition-all hover:w-20 md:hover:w-32"
              aria-label="Previous Era"
            >
               <div className="flex flex-col items-center gap-2 transform transition-transform group-hover:-translate-x-1">
                  <ChevronLeft size={48} className="text-slate-400 group-hover:text-neon transition-colors" strokeWidth={1.5} />
                  <span className="hidden md:block text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest rotate-90 origin-center whitespace-nowrap mt-4">
                    {prevItem.year}
                  </span>
               </div>
            </button>
          )}

          {/* FLOATING RIGHT NAVIGATION (Next) */}
          {nextItem && (
            <button 
              onClick={(e) => { e.stopPropagation(); handleNavigate(nextItem); }}
              className="absolute right-0 top-0 bottom-0 z-40 w-16 md:w-24 bg-gradient-to-l from-black/80 via-black/40 to-transparent flex items-center justify-center md:justify-end md:pr-6 group cursor-pointer outline-none transition-all hover:w-20 md:hover:w-32"
              aria-label="Next Era"
            >
              <div className="flex flex-col items-center gap-2 transform transition-transform group-hover:translate-x-1">
                  <ChevronRight size={48} className="text-slate-400 group-hover:text-neon transition-colors" strokeWidth={1.5} />
                  <span className="hidden md:block text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest -rotate-90 origin-center whitespace-nowrap mt-4">
                    {nextItem.year}
                  </span>
              </div>
            </button>
          )}

          {/* SCROLLABLE CONTENT INNER */}
          <div 
            ref={detailScrollRef}
            onWheel={handleDetailWheel}
            onTouchStart={handleDetailTouchStart}
            onTouchEnd={handleDetailTouchEnd}
            className="absolute inset-0 overflow-y-auto"
          >
            <div className="min-h-full flex flex-col lg:flex-row">
              {/* Left: Text Content */}
              <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
                <div className="max-w-xl mx-auto w-full px-8 md:px-12"> {/* Added padding for side nav clearance */}
                  <div className="inline-block px-3 py-1 bg-neon/10 text-neon rounded-full text-sm font-mono font-bold mb-6">
                    {selectedItem.year}
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-white leading-tight">
                    {selectedItem.title}
                  </h1>
                  
                  <div className="h-1 w-20 bg-neon mb-8"></div>
                  
                  <div className="prose prose-lg prose-invert text-slate-300 leading-relaxed mb-8">
                    <p className="text-xl font-light text-slate-100 mb-6 border-l-4 border-slate-700 pl-4">
                      {selectedItem.description}
                    </p>
                    {selectedItem.details && (
                      <p className="text-base text-slate-400">
                        {selectedItem.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Image Placeholder */}
              <div className="flex-1 bg-black/20 p-8 lg:p-16 flex items-center justify-center min-h-[40vh] lg:min-h-auto">
                <div className="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-slate-800 ring-1 ring-white/10 group">
                    <img 
                      key={selectedItem.year} // Force re-render on change
                      src={`https://picsum.photos/seed/${selectedItem.year}/800/600?grayscale`} 
                      alt={selectedItem.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                    
                    {/* Simulated Upload Button */}
                    <div className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-neon hover:text-black transition-all">
                      <Upload size={24} />
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Two Column Content Layout (For Academic/Profession Details)
const SplitContentLayout = ({ 
  title, 
  subtitle, 
  content, 
  tags,
  imageSrc = "https://picsum.photos/800/600",
  onImageUpload 
}: { 
  title: string, 
  subtitle: string, 
  content: React.ReactNode, 
  tags?: string[],
  imageSrc?: string,
  onImageUpload?: () => void
}) => {
  return (
    <div className="h-full w-full overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="flex flex-col lg:flex-row min-h-full">
        {/* Left Column: Text */}
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white">{title}</h1>
            <div className="text-xl text-accent mb-8 font-medium">{subtitle}</div>
            
            <div className="prose prose-lg dark:prose-invert mb-8 text-slate-600 dark:text-slate-300 leading-relaxed">
              {content}
            </div>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Image Placeholder */}
        <div className="flex-1 bg-slate-100 dark:bg-black/20 p-8 lg:p-16 flex items-center justify-center relative group min-h-[300px] lg:min-h-auto">
          <div className="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800">
             <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
             
             {/* Upload Hint Overlay */}
             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer" onClick={onImageUpload}>
               <Upload size={48} className="mb-2" />
               <span className="font-medium">Click to replace photo</span>
               <span className="text-xs text-slate-300 mt-1">(Simulation Only)</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Skills Grid Layout
const SkillsLayout = () => {
  return (
    <div className="h-full w-full overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-8 lg:p-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">Professional Skills</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-accent flex items-center gap-2">
                <Code2 size={24} />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-600">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App Logic ---

// Navigation Data Config
const NAV_SECTIONS: NavSection[] = [
  { 
    id: 'home', 
    label: 'Home Page', 
    icon: Home 
  },
  { 
    id: 'academic', 
    label: 'Academic', 
    icon: Book,
    subItems: [
      { id: 'master', label: "Master's (NCKU)" },
      { id: 'university', label: "University (SHU)" },
      { id: 'highschool', label: "High School" },
    ]
  },
  { 
    id: 'profession', 
    label: 'Profession', 
    icon: Briefcase,
    subItems: [
      { id: 'skills', label: "Skills" },
      { id: 'delta', label: "Delta Electronics" },
      { id: 'synnex', label: "Synnex Technology" },
    ]
  }
];

const App = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle Main Nav Click
  const handleNavClick = (sectionId: string) => {
    setActiveTab(sectionId);
    // Auto-select first sub-item if exists and none selected
    const section = NAV_SECTIONS.find(s => s.id === sectionId);
    if (section && section.subItems && section.subItems.length > 0) {
      setActiveSubTab(section.subItems[0].id);
    } else {
      setActiveSubTab(null);
    }
  };

  // Render Content based on active state
  const renderContent = () => {
    if (activeTab === 'home') {
      return <ResponsiveTimeline />;
    }

    if (activeTab === 'profession' && activeSubTab === 'skills') {
      return <SkillsLayout />;
    }

    // Dynamic lookup for Education or Experience
    let dataItem: any = null;
    let type = '';

    if (activeTab === 'academic') {
      dataItem = EDUCATION.find(e => e.id === activeSubTab);
      type = 'academic';
    } else if (activeTab === 'profession') {
      dataItem = EXPERIENCE.find(e => e.id === activeSubTab);
      type = 'profession';
    }

    if (dataItem) {
       const content = (
         <div className="space-y-4">
           <p className="font-semibold text-lg">{dataItem.period} | {dataItem.location}</p>
           {dataItem.gpa && <p className="font-bold text-accent">GPA: {dataItem.gpa}</p>}
           
           <p>{dataItem.description || "No description available."}</p>
           
           {dataItem.achievements && (
             <div className="mt-4">
               <h4 className="font-bold mb-2">Key Achievements</h4>
               <ul className="list-disc pl-5 space-y-1">
                 {dataItem.achievements.map((a: string, i: number) => <li key={i}>{a}</li>)}
               </ul>
             </div>
           )}

            {dataItem.details && (
             <div className="mt-4">
               <h4 className="font-bold mb-2">Details</h4>
               <ul className="list-disc pl-5 space-y-1">
                 {dataItem.details.map((d: string, i: number) => <li key={i}>{d}</li>)}
               </ul>
             </div>
           )}
         </div>
       );

       return (
         <SplitContentLayout 
           title={dataItem.school || dataItem.company}
           subtitle={dataItem.degree || dataItem.role}
           content={content}
           tags={type === 'academic' ? ['Education', dataItem.location] : ['Work', dataItem.location]}
           imageSrc={dataItem.image || `https://picsum.photos/seed/${dataItem.id}/800/600`}
           onImageUpload={() => alert("Image upload simulation")}
         />
       );
    }

    return <div className="p-10 text-white">Select an item to view details</div>;
  };

  const activeNavSection = NAV_SECTIONS.find(s => s.id === activeTab);
  const hasSubMenu = activeNavSection?.subItems && activeNavSection.subItems.length > 0;

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-900 font-sans">
      
      {/* 1. Primary Sidebar (Green area) */}
      <div className="w-24 md:w-64 bg-[#4ade80] dark:bg-emerald-600 flex-shrink-0 flex flex-col justify-between transition-all z-30 shadow-xl">
        {/* Top: Branding */}
        <div className="p-6">
           <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter hidden md:block leading-tight">
             <span className="text-white">FU-KAI</span> KEVIN <span className="text-white">KUO</span>
           </h1>
           <span className="md:hidden font-black text-2xl text-slate-900">K.</span>
        </div>

        {/* Center: Navigation */}
        <div className="flex-1 flex flex-col justify-center space-y-2 px-3">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group ${
                activeTab === section.id 
                  ? 'bg-white/20 text-slate-900 font-bold shadow-md' 
                  : 'text-slate-800 hover:bg-white/10'
              }`}
            >
              <section.icon size={24} className={activeTab === section.id ? 'stroke-[2.5px]' : ''} />
              <span className="hidden md:block text-sm uppercase tracking-wider">{section.label}</span>
              {activeTab === section.id && <div className="ml-auto hidden md:block w-2 h-2 bg-slate-900 rounded-full"></div>}
            </button>
          ))}
        </div>

        {/* Bottom: Toggles */}
        <div className="p-6 space-y-4">
           {/* Language (Simulated) */}
           <button 
             onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
             className="w-full flex items-center justify-center md:justify-start gap-3 text-slate-800 hover:text-slate-900 transition-colors"
           >
             <div className="bg-slate-900/10 p-2 rounded-full">
               <Globe size={20} />
             </div>
             <span className="hidden md:block font-bold">{lang === 'en' ? 'EN' : 'ZH'}</span>
           </button>

           {/* Theme Toggle (Black/White Sun) */}
           <button 
             onClick={() => setDarkMode(!darkMode)}
             className="w-full flex items-center justify-center md:justify-start gap-3 group"
           >
             <div className={`p-2 rounded-full transition-colors border-2 ${darkMode ? 'bg-slate-900 border-white text-white' : 'bg-white border-slate-900 text-slate-900'}`}>
               {darkMode ? <Moon size={20} fill="currentColor" /> : <Sun size={20} fill="currentColor" />}
             </div>
             <span className="hidden md:block font-bold text-slate-800 group-hover:text-slate-900">
               {darkMode ? 'Dark' : 'Light'}
             </span>
           </button>
        </div>
      </div>

      {/* 2. Secondary Sidebar (Now Dark Slate) */}
      <div className={`
        flex-shrink-0 bg-slate-800 text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden flex flex-col border-r border-slate-700
        ${hasSubMenu ? 'w-48 md:w-64 opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-10'}
      `}>
        {hasSubMenu && (
          <div className="p-6 h-full flex flex-col w-48 md:w-64">
            <h2 className="text-xl font-bold mb-8 uppercase tracking-widest opacity-80 border-b border-white/20 pb-4">
              {activeNavSection?.label}
            </h2>
            <div className="space-y-2">
              {activeNavSection?.subItems?.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubTab(sub.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${
                    activeSubTab === sub.id
                      ? 'bg-white text-slate-900 font-bold shadow-md'
                      : 'hover:bg-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="text-sm">{sub.label}</span>
                  {activeSubTab === sub.id && <ChevronRight size={16} />}
                </button>
              ))}
            </div>
            
            {/* Decorative bottom element */}
            <div className="mt-auto opacity-10">
               <div className="text-6xl font-black font-serif leading-none">
                 0{NAV_SECTIONS.findIndex(s => s.id === activeTab) + 1}
               </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Main Content Area */}
      <div className="flex-1 relative bg-slate-900 overflow-hidden">
        {renderContent()}
      </div>

    </div>
  );
};

export default App;
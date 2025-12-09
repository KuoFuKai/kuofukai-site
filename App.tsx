import React, { useState, useEffect, useRef } from 'react';
import { 
  Home,
  Book,
  Briefcase,
  Sun, 
  Moon,
  Code2,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Award,
  GraduationCap,
  Users
} from 'lucide-react';
import { 
  TIMELINE, 
  EXPERIENCE, 
  EDUCATION, 
  SKILLS,
  PERSONAL_INFO
} from './constants';
import { TimelineItem, AcademicModule, AcademicGalleryItem, AcademicJob } from './types';

// --- Components ---

// 0. Image Marquee Component
const ImageMarquee = () => {
  // Use local background images from public/images/homepage/backgrounds/
  // The user has provided 15 webp images named 1.webp through 15.webp
  const baseImages = Array.from({ length: 15 }, (_, i) => ({
    src: `/images/homepage/backgrounds/${i + 1}.webp`, 
    alt: `Background ${i + 1}`,
    key: `bg-${i + 1}`
  }));

  // Create a duplicated list for seamless looping (triple it to ensure it covers wide screens)
  const images = [...baseImages, ...baseImages, ...baseImages];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-50 dark:bg-black select-none pointer-events-none transition-colors duration-500">
      {/* Gradient Overlay: 
          Light Mode: Fade to white (slate-50) from left.
          Dark Mode: Fade to black (slate-950) from left.
      */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-50 via-slate-50/80 to-slate-50/40 dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950/40 transition-colors duration-500" />
      
      {/* Marquee Container */}
      <div className="flex h-full animate-marquee w-max">
        {images.map((img, index) => (
          <div key={`${img.key}-${index}`} className="flex-shrink-0 h-full relative border-r border-slate-200 dark:border-white/5">
            <img 
              src={img.src} 
              alt={img.alt} 
              className="h-full w-auto max-w-none object-cover grayscale opacity-50 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// 1. Responsive Timeline with Scene Transitions
const ResponsiveTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem>(TIMELINE[TIMELINE.length - 1]);
  const [viewState, setViewState] = useState<'grid' | 'detail'>('grid');
  const [isHoveringMarquee, setIsHoveringMarquee] = useState(false);
  
  // Ref for the sliding container
  const detailContainerRef = useRef<HTMLDivElement>(null);
  // Ref for the internal scrollable content
  const detailScrollRef = useRef<HTMLDivElement>(null);
  const timelineStripRef = useRef<HTMLDivElement>(null);
  
  // Drag Scroll Logic Refs
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);
  
  // Touch handling
  const [touchStart, setTouchStart] = useState(0);

  const handleEraClick = (item: TimelineItem) => {
    // If user was dragging, do not select the item
    if (isDragging.current) return;
    setSelectedItem(item);
  };

  // Mouse Handlers for Drag Scrolling
  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    isDragging.current = false;
    if (timelineStripRef.current) {
      startX.current = e.pageX - timelineStripRef.current.offsetLeft;
      scrollLeft.current = timelineStripRef.current.scrollLeft;
    }
  };

  const onMouseLeave = () => {
    isDown.current = false;
  };

  const onMouseUp = () => {
    isDown.current = false;
    // We intentionally don't reset isDragging here immediately so the onClick handler 
    // (which fires after mouseUp) can check it.
    // It will be reset on the next MouseDown.
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    if (timelineStripRef.current) {
      const x = e.pageX - timelineStripRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // Scroll speed multiplier
      
      // Determine if it's a drag or just a sloppy click
      if (Math.abs(walk) > 5) {
        isDragging.current = true;
      }
      
      timelineStripRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const backToGrid = () => {
    setViewState('grid');
  };

  const enterDetailView = () => {
    setViewState('detail');
  };

  const handleDetailWheel = (e: React.WheelEvent) => {
    if (viewState === 'detail' && detailScrollRef.current) {
      if (detailScrollRef.current.scrollTop <= 0 && e.deltaY < -40) {
        backToGrid();
      }
    }
  };

  const handleGridWheel = (e: React.WheelEvent) => {
    if (viewState === 'grid' && e.deltaY > 40) {
      enterDetailView();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endY = e.changedTouches[0].clientY;
    if (viewState === 'grid' && touchStart - endY > 70) {
       enterDetailView();
    }
    if (viewState === 'detail' && detailScrollRef.current?.scrollTop === 0 && endY - touchStart > 70) {
      backToGrid();
    }
  };

  // Navigation Logic
  const currentIndex = TIMELINE.findIndex(item => item.year === selectedItem.year);
  const prevItem = currentIndex > 0 ? TIMELINE[currentIndex - 1] : null;
  const nextItem = currentIndex < TIMELINE.length - 1 ? TIMELINE[currentIndex + 1] : null;

  const handleNavigate = (item: TimelineItem) => {
    setSelectedItem(item);
    if (detailScrollRef.current) {
      detailScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Prepare gallery items for vertical marquee (duplicate for seamless loop)
  // Fallback to a default if no gallery exists, though TIMELINE now has placeholders
  const defaultGallery = [
    { image: `https://picsum.photos/seed/${selectedItem.year}-1/800/600`, description: selectedItem.title },
    { image: `https://picsum.photos/seed/${selectedItem.year}-2/800/600`, description: "Key Milestone" },
    { image: `https://picsum.photos/seed/${selectedItem.year}-3/800/600`, description: "Professional Growth" },
    { image: `https://picsum.photos/seed/${selectedItem.year}-4/800/600`, description: selectedItem.year }
  ];
  
  const galleryItems = selectedItem.gallery || defaultGallery;
  
  // Ensure enough items for smooth scroll by duplicating
  let scrollItems = [...galleryItems];
  if (scrollItems.length < 4) {
    scrollItems = [...scrollItems, ...scrollItems, ...scrollItems];
  }
  // Double for infinite loop transition
  scrollItems = [...scrollItems, ...scrollItems];


  return (
    <div className="relative h-full w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white overflow-hidden font-sans transition-colors duration-500">
      
      {/* SCENE 1: OVERVIEW (Split Layout) */}
      <div 
        onWheel={handleGridWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`absolute inset-0 z-10 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          viewState === 'grid' ? 'translate-y-0 opacity-100' : '-translate-y-1/2 opacity-50 pointer-events-none'
        }`}
      >
        {/* 1. Background Layer */}
        <ImageMarquee />

        {/* 2. Content Layer */}
        <div className="flex-1 min-h-0 relative z-20 flex items-center justify-center p-6 md:p-12">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
                
                {/* Left: Personal Intro */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-emerald-600 dark:text-neon mb-4 tracking-tight drop-shadow-sm transition-colors duration-300">
                      I'm Kevin!
                    </h2>
                    <h3 className="text-xl md:text-2xl text-slate-900 dark:text-white font-bold mb-6 leading-tight drop-shadow-sm transition-colors duration-300">
                      {PERSONAL_INFO.tagline}
                    </h3>
                    <div className="prose prose-lg text-slate-700 dark:text-slate-200 overflow-y-auto pr-2 custom-scrollbar max-h-[40vh] lg:max-h-[50vh] transition-colors duration-300">
                        {PERSONAL_INFO.about.split('\n\n').map((para, i) => (
                          <p key={i} className="mb-4 text-base md:text-lg leading-relaxed">{para}</p>
                        ))}
                    </div>
                </div>

                {/* Right: Profile Picture */}
                <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
                    <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl dark:shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-slate-200 dark:border-slate-700 group transition-all duration-300">
                        <img 
                          src="/images/homepage/portrait/1.webp" 
                          alt="Kevin Profile" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                        />
                        
                        {/* Overlay frame effect */}
                        <div className="absolute inset-0 ring-1 ring-black/5 dark:ring-white/10 pointer-events-none" />
                        
                        {/* Name Tag */}
                        <div className="absolute bottom-6 left-6 right-6">
                           <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-4 rounded-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                              <p className="font-serif font-bold text-slate-900 dark:text-white text-lg">Kevin Kuo</p>
                              <p className="text-emerald-600 dark:text-neon text-xs font-mono uppercase tracking-widest">Senior Engineer</p>
                           </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* MIDDLE: Horizontal Timeline Strip */}
        <div className="flex-shrink-0 z-20">
             <div 
                ref={timelineStripRef}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                className="flex items-end gap-6 px-4 md:px-12 py-8 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none"
             >
                {TIMELINE.map((item, index) => {
                  const isActive = selectedItem.year === item.year;
                  return (
                    <button 
                      key={index}
                      onClick={() => handleEraClick(item)}
                      className={`
                        flex-shrink-0 relative rounded-xl transition-all duration-300 flex flex-col items-center justify-between p-4 border group/item shadow-lg
                        ${isActive 
                          ? 'w-60 h-80 bg-white dark:bg-slate-800 border-emerald-500 dark:border-neon shadow-emerald-500/20 dark:shadow-[0_0_20px_rgba(132,204,22,0.4)] -translate-y-6' 
                          : 'w-44 h-60 bg-white/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-500'
                        }
                      `}
                    >
                       <div className={`text-xl font-mono font-bold transition-colors ${isActive ? 'text-emerald-600 dark:text-neon' : 'text-slate-500 dark:text-slate-500 group-hover/item:text-slate-700 dark:group-hover/item:text-slate-300'}`}>
                         {item.year}
                       </div>
                       
                       <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-emerald-500 dark:bg-neon scale-125' : 'bg-slate-300 dark:bg-slate-600'}`} />

                       <div className={`text-base font-bold text-center line-clamp-2 w-full px-2 transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200'}`}>
                         {item.title}
                       </div>
                    </button>
                  );
                })}
             </div>
        </div>

        {/* BOTTOM: Info Panel */}
        <div 
          onClick={enterDetailView}
          className="flex-shrink-0 h-48 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-700 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-20 flex flex-col justify-center px-4 md:px-12 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group duration-300"
        >
           <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                 <div className="flex items-center gap-4 mb-2">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-neon/10 text-emerald-700 dark:text-neon rounded font-mono text-sm font-bold border border-emerald-200 dark:border-neon/20 transition-colors">
                      {selectedItem.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-neon transition-colors">{selectedItem.title}</h3>
                 </div>
                 <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed line-clamp-2 md:line-clamp-2 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                   {selectedItem.description}
                 </p>
              </div>
              
              {/* Scroll Prompt */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center gap-1 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-neon">Scroll Down</span>
                  <ChevronDown size={32} className="text-slate-900 dark:text-white animate-bounce" strokeWidth={2} />
              </div>
           </div>
        </div>
      </div>

      {/* SCENE 2: DETAIL VIEW (Slide Up) */}
      <div 
        ref={detailContainerRef}
        className={`absolute inset-0 z-30 bg-slate-50 dark:bg-slate-950 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          viewState === 'detail' ? 'translate-y-0' : 'translate-y-[105%]'
        }`}
      >
        {/* Navigation / Dismiss Bar */}
        <div className="flex-shrink-0 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between transition-colors">
          <button 
            onClick={backToGrid}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-wider text-sm font-bold"
          >
            <ChevronLeft size={18} />
            Back to Timeline
          </button>
          <div className="text-slate-400 dark:text-slate-500 text-xs flex items-center gap-1 opacity-80">
            <ArrowUp size={14} className="animate-bounce" />
            Scroll Up to Return
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative overflow-hidden">
          
          {/* FLOATING LEFT NAVIGATION */}
          {prevItem && (
            <button 
              onClick={(e) => { e.stopPropagation(); handleNavigate(prevItem); }}
              className="absolute left-0 top-0 bottom-0 z-40 w-16 md:w-24 bg-gradient-to-r from-slate-200/80 via-slate-200/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent flex items-center justify-center md:justify-start md:pl-6 group cursor-pointer outline-none transition-all hover:w-20 md:hover:w-32"
              aria-label="Previous Era"
            >
               <div className="relative flex flex-col items-center transform transition-transform group-hover:-translate-x-1">
                  <ChevronLeft size={48} className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-neon transition-colors" strokeWidth={1.5} />
                  {/* Position text absolute to prevent layout shift on vertical centering */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 flex flex-col items-center">
                    <span className="hidden md:block text-xs font-bold text-slate-700 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest [writing-mode:vertical-rl] whitespace-nowrap">
                      {prevItem.year}
                    </span>
                  </div>
               </div>
            </button>
          )}

          {/* FLOATING RIGHT NAVIGATION */}
          {nextItem && (
            <button 
              onClick={(e) => { e.stopPropagation(); handleNavigate(nextItem); }}
              className="absolute right-0 top-0 bottom-0 z-40 w-16 md:w-24 bg-gradient-to-l from-slate-200/80 via-slate-200/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent flex items-center justify-center md:justify-end md:pr-6 group cursor-pointer outline-none transition-all hover:w-20 md:hover:w-32"
              aria-label="Next Era"
            >
              <div className="relative flex flex-col items-center transform transition-transform group-hover:translate-x-1">
                  <ChevronRight size={48} className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-neon transition-colors" strokeWidth={1.5} />
                  {/* Position text absolute to prevent layout shift on vertical centering */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 flex flex-col items-center">
                    <span className="hidden md:block text-xs font-bold text-slate-700 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                      {nextItem.year}
                    </span>
                  </div>
              </div>
            </button>
          )}

          {/* SCROLLABLE CONTENT INNER */}
          <div 
            ref={detailScrollRef}
            onWheel={handleDetailWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="absolute inset-0 overflow-y-auto"
          >
            <div className="min-h-full flex flex-col lg:flex-row">
              {/* Left: Text Content - Increased flex to give more space */}
              <div className="flex-1 lg:flex-[2.5] py-8 lg:py-4 flex flex-col justify-center">
                {/* Modified container: Removed max-w, added symmetrical padding for arrows */}
                <div className="w-full px-16 md:px-24">
                  <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-neon/10 text-emerald-700 dark:text-neon rounded-full text-sm font-mono font-bold mb-6 transition-colors">
                    {selectedItem.year}
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-slate-900 dark:text-white leading-tight transition-colors">
                    {selectedItem.title}
                  </h1>
                  
                  <div className="h-1 w-20 bg-emerald-500 dark:bg-neon mb-8 transition-colors"></div>
                  
                  <div className="prose prose-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 dark:prose-invert transition-colors max-w-none">
                    <p className="text-xl font-light text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-slate-300 dark:border-slate-700 pl-4">
                      {selectedItem.description}
                    </p>
                    {selectedItem.details && (
                      <div className="text-base text-slate-600 dark:text-slate-400 space-y-4">
                        {selectedItem.details.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Vertical Image Marquee */}
              {/* Modified wrapper: Widen to 38% (approx 1/3) while keeping pr-24 padding for arrows */}
              <div className="flex-1 lg:flex-none lg:w-[38%] flex flex-col justify-center p-4 lg:py-12 lg:pr-24 lg:pl-0 min-h-[40vh] lg:min-h-auto">
                  <div 
                    className="w-full h-full relative overflow-hidden rounded-2xl shadow-2xl bg-slate-100 dark:bg-slate-900 ring-1 ring-slate-900/5 dark:ring-white/10"
                    onMouseEnter={() => setIsHoveringMarquee(true)}
                    onMouseLeave={() => setIsHoveringMarquee(false)}
                  >
                   {/* Masking Gradients */}
                   <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-100 dark:from-slate-900 to-transparent z-20 pointer-events-none" />
                   <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-100 dark:from-slate-900 to-transparent z-20 pointer-events-none" />

                   {/* Marquee Track */}
                   <div className="absolute inset-0 w-full h-full group">
                      <div className="animate-marquee-vertical flex flex-col w-full group-hover:[animation-play-state:paused]">
                         {scrollItems.map((item, idx) => (
                           <div 
                             key={`timeline-gallery-${idx}`}
                             className={`
                               relative w-full aspect-[16/10] overflow-hidden transition-all duration-300 flex-shrink-0 group/item border-y border-transparent hover:border-emerald-500 dark:hover:border-neon
                             `}
                           >
                              <img src={item.image} alt={item.description} className="w-full h-full object-cover transform transition-transform duration-700 group-hover/item:scale-105" />
                              
                              {/* Description Overlay */}
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-12 flex flex-col justify-end opacity-100 transition-opacity duration-300">
                                 <div className="text-white font-medium text-sm md:text-base leading-snug drop-shadow-md border-l-4 border-emerald-500 dark:border-neon pl-3">
                                   {item.description}
                                 </div>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                   
                   {/* Hint */}
                   <div className={`absolute bottom-8 right-8 z-30 pointer-events-none transition-opacity duration-300 bg-black/50 px-3 py-1 rounded text-white text-xs font-bold tracking-wider ${isHoveringMarquee ? 'opacity-0' : 'opacity-50'}`}>
                      HOVER TO PAUSE
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

// 2. Academic Layout with Horizontal Tabs & Gallery Marquee
interface AcademicLayoutProps {
  title: string;
  subtitle: string;
  period: string;
  modules: AcademicModule[];
  gallery?: AcademicGalleryItem[];
  location: string;
  stats?: { gpa?: string; rank?: string; avgScore?: string; rankLabel?: string }; // Added rankLabel
  tagline?: string; // Added optional tagline prop
  department?: string; // Added optional department prop
  variant?: 'tabs' | 'stack'; // Added variant to control layout mode
}

const AcademicLayout: React.FC<AcademicLayoutProps> = ({ 
  title, 
  subtitle, 
  period,
  modules,
  gallery,
  location,
  stats,
  tagline,
  department,
  variant = 'tabs' // Default to tabs
}) => {
  const [activeModule, setActiveModule] = useState<AcademicModule>(modules[0]);
  const [isHoveringMarquee, setIsHoveringMarquee] = useState(false);

  // Ensure activeModule is valid when switching entries or modules change
  useEffect(() => {
    setActiveModule(modules[0]);
  }, [modules]);

  // Determine if this is a "Full Width" module (Thesis or Capstone) which hides the marquee
  const isFullWidth = activeModule.type === 'thesis' || activeModule.type === 'project';

  // Marquee pause handlers
  const handleMarqueeEnter = () => setIsHoveringMarquee(true);
  const handleMarqueeLeave = () => setIsHoveringMarquee(false);

  // Helper: Parse Bold Text (**text**)
  const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Helper: Markdown-like Content Renderer
  // Handles lists (- or •), headers (Emoji/Numbers), and paragraphs
  const renderMarkdownText = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: React.ReactNode[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="mb-4 space-y-1 text-slate-600 dark:text-slate-300">
            {currentList}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      // 1. Calculate leading spaces to detect indentation level
      const leadingSpaces = line.search(/\S|$/); 
      const trimmed = line.trim();

      if (!trimmed) {
        flushList();
        // Add a small spacer for empty lines to maintain visual separation
        if (index < lines.length - 1) {
             elements.push(<div key={`spacer-${index}`} className="h-2" />);
        }
        return;
      }

      // 2. Check for list item (starts with -, •, or *)
      if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
        const content = trimmed.substring(2);
        
        // Heuristic: If 2 or more spaces, treat as nested item
        const isNested = leadingSpaces >= 2;

        // Styling Logic:
        // - Parent: Standard list-disc, green/neon marker
        // - Nested: Hollow circle, indented (ml-8), gray marker
        const listStyle = isNested 
          ? "list-[circle] ml-9 marker:text-slate-400 dark:marker:text-slate-500 mt-1" 
          : "list-disc ml-5 marker:text-emerald-500 dark:marker:text-neon";

        currentList.push(
          <li key={`li-${index}`} className={`${listStyle} pl-2`}>
            {parseBold(content)}
          </li>
        );
        return;
      }

      // If not a list item, flush any accumulated list
      flushList();

      // 3. Check for Header (Emoji or Numbered Title or Fully Bold Line)
      // Pattern: Starts with Emoji OR "1. ", "2. " etc. OR wrapped entirely in **
      const isEmojiHeader = /^(📖|🛠️|🚀|💡|📂)/.test(trimmed);
      const isNumberedHeader = /^[0-9]+\.\s/.test(trimmed);
      const isBoldLine = trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length < 100;

      if (isEmojiHeader || isNumberedHeader || isBoldLine) {
        // Remove ** wrapper if it's a bold line for cleaner header styling
        const headerContent = isBoldLine ? trimmed.slice(2, -2) : trimmed;
        elements.push(
          <h3 key={`head-${index}`} className="text-lg md:text-xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100 leading-snug">
            {parseBold(headerContent)}
          </h3>
        );
      } else {
        // Regular paragraph
        elements.push(
          <div key={`p-${index}`} className="mb-2 leading-relaxed text-slate-600 dark:text-slate-300">
            {parseBold(trimmed)}
          </div>
        );
      }
    });
    
    flushList(); // Final flush
    return elements;
  };

  // Helper: Advanced Content Parsing (Supports Markdown-style Code Blocks + New Markdown Text)
  const parseContent = (text: string) => {
    // Regex matches ```lang \n code ```
    const parts = text.split(/```(\w*)\n([\s\S]*?)```/g);
    
    // If no code blocks found, return markdown-like text parsing
    if (parts.length === 1) {
      return renderMarkdownText(text);
    }

    const result = [];
    for (let i = 0; i < parts.length; i++) {
      if (i % 3 === 0) {
        // Even index: Text Content -> Use Markdown Renderer
        if (parts[i]) {
          result.push(<div key={`text-${i}`}>{renderMarkdownText(parts[i])}</div>);
        }
      } else if (i % 3 === 1) {
        // Odd index: Language Capture Group
        // The next item (i+1) is the Code Content Capture Group
        const lang = parts[i] || 'plaintext';
        const code = parts[i + 1];
        
        result.push(
          <div key={`code-${i}`} className="my-6 bg-[#1e1e1e] text-[#d4d4d4] rounded-lg font-mono text-sm overflow-hidden border border-slate-700 shadow-xl">
             {/* Terminal Header */}
             <div className="flex justify-between items-center px-4 py-2 bg-[#252526] border-b border-[#333] select-none">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{lang}</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
             </div>
             {/* Code Body */}
             <div className="p-4 overflow-x-auto">
                <pre className="whitespace-pre font-mono leading-relaxed">{code}</pre>
             </div>
          </div>
        );
        i++; // Skip the code part in the loop since we handled it
      }
    }
    return result;
  };

  // Render content based on module type
  const renderModuleContent = (module: AcademicModule) => {
    const { type, content, honors, activities, jobs } = module;
    
    // Default prose content wrapper
    const renderProse = () => (
      <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed max-w-none">
         {Array.isArray(content) ? (
            <div className="space-y-2">
              {content.map((paragraph, i) => (
                <div key={i}>
                  {parseContent(paragraph)}
                </div>
              ))}
            </div>
         ) : (
            <div>{parseContent(content)}</div>
         )}
      </div>
    );

    // Honors List Component (Reusable) - Updated to use object structure with year badge
    const renderHonors = (items: { title: string; year: string }[]) => (
      <div className="space-y-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
         <h4 className="text-lg font-bold text-emerald-600 dark:text-neon flex items-center gap-2">
           <Award size={20} />
           Honors & Awards
         </h4>
         <ul className="space-y-3">
           {items.map((item, idx) => (
             <li key={idx} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-slate-700 dark:text-slate-200 font-medium">{item.title}</span>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-100 dark:border-slate-800 ml-4 flex-shrink-0">{item.year}</span>
             </li>
           ))}
         </ul>
      </div>
    );

    // Jobs List Component
    const renderJobs = (items: AcademicJob[]) => (
      <div className="space-y-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
         <h4 className="text-lg font-bold text-emerald-600 dark:text-neon flex items-center gap-2">
           <Briefcase size={20} />
           Internships & Part-time Work
         </h4>
         <ul className="space-y-3">
           {items.map((item, idx) => (
             <li key={idx} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">{item.role}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.company}</span>
                </div>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-100 dark:border-slate-800 ml-4 flex-shrink-0 text-right">{item.year}</span>
             </li>
           ))}
         </ul>
      </div>
    );

    // Activities List Component
    const renderActivities = (items: { name: string; year: string }[]) => (
      <div className="space-y-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
         <h4 className="text-lg font-bold text-emerald-600 dark:text-neon flex items-center gap-2">
           <Users size={20} />
           Activities & Societies
         </h4>
         <ul className="space-y-3">
           {items.map((item, idx) => (
             <li key={idx} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-slate-700 dark:text-slate-200 font-medium">{item.name}</span>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded border border-slate-100 dark:border-slate-800 ml-4 flex-shrink-0">{item.year}</span>
             </li>
           ))}
         </ul>
      </div>
    );

    // Specific Module Types
    if (type === 'grades' && Array.isArray(content)) {
       return (
         <div className="space-y-4 animate-fadeIn">
            <h4 className="text-lg font-bold text-emerald-600 dark:text-neon flex items-center gap-2">
              <GraduationCap size={20} />
              Key Coursework
            </h4>
            <ul className="space-y-2">
              {content.map((item, idx) => {
                // Check if string is formatted as "Course|Score|Grade"
                if (typeof item === 'string' && item.includes('|')) {
                  const [name, score, grade] = item.split('|');
                  return (
                    <li key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                       <span className="font-medium text-slate-700 dark:text-slate-200">{name}</span>
                       <div className="flex items-center gap-3 text-sm flex-shrink-0">
                          <span className="font-mono text-slate-500 dark:text-slate-400">Score: <b className="text-slate-900 dark:text-white">{score}</b></span>
                          <span className={`min-w-[2.5rem] text-center px-2 py-0.5 rounded text-xs font-bold border ${grade.includes('A') ? 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800' : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'}`}>
                            {grade}
                          </span>
                       </div>
                    </li>
                  );
                }
                
                // Fallback for simple list items
                return (
                  <li key={idx} className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                     <div className="w-2 h-2 bg-emerald-500 dark:bg-neon rounded-full" />
                     <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                  </li>
                );
              })}
            </ul>
         </div>
       );
    }
    
    // Default + Optional Honors + Jobs + Activities (Merged)
    return (
      <div className="animate-fadeIn">
        {renderProse()}
        {honors && honors.length > 0 && renderHonors(honors)}
        {jobs && jobs.length > 0 && renderJobs(jobs)}
        {activities && activities.length > 0 && renderActivities(activities)}
      </div>
    );
  };

  // Prepare items for marquee (duplicate for seamless loop)
  // Ensure we have at least 4 items for a smooth look, duplicate if necessary
  // Default to mapped images if no gallery provided
  const baseGalleryItems = gallery || modules.map(m => ({ 
      image: `https://picsum.photos/seed/${m.label}/800/600`, 
      description: m.label 
  }));
  
  let marqueeItems = [...baseGalleryItems];
  if (marqueeItems.length < 4) {
    marqueeItems = [...marqueeItems, ...marqueeItems, ...marqueeItems]; // Duplicate multiple times to fill space
  }
  // Double the whole list for infinite scroll seamless join
  const scrollItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="h-full w-full overflow-hidden bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 flex flex-col lg:flex-row">
        
        {/* LEFT COLUMN: Dynamic Content */}
        {/* Conditional styling: if full width, use w-full, else flex-1 and lg:w-1/2 (50%) */}
        {/* Added px-12 lg:px-24 padding to match Timeline Detail View whitespace */}
        <div className={`${isFullWidth ? 'w-full' : 'flex-1 lg:w-1/2'} px-12 py-8 lg:px-24 lg:py-16 flex flex-col relative z-10 overflow-y-auto transition-all duration-300`}>
          {/* Conditional Max Width: if full width, wider container (max-w-5xl), else remove limit to fill space (max-w-none) */}
          <div className={`${isFullWidth ? 'max-w-5xl' : 'max-w-none'} w-full min-h-full flex flex-col transition-all duration-300`}>
            
            {/* Header with Horizontal Tabs */}
            <div className="mb-8 flex-shrink-0">
               <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 block">{location}</span>
               <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-2 text-slate-900 dark:text-white">{title}</h1>
               
               {/* Tagline Display (New) */}
               {tagline && (
                 <p className="text-base text-slate-500 dark:text-slate-400 font-medium mb-3 italic">
                   {tagline}
                 </p>
               )}

               {/* Department (If present, use old "Green/Neon" style with bold uppercase) */}
               {department && (
                  <div className="text-lg font-bold text-emerald-600 dark:text-neon uppercase tracking-wider mb-4">
                    {department}
                  </div>
               )}

               {/* Role / Subtitle - Conditional Rendering */}
               {department ? (
                 <div className="mb-6 inline-block">
                   <div className="flex flex-row items-center gap-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 w-fit">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">JOB TITLE</div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white leading-none">{subtitle}</div>
                      </div>
                   </div>
                 </div>
               ) : (
                 <div className="text-xl text-emerald-600 dark:text-neon font-medium mb-1">
                   {subtitle}
                 </div>
               )}
               
               <div className="text-md text-slate-500 dark:text-slate-400 font-mono mb-4">{period}</div>
               
               {/* --- Updated Stats Section --- */}
               {stats && (
                 <div className="flex flex-row items-center gap-6 mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 w-fit">
                    {stats.gpa && (
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">GPA</div>
                        <div className="text-xl font-mono font-bold text-slate-900 dark:text-white leading-none">{stats.gpa}</div>
                      </div>
                    )}
                    
                    {stats.avgScore && (
                      <>
                        <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">AVG</div>
                          <div className="text-xl font-mono font-bold text-slate-900 dark:text-white leading-none">{stats.avgScore}</div>
                        </div>
                      </>
                    )}

                    {stats.rank && (
                      <>
                        <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{stats.rankLabel || 'Rank'}</div>
                          <div className="text-xl font-mono font-bold text-emerald-600 dark:text-neon leading-none">{stats.rank}</div>
                        </div>
                      </>
                    )}
                 </div>
               )}

               {/* Horizontal Tabs Navigation - Only show if variant is 'tabs' */}
               {variant === 'tabs' && (
                 <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-700 pb-1 mt-6">
                   {modules.map((mod, idx) => {
                     const isActive = activeModule.label === mod.label;
                     return (
                       <button
                         key={idx}
                         onClick={() => setActiveModule(mod)}
                         className={`
                           px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-t-lg transition-all duration-300
                           ${isActive 
                             ? 'bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-neon border-b-2 border-emerald-500 dark:border-neon' 
                             : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                           }
                         `}
                       >
                         {mod.label}
                       </button>
                     );
                   })}
                 </div>
               )}
            </div>

            {/* Dynamic Body */}
            <div className="flex-1">
              {variant === 'tabs' ? (
                // --- TABS MODE: Show only active module ---
                <div className="animate-fadeIn">
                   <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 transition-all duration-300">
                     {activeModule.title}
                   </h2>
                   {renderModuleContent(activeModule)}
                </div>
              ) : (
                // --- STACK MODE: Show all modules vertically ---
                <div>
                  {modules.map((module, index) => (
                    <div key={index} className="mb-12 border-b border-slate-100 dark:border-slate-800/50 last:border-0 pb-12 last:pb-0">
                        {/* Module Header */}
                        <div className="mb-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-neon mb-2 block">{module.label}</span>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                                {module.title}
                            </h2>
                        </div>
                        
                        {/* Content */}
                        {renderModuleContent(module)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Vertical Marquee (Gallery) */}
        {/* Only show if not full width. Width set to lg:w-1/2 (50%) with pr-24 padding */}
        {!isFullWidth && (
          <div 
            className="flex-1 lg:flex-none lg:w-1/2 bg-slate-100 dark:bg-black/20 relative overflow-hidden transition-all duration-300 lg:pr-24"
            onMouseEnter={handleMarqueeEnter}
            onMouseLeave={handleMarqueeLeave}
          >
            {/* Masking Gradients - Made Subtle */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-slate-900 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-20 pointer-events-none" />

            {/* Marquee Track - Full Width, No Padding */}
            <div className="absolute inset-0 w-full h-full group">
                <div className="animate-marquee-vertical flex flex-col w-full group-hover:[animation-play-state:paused]">
                  {scrollItems.map((item, idx) => (
                    <div 
                      key={`gallery-${idx}`}
                      className={`
                        relative w-full aspect-[16/10] overflow-hidden transition-all duration-300 flex-shrink-0 group/item border-y border-transparent hover:border-emerald-500 dark:hover:border-neon
                      `}
                    >
                        <img src={item.image} alt="Gallery Item" className="w-full h-full object-cover transform transition-transform duration-700 group-hover/item:scale-105" />
                        
                        {/* Description Overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-12 flex flex-col justify-end opacity-100 transition-opacity duration-300">
                          <div className="text-white font-medium text-sm md:text-base leading-snug drop-shadow-md border-l-4 border-emerald-500 dark:border-neon pl-3">
                            {item.description}
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
            </div>
            
            {/* Hint */}
            <div className={`absolute bottom-8 right-8 z-30 pointer-events-none transition-opacity duration-300 bg-black/50 px-3 py-1 rounded text-white text-xs font-bold tracking-wider ${isHoveringMarquee ? 'opacity-0' : 'opacity-50'}`}>
                HOVER TO PAUSE
            </div>
          </div>
        )}
    </div>
  );
};

// 3. Skills Layout
const SkillsLayout = () => {
  return (
    <div className="h-full w-full overflow-y-auto bg-white dark:bg-slate-900 p-8 lg:p-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white">Technical Arsenal</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical proficiency, acquired through professional experience and rigorous self-study.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          {SKILLS.map((category, idx) => (
             <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-xl font-bold text-emerald-600 dark:text-neon mb-6 uppercase tracking-wider flex items-center gap-3">
                  <div className="w-2 h-8 bg-emerald-500 dark:bg-neon rounded-full"></div>
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                       <div className="flex justify-between items-end mb-2">
                          <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-white transition-colors">{skill.name}</span>
                          <span className="text-xs font-mono text-slate-400">{skill.startYear}</span>
                       </div>
                       {/* Proficiency Bar */}
                       <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 group-hover:saturate-150 ${
                              skill.proficiency === 'Expert' ? 'w-[95%] bg-emerald-500 dark:bg-neon' : 
                              skill.proficiency === 'Intermediate' ? 'w-[70%] bg-blue-500 dark:bg-blue-400' : 
                              'w-[40%] bg-slate-400'
                            }`} 
                          />
                       </div>
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

// 4. Main App Shell
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubSection, setActiveSubSection] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Initialize Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Navigation Items
  const navItems = [
    { id: 'home', label: 'Timeline', icon: Home },
    { 
      id: 'experience', 
      label: 'Profession', 
      icon: Briefcase,
      subItems: EXPERIENCE.map(e => ({ id: e.id, label: e.company }))
    },
    { 
      id: 'education', 
      label: 'Academics', 
      icon: Book,
      subItems: EDUCATION.map(e => ({ id: e.id, label: e.school }))
    },
    { id: 'skills', label: 'Skills', icon: Code2 },
  ];

  // Logic to switch content
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <ResponsiveTimeline />;
      case 'skills':
        return <SkillsLayout />;
      case 'experience': {
        // Find active experience item or default to first
        const item = activeSubSection 
          ? EXPERIENCE.find(e => e.id === activeSubSection) 
          : EXPERIENCE[0];
        if (!item) return <ResponsiveTimeline />;
        return (
          <AcademicLayout 
            key={item.id}
            title={item.company}
            subtitle={item.role}
            period={item.period}
            location={item.location}
            tagline={item.tagline}
            department={item.department}
            modules={item.modules}
            gallery={item.gallery}
            variant="stack"
          />
        );
      }
      case 'education': {
        const item = activeSubSection
          ? EDUCATION.find(e => e.id === activeSubSection)
          : EDUCATION[0];
        if (!item) return <ResponsiveTimeline />;
        return (
          <AcademicLayout
            key={item.id}
            title={item.school}
            subtitle={item.degree}
            period={item.period}
            location={item.location}
            stats={item.stats}
            modules={item.modules}
            gallery={item.gallery}
            variant="tabs"
          />
        );
      }
      default:
        return <ResponsiveTimeline />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-slate-50 dark:bg-slate-900 overflow-hidden font-sans">
        
        {/* Sidebar */}
        <nav 
          onMouseEnter={() => setIsSidebarExpanded(true)}
          onMouseLeave={() => setIsSidebarExpanded(false)}
          className={`
            fixed lg:relative z-50 h-full bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300 ease-in-out
            ${isSidebarExpanded ? 'w-64 shadow-2xl lg:shadow-none' : 'w-20'}
          `}
        >
          {/* Logo */}
          <div className="h-20 flex items-center justify-center border-b border-slate-100 dark:border-slate-900">
             <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 dark:from-neon dark:to-emerald-600 rounded-lg flex items-center justify-center text-white dark:text-black font-bold text-xl font-serif shadow-lg">
               K
             </div>
             <div className={`ml-3 overflow-hidden transition-all duration-300 ${isSidebarExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
                <span className="font-bold text-lg text-slate-800 dark:text-white font-serif whitespace-nowrap">Kevin Kuo</span>
             </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-6 px-3 space-y-2 overflow-y-auto no-scrollbar">
             {navItems.map((item) => {
               const isActive = activeSection === item.id;
               const Icon = item.icon;
               
               return (
                 <div key={item.id}>
                   <button
                     onClick={() => {
                        setActiveSection(item.id);
                        if (item.subItems && item.subItems.length > 0) {
                          setActiveSubSection(item.subItems[0].id);
                        } else {
                          setActiveSubSection(null);
                        }
                     }}
                     className={`
                       w-full flex items-center p-3 rounded-xl transition-all duration-200 group relative
                       ${isActive 
                         ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-neon shadow-sm' 
                         : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200'
                       }
                     `}
                   >
                      <Icon size={24} strokeWidth={isActive ? 2 : 1.5} className="flex-shrink-0" />
                      
                      <div className={`ml-3 overflow-hidden transition-all duration-300 ${isSidebarExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
                         <span className="font-medium whitespace-nowrap">{item.label}</span>
                      </div>

                      {/* Tooltip (only when collapsed) */}
                      {!isSidebarExpanded && (
                         <div className="absolute left-full ml-4 px-3 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                           {item.label}
                         </div>
                      )}
                   </button>
                   
                   {/* Submenu */}
                   {isActive && item.subItems && (
                     <div className={`overflow-hidden transition-all duration-300 ${isSidebarExpanded ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <div className="ml-4 pl-4 border-l-2 border-slate-100 dark:border-slate-800 space-y-1">
                          {item.subItems.map(sub => (
                            <button
                              key={sub.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubSection(sub.id);
                              }}
                              className={`
                                block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors whitespace-nowrap
                                ${activeSubSection === sub.id
                                  ? 'text-emerald-600 dark:text-neon font-bold bg-emerald-50/50 dark:bg-emerald-900/10'
                                  : 'text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                                }
                              `}
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                     </div>
                   )}
                 </div>
               );
             })}
          </div>

          {/* Footer Controls */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-900">
             <button 
               onClick={() => setDarkMode(!darkMode)}
               className="w-full flex items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-neon transition-colors"
             >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                <div className={`ml-3 overflow-hidden transition-all duration-300 ${isSidebarExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
                   <span className="text-sm font-medium whitespace-nowrap">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
             </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 h-full relative pl-20 lg:pl-0 w-full">
           {renderContent()}
        </main>
    </div>
  );
}
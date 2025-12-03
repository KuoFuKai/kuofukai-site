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
  ChevronDown,
  Award,
  GraduationCap
} from 'lucide-react';
import { 
  TIMELINE, 
  EXPERIENCE, 
  EDUCATION, 
  SKILLS,
  PERSONAL_INFO
} from './constants';
import { NavSection, TimelineItem, AcademicModule, AcademicGalleryItem } from './types';

// --- Components ---

// 0. Image Marquee Component
const ImageMarquee = () => {
  // Create a duplicated list for seamless looping (x2)
  const images = [...TIMELINE, ...TIMELINE].map((item, index) => ({
    src: `https://picsum.photos/seed/${item.year}/800/600`, 
    alt: item.title,
    key: `${item.year}-${index}`
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-50 dark:bg-black select-none pointer-events-none transition-colors duration-500">
      {/* Gradient Overlay: 
          Light Mode: Fade to white (slate-50) from left.
          Dark Mode: Fade to black (slate-950) from left.
      */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-50 via-slate-50/80 to-slate-50/40 dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950/40 transition-colors duration-500" />
      
      {/* Marquee Container */}
      <div className="flex h-full animate-marquee w-max">
        {images.map((img) => (
          <div key={img.key} className="flex-shrink-0 h-full relative border-r border-slate-200 dark:border-white/5">
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
                      MY JOURNEY
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
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
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
               <div className="flex flex-col items-center gap-2 transform transition-transform group-hover:-translate-x-1">
                  <ChevronLeft size={48} className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-neon transition-colors" strokeWidth={1.5} />
                  <span className="hidden md:block text-xs font-bold text-slate-700 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest [writing-mode:vertical-rl] whitespace-nowrap mt-4">
                    {prevItem.year}
                  </span>
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
              <div className="flex flex-col items-center gap-2 transform transition-transform group-hover:translate-x-1">
                  <ChevronRight size={48} className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-neon transition-colors" strokeWidth={1.5} />
                  <span className="hidden md:block text-xs font-bold text-slate-700 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 whitespace-nowrap mt-4">
                    {nextItem.year}
                  </span>
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
              <div className="flex-1 lg:flex-[1.2] p-8 lg:p-16 flex flex-col justify-center">
                <div className="max-w-xl mx-auto w-full px-8 md:px-12">
                  <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-neon/10 text-emerald-700 dark:text-neon rounded-full text-sm font-mono font-bold mb-6 transition-colors">
                    {selectedItem.year}
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-slate-900 dark:text-white leading-tight transition-colors">
                    {selectedItem.title}
                  </h1>
                  
                  <div className="h-1 w-20 bg-emerald-500 dark:bg-neon mb-8 transition-colors"></div>
                  
                  <div className="prose prose-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 dark:prose-invert transition-colors">
                    <p className="text-xl font-light text-slate-800 dark:text-slate-100 mb-6 border-l-4 border-slate-300 dark:border-slate-700 pl-4">
                      {selectedItem.description}
                    </p>
                    {selectedItem.details && (
                      <p className="text-base text-slate-600 dark:text-slate-400">
                        {selectedItem.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Vertical Image Marquee */}
              {/* Modified wrapper: Restricts width and adds padding to right (pr-24) so content doesn't hit the arrow area */}
              <div className="flex-1 lg:flex-none lg:w-[45%] flex flex-col justify-center p-4 lg:py-12 lg:pr-24 lg:pl-0 min-h-[40vh] lg:min-h-auto">
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
  modules: AcademicModule[];
  gallery?: AcademicGalleryItem[];
  location: string;
}

const AcademicLayout: React.FC<AcademicLayoutProps> = ({ 
  title, 
  subtitle, 
  modules,
  gallery,
  location
}) => {
  const [activeModule, setActiveModule] = useState<AcademicModule>(modules[0]);
  const [isHoveringMarquee, setIsHoveringMarquee] = useState(false);

  // Marquee pause handlers
  const handleMarqueeEnter = () => setIsHoveringMarquee(true);
  const handleMarqueeLeave = () => setIsHoveringMarquee(false);

  // Render content based on module type
  const renderModuleContent = () => {
    const { type, content, honors } = activeModule;
    
    // Default prose content wrapper
    const renderProse = () => (
      <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed">
         <p className="border-l-4 border-slate-300 dark:border-slate-700 pl-4">{content}</p>
      </div>
    );

    // Honors List Component (Reusable)
    const renderHonors = (items: string[]) => (
      <div className="space-y-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
         <h4 className="text-lg font-bold text-emerald-600 dark:text-neon flex items-center gap-2">
           <Award size={20} />
           Honors & Awards
         </h4>
         <ul className="space-y-3">
           {items.map((item, idx) => (
             <li key={idx} className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-500/20 text-slate-700 dark:text-slate-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 dark:bg-neon" />
                {item}
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
              {content.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                   <div className="w-2 h-2 bg-emerald-500 dark:bg-neon rounded-full" />
                   <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
         </div>
       );
    }
    
    // Default + Optional Honors (Merged)
    return (
      <div className="animate-fadeIn">
        {renderProse()}
        {honors && honors.length > 0 && renderHonors(honors)}
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
        <div className="flex-1 p-8 lg:p-16 flex flex-col relative z-10 overflow-y-auto">
          <div className="max-w-xl mx-auto w-full min-h-full flex flex-col">
            
            {/* Header with Horizontal Tabs */}
            <div className="mb-8 flex-shrink-0">
               <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 block">{location}</span>
               <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-2 text-slate-900 dark:text-white">{title}</h1>
               <div className="text-xl text-emerald-600 dark:text-neon font-medium mb-8">{subtitle}</div>
               
               {/* Horizontal Tabs Navigation */}
               <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-700 pb-1">
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
            </div>

            {/* Dynamic Body */}
            <div className="flex-1">
               <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 transition-all duration-300">
                 {activeModule.title}
               </h2>
               {renderModuleContent()}

                {/* Tags */}
                {activeModule.tags && (
                  <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                    {activeModule.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Vertical Marquee (Gallery) */}
        <div 
          className="flex-1 bg-slate-100 dark:bg-black/20 relative overflow-hidden"
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
    </div>
  );
};


// 3. Two Column Content Layout (For Profession Details - Kept for backward compatibility)
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

// 4. Skills Grid Layout
const SkillsLayout = () => {
  
  const getProficiencyStyle = (level: string) => {
    switch(level) {
      case 'Expert': 
        return 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30';
      case 'Beginner':
        return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="h-full w-full overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-8 lg:p-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Legend */}
        <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
           <h1 className="text-4xl font-serif font-bold mb-4">Professional Skills</h1>
           
           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mr-2">Format:</span>
              <div className="flex items-center gap-2">
                 <span className="font-bold text-slate-700 dark:text-slate-300">Skill Name</span>
                 <span className="text-slate-300 dark:text-slate-600">|</span>
                 <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">Proficiency</span>
                 <span className="text-slate-300 dark:text-slate-600">|</span>
                 <span className="font-mono text-slate-600 dark:text-slate-400">Since Year</span>
              </div>
           </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-accent flex items-center gap-2">
                <Code2 size={24} />
                {skillGroup.category}
              </h3>
              
              <div className="space-y-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between p-3 bg-white dark:bg-slate-700/50 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 transition-colors">
                    
                    {/* Name */}
                    <div className="font-bold text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </div>

                    <div className="flex items-center gap-3">
                       {/* Proficiency Badge */}
                       <span className={`px-2 py-1 rounded text-xs font-bold border ${getProficiencyStyle(skill.proficiency)}`}>
                         {skill.proficiency}
                       </span>
                       
                       {/* Year */}
                       <span className="font-mono text-xs font-medium text-slate-400 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                         {skill.startYear}
                       </span>
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
      { id: 'delta', label: "Delta Electronics" },
      { id: 'synnex', label: "Synnex Technology" },
    ]
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: Code2
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

    if (activeTab === 'skills') {
      return <SkillsLayout />;
    }

    // Dynamic lookup for Education or Experience
    let dataItem: any = null;
    let type = '';

    if (activeTab === 'academic') {
      dataItem = EDUCATION.find(e => e.id === activeSubTab);
      // If we have modules (the new structured data), use the AcademicLayout
      if (dataItem && dataItem.modules) {
        return (
          <AcademicLayout 
            key={dataItem.id} // Added key to force remount on school change
            title={dataItem.school}
            subtitle={dataItem.degree}
            modules={dataItem.modules}
            gallery={dataItem.gallery}
            location={dataItem.location}
          />
        );
      }
      type = 'academic';
    } else if (activeTab === 'profession') {
      dataItem = EXPERIENCE.find(e => e.id === activeSubTab);
      type = 'profession';
    }

    if (dataItem) {
       // Fallback for Profession or Legacy Academic items without modules
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
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-500">
      
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
      <div className="flex-1 relative bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-500">
        {renderContent()}
      </div>

    </div>
  );
};

export default App;
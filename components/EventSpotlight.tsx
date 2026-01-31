'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IntroSlide } from './CodeContest/IntroSlide';
import { OverviewSlide } from './CodeContest/OverviewSlide';
import { ObjectivesSlide } from './CodeContest/ObjectivesSlide';
import { FormatSlide } from './CodeContest/FormatSlide';
import { OutcomesSlide } from './CodeContest/OutcomesSlide';
import { AwardsSlide } from './CodeContest/AwardsSlide';
import { QRCodeSlide } from './CodeContest/QRCodeSlide';
import { SlideNavigation } from './CodeContest/SlideNavigation';
import { CodeRainBackground } from './CodeContest/CodeRainBackground';
import { TransitionEffect } from './CodeContest/TransitionEffect';
import { ChevronLeft, ChevronRight, Play, Share2, Sparkles as SparklesIcon,Loader2  } from "lucide-react";
import { EventCard } from './PreviousEvents/EventCard';


type Slide = { src: string; alt: string };
type EventType = {
  title: string;
  description: string;
  slides: Slide[];
};

/*const previousEvents: EventType[] = [
  {
    title: "CodeQuest 2025",
    description: "Exciting coding event with multiple challenges, certificates, and prizes.",
    slides: [
      { src: "/images/codequest/img1.jpg", alt: "CodeQuest Highlights" },
      { src: "/images/codequest/round2.jpg", alt: "Round 2 Challenges" },
      { src: "/images/codequest/hod.jpg", alt: "HOD Address" },
      { src: "/images/codequest/img2.jpg", alt: "CodeQuest Winners" },
    ],
  },
  {
    title: "CodeClash 2025",
    description: "CodeClash 2025: A phenomenal success with 150+ participants and 20 finalists.",
    slides: [
      { src: "/images/CodeClash/CodeClashPic2.jpeg", alt: "CodeClashPic2" },
      { src: "/images/CodeClash/CodeClashPic3.jpeg", alt: "CodeClashPic3" },
      { src: "/images/CodeClash/CodeClashPic4.jpeg", alt: "CodeClashPic4" },
      { src: "/images/CodeClash/CodeClashPic5.jpeg", alt: "CodeClashPic5" },
    ],
  },
];
function MiniMovie({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full mt-4 rounded-xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}
  */
 export default function App() {
  const events = [
    {
      title: 'Code Quest 2025',
      description: 'Exciting coding event with multiple challenges, certificates, and prizes.',
      images: [
        '/images/codequest/img1.jpg',
        '/images/codequest/round2.jpg',
        '/images/codequest/hod.jpg',
        '/images/codequest/img2.jpg'
      ],
    },
    {
      title: 'Code Clash 2025',
      description: 'CodeClash 2025: A phenomenal success with 150+ participants and 20 finalists.',
      images: [
        '/images/CodeClash/CodeClashPic2.jpeg',
        '/images/CodeClash/CodeClashPic3.jpeg',
        '/images/CodeClash/CodeClashPic4.jpeg',
        '/images/CodeClash/CodeClashPic5.jpeg',
      ],
    },
    {
      title: 'Scratch Your Brain 2025',
      description: 'Mind-bending puzzles and algorithmic riddles.',
      images: [
        '/images/Scratchyourbrain/SCYB-1.jpeg',
        '/images/Scratchyourbrain/SCYB-2.jpeg',
        '/images/Scratchyourbrain/SCYB-3.jpeg',
        '/images/Scratchyourbrain/SCYB-4.jpeg',
        '/images/Scratchyourbrain/SCYB-5.jpeg',
        '/images/Scratchyourbrain/SCYB-6.jpeg',
        '/images/Scratchyourbrain/SCYB-7.jpeg',
        '/images/Scratchyourbrain/SCYB-8.jpeg',
        '/images/Scratchyourbrain/SCYB-9.jpeg',
        '/images/Scratchyourbrain/SCYB-10.jpeg',
        '/images/Scratchyourbrain/SCYB-11.jpeg',
        '/images/Scratchyourbrain/SCYB-12.jpeg',

       

      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-white mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 40px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(59, 130, 246, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
  >
          </motion.h1>
          <motion.p
            className="text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              title={event.title}
              description={event.description}
              images={event.images}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Floating small elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full"
          animate={{ y: [0, -30, 0], x: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
    </div>
  );
}


// ------------------- Upcoming Events Data -------------------


// ------------------- UpcomingEventsSection -------------------
export function UpcomingEventCommingSoon() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-16 min-h-[270px] bg-black overflow-hidden rounded-xl shadow-2xl">
      {/* Animated floating sparkles */}
      <motion.div
        className="absolute top-8 left-14 w-8 h-8"
        initial={{ opacity: 0, scale: 0.8, x: -40, y: -20 }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparklesIcon className="w-8 h-8 text-yellow-300 animate-pulse" />
      </motion.div>
      <motion.div
        className="absolute bottom-12 right-20 w-10 h-10"
        initial={{ opacity: 0, scale: 0.8, x: 40, y: 20 }}
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <SparklesIcon className="w-10 h-10 text-pink-300 animate-ping" />
      </motion.div>

      {/* Loader/Spinner below Coming Soon */}
      <motion.div
        className="flex items-center justify-center my-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Loader2 className="w-12 h-12 text-indigo-400 animate-spin" />
      </motion.div>

      {/* Animated “Coming Soon” text */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center font-mono
            bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.05, 1],
          textShadow: [
            "0 0 28px #fbbf24",
            "0 0 40px #ec4899",
            "0 0 30px #6366f1"
          ]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        Coming Soon
      </motion.h2>

      {/* Shimmer line effect */}
      <motion.div
        className="h-1 w-32 bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-400 rounded-full mb-5"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: [0.4, 1, 0.4], x: [0, 40, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Subtitle */}
      <motion.p
        className="text-slate-300 text-center text-md max-w-xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: [0.4, 1, 0.4], y: [8, 0, 8] }}
        transition={{ duration: 2.8, delay: 0.7, repeat: Infinity }}
      >
        Stay tuned for our next big coding adventure!
      </motion.p>
    </div>
  );
}



export function UpcomingEventSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  const slides = [
    <IntroSlide key="intro" />,
    <OverviewSlide key="overview" />,
    <ObjectivesSlide key="objectives" />,
    <FormatSlide key="format" />,
    <OutcomesSlide key="outcomes" />,
    <AwardsSlide key="awards" />,
    <QRCodeSlide key="qrcode" />
  ];

  const nextSlide = () => {
    setShowTransition(true);
    setTimeout(() => setShowTransition(false), 700);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1 >= slides.length ? prev : prev + 1));
  };

  const prevSlide = () => {
    setShowTransition(true);
    setTimeout(() => setShowTransition(false), 700);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || currentSlide === slides.length - 1) return;

    const duration = currentSlide === 0 ? 8000 : 5000;
    const interval = setInterval(nextSlide, duration);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
        setIsAutoPlaying(false);
      }
      if (e.key === 'ArrowLeft') {
        prevSlide();
        setIsAutoPlaying(false);
      }
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
<div className="relative w-full sm:w-[99%] md:w-[96%] lg:w-[92%] xl:w-[88%] h-[580px] sm:h-[630px] md:h-[680px] lg:h-[730px] xl:h-[780px] rounded-xl overflow-hidden shadow-2xl shadow-purple-600/40 border border-purple-400/30 mx-auto">
      <CodeRainBackground />
      <div className="relative z-10 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
            style={{ willChange: index === currentSlide ? 'opacity, transform' : 'auto' }}
          >
            {slide}
          </div>
        ))}
      </div>

      <TransitionEffect isActive={showTransition} />

      {/* Navigation */}
      <button
        onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full hover:scale-110 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
        disabled={currentSlide === slides.length - 1}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full transition-all ${
          currentSlide === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-2 right-2 z-20 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full hover:scale-110 transition-all"
        aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
      >
        <span className="text-white text-xs">{isAutoPlaying ? '⏸ Pause' : '▶ Play'}</span>
      </button>

      <SlideNavigation
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onNavigate={goToSlide}
      />
    </div>
  );
}
export function EventSpotlight() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* === PREVIOUS EVENTS === */}
      <section className="py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Previous Events
        </h2>

         <App></App>
        
      </section>

      {/* === UPCOMING EVENTS (Two Column Layout) === */}
      <section className="py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
          Upcoming Events
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 w-[95%] sm:w-[90%] md:w-[85%] mx-auto">
          
          {/* RIGHT: Slideshow */}
          <div className="flex-1 w-full max-w-[600px]">
            <UpcomingEventCommingSoon />
          </div>
        </div>
      </section>
    </div>
  );
}

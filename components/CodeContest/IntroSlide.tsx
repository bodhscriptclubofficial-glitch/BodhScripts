import { motion } from 'motion/react';
import { FloatingParticles } from './FloatingParticles';
import posterImage from './figma/asset/f213d1ab1c88366eeaa5e96e5a480f13ea4f4ec2.png';


export function IntroSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Minimal VFX - only floating particles for performance */}
      <FloatingParticles />
      
      {/* Subtle animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform' }}
      />
      
      <motion.div
        className="absolute w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [50, -50, 50],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform' }}
      />

      {/* Main content - Responsive layout with compact sizing */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 px-3 md:px-6 py-4 md:py-6">
        {/* Left side - Poster Image (STATIC - no animations) */}
        <div className="flex-shrink-0 w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]">
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/30 border border-purple-500/20">
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 border-2 border-purple-500/50 rounded-xl pointer-events-none" />
          </div>
        </div>

        {/* Right side - Title and Info */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left max-w-2xl"
        >
          {/* BodhScriptClub Presents */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-3"
          >
            <p className="text-base md:text-lg lg:text-xl text-gray-400 tracking-wider">BodhScriptClub Presents</p>
          </motion.div>

          {/* Main title with gradient - reduced size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto',
                willChange: 'background-position'
              }}
            >
              SCRATCH YOUR BRAIN
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 text-blue-300">
              The Ultimate Code- A -Thon
            </h2>
          </motion.div>

          {/* Event details - compact sizing */}
          <motion.div
            className="space-y-2 lg:space-y-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-900/60 to-pink-900/60 rounded-full backdrop-blur-sm border border-purple-500/30 shadow-lg">
              <p className="text-sm md:text-base lg:text-lg text-purple-200">
                📅 7th November 2025
              </p>
            </div>

            <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-full backdrop-blur-sm border border-blue-500/30 shadow-lg lg:ml-3 mt-2 lg:mt-0">
              <p className="text-sm md:text-base lg:text-lg text-blue-200">
                🎯BCA & MCA Students Only
              </p>
            </div>
          </motion.div>

          {/* Additional info - compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-4"
          >
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="px-3 py-1.5 bg-purple-500/20 rounded-lg border border-purple-500/30 text-purple-300 text-xs md:text-sm">
                📍 Online Mode
              </span>
              <span className="px-3 py-1.5 bg-pink-500/20 rounded-lg border border-pink-500/30 text-pink-300 text-xs md:text-sm">
                ⏱️ 2-3 Hours
              </span>
              <span className="px-3 py-1.5 bg-blue-500/20 rounded-lg border border-blue-500/30 text-blue-300 text-xs md:text-sm">
                🏆 Multi-Round
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

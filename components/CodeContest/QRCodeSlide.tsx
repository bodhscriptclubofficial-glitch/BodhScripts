import { motion } from 'motion/react';
import { Sparkles as SparklesIcon, Share2 } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';

export function QRCodeSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-3 md:px-6 py-4">
      <FloatingParticles />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Title */}
        <motion.div
          className="text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            style={{
              backgroundSize: '200% auto',
              willChange: 'background-position'
            }}
          >
            Register Now!
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Scan the QR Code to Register
          </motion.p>
        </motion.div>

        {/* QR Code Container */}
        <div className="flex justify-center items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.6, 
              duration: 1,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Animated glow ring */}
            <motion.div
              className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform, opacity' }}
            />

            {/* QR Code Box */}
            <motion.div
              className="relative bg-white p-3 md:p-4 lg:p-6 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ willChange: 'transform' }}
            >
              <div className="relative bg-white rounded-xl p-2 md:p-3">
                {/* QR Code - Replace with actual QR code image */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
  <img 
    src="/images/SractchYourBrain.png" 
    alt="Registration QR Code" 
    className="w-full h-full object-contain" 
  />
</div>

              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Registration Info */}
        <motion.div
          className="mt-4 md:mt-6 text-center space-y-3 md:space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4">
            <motion.div
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-green-900/60 to-emerald-900/60 rounded-full backdrop-blur-sm border border-green-500/30 justify-center"
              whileHover={{ scale: 1.05 }}
              style={{ willChange: 'transform' }}
            >
              <SparklesIcon className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span className="text-xs md:text-sm lg:text-base text-green-200">Free Registration</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 rounded-full backdrop-blur-sm border border-blue-500/30 justify-center"
              whileHover={{ scale: 1.05 }}
              style={{ willChange: 'transform' }}
            >
              <Share2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="text-xs md:text-sm lg:text-base text-blue-200">Share with Friends</span>
            </motion.div>
          </div>

          <div className="space-y-2">
            <p className="text-base md:text-lg text-purple-300">
              📅 7th November 2025
            </p>
            <p className="text-xs md:text-sm lg:text-base text-gray-400 max-w-2xl mx-auto">
              Limited Spots Available • Register Today!
            </p>
            <p className="text-[10px] md:text-xs lg:text-sm text-gray-500">
              BodhScriptClub •BCA & MCA Students
            </p>
          </div>

          {/* Animated bottom decoration */}
          <div className="flex justify-center gap-2 md:gap-3 mt-3 md:mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{ willChange: 'transform, opacity' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

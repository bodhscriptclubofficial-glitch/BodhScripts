import { motion } from 'motion/react';
import { Brain, Target, Rocket, CheckCircle2 } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';

export function ObjectivesSlide() {
  const objectives = [
    {
      text: "Promote analytical thinking and structured problem-solving",
      icon: Brain,
      color: "text-purple-400"
    },
    {
      text: "Provide a platform to practice competitive programming in a timed environment",
      icon: Target,
      color: "text-pink-400"
    },
    {
      text: "Enhance readiness for placement-driven coding rounds and technical interviews",
      icon: Rocket,
      color: "text-blue-400"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-3 md:px-6 py-4 overflow-y-auto">
      <FloatingParticles />
      
      <motion.div
        className="text-center mb-4 md:mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
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
          Purpose & Objectives
        </motion.h2>
        <motion.p
          className="text-sm md:text-base lg:text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Student Capability Enhancement
        </motion.p>
      </motion.div>

      <div className="max-w-5xl w-full space-y-3 md:space-y-4">
        {objectives.map((objective, index) => {
          const Icon = objective.icon;
          return (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
            >
              <div className="relative bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-purple-500/20 flex flex-col sm:flex-row items-start gap-3 md:gap-4 hover:border-purple-500/50 transition-all duration-300">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  style={{ willChange: 'transform' }}
                >
                  <div className="p-2 md:p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-lg">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </motion.div>
                
                <div className="flex-1 flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className={`w-4 h-4 md:w-5 md:h-5 ${objective.color} flex-shrink-0 mt-0.5`} />
                  <p className="text-xs md:text-sm lg:text-base text-gray-200">
                    {objective.text}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-4 md:mt-6 px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        style={{ willChange: 'transform' }}
      >
        <p className="text-sm md:text-base lg:text-lg text-purple-300 text-center">
          Building confidence, logical rigor, and coding proficiency
        </p>
      </motion.div>
    </div>
  );
}

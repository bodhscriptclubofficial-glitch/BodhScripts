import { motion } from 'motion/react';
import { Target, Users, Trophy, Calendar } from 'lucide-react';
import { NeonBorder } from './NeonBorder';
import { FloatingParticles } from './FloatingParticles';

export function OverviewSlide() {
  const cards = [
    {
      icon: Target,
      title: "Event Type",
      content: "Major Event",
      color: "from-purple-600 to-purple-800",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Target Audience",
      content: "BCA & MCA Students",
      color: "from-pink-600 to-pink-800",
      delay: 0.4
    },
    {
      icon: Trophy,
      title: "Theme",
      content: "Student Capability Enhancement",
      color: "from-blue-600 to-blue-800",
      delay: 0.6
    },
    {
      icon: Calendar,
      title: "Event Date",
      content: "7th November 2025",
      color: "from-indigo-600 to-indigo-800",
      delay: 0.8
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-3 md:px-6 py-4 overflow-y-auto">
      <FloatingParticles />
      
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Event Overview
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl w-full mb-4 md:mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              className={`relative p-4 md:p-6 bg-gradient-to-br ${card.color} rounded-xl shadow-2xl overflow-hidden group`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: card.delay, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ willChange: 'transform' }}
            >
              <div className="relative z-10">
                <div className="mb-3">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg mb-1 md:mb-2 text-white/90">{card.title}</h3>
                <p className="text-sm md:text-base text-white">{card.content}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <NeonBorder color="purple">
        <motion.div
          className="max-w-4xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl p-4 md:p-6 border border-purple-500/30 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xs md:text-sm lg:text-base text-gray-200 leading-relaxed">
            A <span className="text-pink-400">high-intensity</span>, intellectually stimulating coding competition designed 
            to challenge <span className="text-purple-400">logical thinking</span>, <span className="text-blue-400">algorithmic skills</span>, 
            and <span className="text-green-400">problem-solving capabilities</span>. Foster a competitive spirit while enhancing 
            core technical competencies essential for placements and real-world programming environments.
          </p>
        </motion.div>
      </NeonBorder>
    </div>
  );
}

import { motion } from 'motion/react';
import { Globe, Clock, User, Layers, Database, Puzzle, Gauge, Code } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';

export function FormatSlide() {
  const formatDetails = [
    { icon: Globe, label: "Mode", value: "Online", color: "from-blue-500 to-cyan-500" },
    { icon: Clock, label: "Duration", value: "2-3 Hours", color: "from-purple-500 to-pink-500" },
    { icon: User, label: "Format", value: "Individual", color: "from-pink-500 to-rose-500" },
    { icon: Layers, label: "Rounds", value: "Multi-Round", color: "from-indigo-500 to-purple-500" }
  ];

  const categories = [
    { icon: Database, text: "Data Structures and Algorithms", color: "text-blue-400" },
    { icon: Puzzle, text: "Logical Reasoning & Pattern Problems", color: "text-purple-400" },
    { icon: Gauge, text: "Time Complexity-Based Challenges", color: "text-pink-400" },
    { icon: Code, text: "Real-World Scenario Coding Tasks", color: "text-green-400" }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-3 md:px-6 py-4 md:py-6 overflow-y-auto">
      <FloatingParticles />
      
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Event Format
      </motion.h2>

      {/* Format Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 max-w-6xl w-full mb-4 md:mb-6">
        {formatDetails.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-2xl group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{ willChange: 'transform' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`} />
              
              <div className="relative z-10 p-3 md:p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <p className="text-[10px] md:text-xs text-white/80 mb-1">{item.label}</p>
                <p className="text-xs md:text-sm lg:text-base text-white">{item.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Problem Categories */}
      <motion.div
        className="max-w-5xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.h3
          className="text-lg md:text-xl text-center mb-3 md:mb-4 text-purple-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Problem Categories
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
              >
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-purple-500/20 flex items-center gap-2 md:gap-3 hover:border-purple-500/50 transition-colors duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    style={{ willChange: 'transform' }}
                  >
                    <Icon className={`w-4 h-4 md:w-5 md:h-5 ${category.color}`} />
                  </motion.div>
                  <p className="text-xs md:text-sm text-gray-200">{category.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

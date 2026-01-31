import { motion } from 'motion/react';
import { Lightbulb, Zap, Award, TrendingUp } from 'lucide-react';
import { NeonBorder } from './NeonBorder';
import { FloatingParticles } from './FloatingParticles';

export function OutcomesSlide() {
  const outcomes = [
    {
      icon: Lightbulb,
      text: "Gain real-time coding exposure with a competitive mindset",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      text: "Improve speed, precision, and debugging abilities",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      text: "Experience simulation of placement-style coding assessments",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      text: "Boost confidence to participate in hackathons and national-level contests",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-3 md:px-6 py-4 overflow-y-auto">
      <FloatingParticles />
      
      <motion.div
        className="text-center mb-4 md:mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
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
          Learning Outcomes
        </motion.h2>
        <motion.p
          className="text-sm md:text-base lg:text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          What You'll Gain
        </motion.p>
      </motion.div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {outcomes.map((outcome, index) => {
          const Icon = outcome.icon;
          const colorMap: Record<string, string> = {
            'from-yellow-500 to-orange-500': 'green',
            'from-purple-500 to-pink-500': 'purple',
            'from-blue-500 to-cyan-500': 'blue',
            'from-green-500 to-emerald-500': 'green',
          };
          return (
            <NeonBorder key={index} color={colorMap[outcome.gradient] || 'purple'}>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.6 + index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
              <motion.div
                className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-gray-700 group hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -10 }}
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  className="flex justify-center mb-3 md:mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ willChange: 'transform' }}
                >
                  <div className={`p-2 md:p-3 bg-gradient-to-br ${outcome.gradient} rounded-lg shadow-lg`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </motion.div>
                
                <p className="text-xs md:text-sm text-center text-gray-200 leading-relaxed">
                  {outcome.text}
                </p>
              </motion.div>
            </motion.div>
            </NeonBorder>
          );
        })}
      </div>

      {/* Floating badges */}
      <motion.div
        className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        {['Competitive', 'Practical', 'Career-Ready'].map((badge, index) => (
          <motion.div
            key={index}
            className="px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full border border-purple-500/40 backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            style={{ willChange: 'transform' }}
          >
            <span className="text-xs md:text-sm lg:text-base text-purple-200">{badge}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

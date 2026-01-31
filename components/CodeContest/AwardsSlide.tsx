import { motion } from 'motion/react';
import { Trophy, Medal, Award, Gift, Calendar, DollarSign } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';
import { Sparkles } from './Sparkles';

export function AwardsSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-3 md:px-6 py-4 overflow-y-auto">
      <FloatingParticles />
      <Sparkles />
      
      {/* Animated background circles */}
      <motion.div
        className="absolute w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform' }}
      />
      
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [100, -100, 100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform' }}
      />

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          className="text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent"
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
            Awards & Recognition
          </motion.h2>
        </motion.div>

        {/* Top Winners Section */}
        <motion.div
          className="mb-4 md:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-yellow-500/30">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{ willChange: 'transform' }}
              >
                <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
              </motion.div>
              <h3 className="text-lg md:text-xl lg:text-2xl text-yellow-400">
                Top Winners
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {[
                { icon: Medal, text: "Certificates of Merit", color: "from-yellow-500 to-orange-500" },
                { icon: Trophy, text: "Trophies & Medals", color: "from-orange-500 to-pink-500" },
                { icon: Award, text: "Exclusive Mentoring", color: "from-pink-500 to-purple-500" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                    whileHover={{ scale: 1.1 }}
                    style={{ willChange: 'transform' }}
                  >
                    <div className="flex justify-center mb-2 md:mb-3">
                      <div className={`p-2 md:p-3 bg-gradient-to-br ${item.color} rounded-lg shadow-lg`}>
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-200">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{ willChange: 'transform' }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-300" />
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-green-500/30 text-center">
              <div className="flex justify-center mb-3">
                <Gift className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
              </div>
              <p className="text-base md:text-lg text-green-400 mb-1">All Participants</p>
              <p className="text-xs md:text-sm text-gray-300">Certificates of Participation</p>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{ willChange: 'transform' }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-300" />
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-blue-500/30 text-center">
              <div className="flex justify-center mb-3">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              </div>
              <p className="text-base md:text-lg text-blue-400 mb-1">Duty Leaves</p>
              <p className="text-xs md:text-sm text-gray-300">Provided to Participants</p>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{ willChange: 'transform' }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-300" />
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-purple-500/30 text-center">
              <div className="flex justify-center mb-3">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
              </div>
              <p className="text-base md:text-lg text-purple-400 mb-1">Registration</p>
              <p className="text-xs md:text-sm text-gray-300">FREE</p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-4 md:mt-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl"
            whileHover={{ scale: 1.1 }}
            style={{ willChange: 'transform' }}
          >
            <p className="text-base md:text-lg lg:text-xl text-white">
              Ready to Scratch Your Brain? 🧠
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

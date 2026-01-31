import { motion } from 'motion/react';
import { memo, useMemo } from 'react';

export const FloatingParticles = memo(function FloatingParticles() {
  // Reduce particles from 30 to 15 for better performance
  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
      initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
      initialScale: Math.random() * 0.5 + 0.5,
      initialOpacity: Math.random() * 0.3 + 0.1,
      duration: Math.random() * 10 + 15,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            scale: particle.initialScale,
            opacity: particle.initialOpacity,
          }}
          animate={{
            y: [particle.initialY, particle.initialY + 200, particle.initialY],
            x: [particle.initialX, particle.initialX + 100, particle.initialX],
            opacity: [particle.initialOpacity, particle.initialOpacity * 1.5, particle.initialOpacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ willChange: 'transform, opacity' }}
        />
      ))}
    </div>
  );
});

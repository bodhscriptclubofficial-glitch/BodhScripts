import { useEffect, useRef, memo } from 'react';

export const CodeRainBackground = memo(function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'アイウエオカキクケコサシスセソタチツテト01';
    const fontSize = 20;
    // Reduce columns by 50% for better performance
    const columns = Math.floor(canvas.width / fontSize / 2);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 20; // Limit to 20 FPS for better performance
    const interval = 1000 / fps;

    function draw(currentTime: number) {
      if (!ctx || !canvas) return;
      
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime > interval) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.5 + 0.2})`;
          ctx.fillText(text, i * fontSize * 2, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        
        lastTime = currentTime;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    }

    animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-15" />;
});

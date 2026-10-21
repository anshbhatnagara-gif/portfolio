import React, { useEffect, useRef } from 'react';

export default function CyberMatrixCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const chars = '01010101<>/{}[];:=*+~#ABCDEF0123456789';
    const charArray = chars.split('');
    const fontSize = 14;
    let columns = 0;
    let drops = [];

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        // Randomize initial drop positions for a natural cascading look
        drops[i] = Math.floor(Math.random() * -50);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let lastTime = 0;
    const fps = 28; // Smooth 28 fps for classic terminal flow without burning GPU
    const interval = 1000 / fps;

    const render = (currentTime) => {
      animationFrameId = requestAnimationFrame(render);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Translucent clear to leave fading phosphor trails
      ctx.fillStyle = 'rgba(5, 8, 15, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#22ff88';
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw bright head with slight cyan tint, trailing green
        if (Math.random() > 0.88) {
          ctx.fillStyle = '#00f0ff';
        } else {
          ctx.fillStyle = 'rgba(34, 255, 136, 0.65)';
        }

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-25 z-0"
      aria-hidden="true"
    />
  );
}

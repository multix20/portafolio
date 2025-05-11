// === CanvasTrail.jsx ===
import React, { useRef, useEffect } from 'react';

const CanvasTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let points = [];
    let animationId;

    if (canvas) {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        points.push({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          size: Math.random() * 6 + 2,
          color: ['#E63946', '#F1C40F', '#4361EE'][Math.floor(Math.random() * 3)],
          life: 100
        });
        if (points.length > 100) points.shift();
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        points.forEach((point, index) => {
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
          ctx.fillStyle = point.color;
          ctx.globalAlpha = point.life / 100;
          ctx.fill();
          points[index].life -= 1;
        });
        points = points.filter(p => p.life > 0);
        animationId = requestAnimationFrame(animate);
      };

      window.addEventListener('mousemove', handleMouseMove);
      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationId);
      };
    }
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" />
  );
};

export default CanvasTrail;
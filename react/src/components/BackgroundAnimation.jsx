import { useEffect, useRef } from 'react';

function BackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth easing
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 170,
      active: false,
    };

    // Stardust trail sparks
    const trail = [];
    const maxTrail = 20;

    // Dynamically reads the current theme's accent color
    const getAccentColor = () => {
      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent')
        .trim();
      return accent || '#a78bfa';
    };

    // Responsive particle count (lightweight, ~50-70 particles)
    const particleCount = Math.min(Math.floor((width * height) / 18000), 65);
    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.8;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.fadeSpeed = Math.random() * 0.008 + 0.003;
        this.fadeDir = 1;
      }

      update() {
        // Natural gentle drift
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around viewport edges
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Subtle twinkling effect
        this.alpha += this.fadeSpeed * this.fadeDir;
        if (this.alpha > 0.8) this.fadeDir = -1;
        if (this.alpha < 0.15) this.fadeDir = 1;

        // Reaction when cursor glides through free background space
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Soft magnetic repulsion that parts particles like water
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 3;
            this.y -= Math.sin(angle) * force * 3;
          }
        }
      }

      draw(color) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize cosmic particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse movement listeners
    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // Spawn subtle stardust sparks behind the cursor
      if (trail.length < maxTrail && Math.random() > 0.45) {
        trail.push({
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          size: Math.random() * 2 + 1,
          alpha: 0.65,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
        });
      }
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    // Animation render loop (60 FPS)
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const accentColor = getAccentColor();

      // Smooth cursor lag for a fluid, natural feel
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Draw soft ambient nebula glow following the cursor
      if (mouse.active) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 2.2
        );
        glow.addColorStop(0, accentColor);
        glow.addColorStop(0.35, 'transparent');

        ctx.globalAlpha = 0.12;
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw & update stardust particles
      particles.forEach((p) => {
        p.update();
        p.draw(accentColor);
      });

      // 3. Draw & update subtle cursor trail sparks
      for (let i = trail.length - 1; i >= 0; i--) {
        const t = trail[i];
        t.x += t.vx;
        t.y += t.vy;
        t.alpha -= 0.02;

        if (t.alpha <= 0) {
          trail.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.globalAlpha = t.alpha * 0.6;
        ctx.shadowBlur = 10;
        ctx.shadowColor = accentColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Guarantees all card clicks & text selections work
        zIndex: 0,             // Sits behind content, above body gradient
      }}
    />
  );
}

export default BackgroundAnimation;
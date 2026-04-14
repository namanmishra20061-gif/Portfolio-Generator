import React, { useEffect, useRef } from 'react';

// --- Particle Classes Moved Outside to avoid React Hook lint issues ---

class WebParticle {
  constructor(canvas) {
    this.reset(canvas);
  }
  reset(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.symbol = Math.random() > 0.8 ? ['</>', '{}', '=>', 'JS'][Math.floor(Math.random() * 4)] : null;
  }
  update(canvas) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw(ctx, colors) {
    if (this.symbol) {
      ctx.font = '10px monospace';
      ctx.fillStyle = `rgba(${colors.p}, 0.3)`;
      ctx.fillText(this.symbol, this.x, this.y);
    } else {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${colors.p}, 0.2)`;
      ctx.fill();
    }
  }
}

class DigitalRain {
  constructor(canvas, isCyber = false) {
    this.isCyber = isCyber;
    this.reset(canvas);
  }
  reset(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.speed = Math.random() * 2 + 2;
    this.chars = [];
    this.len = Math.floor(Math.random() * 10) + 5;
  }
  update(canvas) {
    this.y += this.speed;
    if (this.y > canvas.height) this.reset(canvas);
  }
  draw(ctx, colors) {
    for (let i = 0; i < this.len; i++) {
      const char = this.isCyber 
        ? String.fromCharCode(0x30A0 + Math.random() * 96) 
        : Math.random() > 0.5 ? '1' : '0';
      const op = 1 - (i / this.len);
      ctx.fillStyle = `rgba(${colors.p}, ${op * 0.3})`;
      ctx.font = '14px monospace';
      ctx.fillText(char, this.x, this.y - (i * 20));
    }
  }
}

class DesignOrb {
  constructor(canvas) {
    this.reset(canvas);
  }
  reset(canvas) {
    this.r = Math.random() * 200 + 100;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
  }
  update(canvas) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < -this.r || this.x > canvas.width + this.r) this.vx *= -1;
    if (this.y < -this.r || this.y > canvas.height + this.r) this.vy *= -1;
  }
  draw(ctx, colors) {
    const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
    grad.addColorStop(0, `rgba(${colors.p}, 0.15)`);
    grad.addColorStop(1, `rgba(${colors.p}, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

class GameShape {
  constructor(canvas) {
    this.reset(canvas);
  }
  reset(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 20 + 10;
    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;
    this.rot = 0;
    this.rotV = (Math.random() - 0.5) * 0.02;
    this.type = Math.floor(Math.random() * 3); // 0:sq, 1:tri, 2:cross
  }
  update(canvas) {
    this.x += this.vx;
    this.y += this.vy;
    this.rot += this.rotV;
    if (this.x < -40 || this.x > canvas.width + 40) this.vx *= -1;
    if (this.y < -40 || this.y > canvas.height + 40) this.vy *= -1;
  }
  draw(ctx, colors) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.strokeStyle = `rgba(${colors.p}, 0.2)`;
    ctx.lineWidth = 1;
    if (this.type === 0) ctx.strokeRect(-this.size/2, -this.size/2, this.size, this.size);
    else if (this.type === 1) {
      ctx.beginPath();
      ctx.moveTo(0, -this.size/2);
      ctx.lineTo(this.size/2, this.size/2);
      ctx.lineTo(-this.size/2, this.size/2);
      ctx.closePath();
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(-this.size/2, 0); ctx.lineTo(this.size/2, 0);
      ctx.moveTo(0, -this.size/2); ctx.lineTo(0, this.size/2);
      ctx.stroke();
    }
    ctx.restore();
  }
}

class CivilGrid {
  constructor(canvas) {
    this.points = Array.from({length: 30}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2
    }));
    this.offset = 0;
  }
  update(canvas) {
    this.offset = (this.offset + 0.2) % 50;
    this.points.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
  }
  draw(ctx, colors, canvas) {
    ctx.strokeStyle = `rgba(${colors.p}, 0.05)`;
    ctx.lineWidth = 0.5;
    for (let i = this.offset; i < canvas.width; i += 50) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
    }
    for (let i = this.offset; i < canvas.height; i += 50) {
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }
    ctx.strokeStyle = `rgba(${colors.p}, 0.15)`;
    this.points.forEach((p, i) => {
      this.points.forEach((p2, j) => {
        if (i === j) return;
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 150) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        }
      });
    });
  }
}

class BioCell {
  constructor(canvas) {
    this.reset(canvas);
  }
  reset(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 15 + 10;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.phase = Math.random() * Math.PI * 2;
  }
  update(canvas) {
    this.x += this.vx; this.y += this.vy;
    this.phase += 0.02;
    if (this.x < -20 || this.x > canvas.width + 20) this.vx *= -1;
    if (this.y < -20 || this.y > canvas.height + 20) this.vy *= -1;
  }
  draw(ctx, colors) {
    const pulse = Math.sin(this.phase) * 3;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r + pulse, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${colors.p}, 0.2)`;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${colors.p}, 0.3)`;
    ctx.fill();
  }
}

class MechGear {
  constructor(canvas) {
    this.reset(canvas);
  }
  reset(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 40 + 20;
    this.teeth = 8 + Math.floor(Math.random() * 8);
    this.rot = 0;
    this.rotV = (Math.random() - 0.5) * 0.02;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
  }
  update(canvas) {
    this.x += this.vx; this.y += this.vy;
    this.rot += this.rotV;
    if (this.x < -60 || this.x > canvas.width + 60) this.vx *= -1;
    if (this.y < -60 || this.y > canvas.height + 60) this.vy *= -1;
  }
  draw(ctx, colors) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.strokeStyle = `rgba(${colors.p}, 0.15)`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < this.teeth * 2; i++) {
      const angle = (i * Math.PI) / this.teeth;
      const dist = i % 2 === 0 ? this.r : this.r + 8;
      ctx.lineTo(Math.cos(angle) * dist, Math.sin(angle) * dist);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, this.r * 0.4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

const AnimatedBackground = ({ theme = 'dark', role = 'web' }) => {
  const canvasRef = useRef(null);

  const getThemeColors = (themeName) => {
    const palette = {
      dark: { p: '99, 102, 241', s: '168, 85, 247' },
      emerald: { p: '16, 185, 129', s: '20, 184, 166' },
      ocean: { p: '14, 165, 233', s: '6, 182, 212' },
      cyberpunk: { p: '236, 72, 153', s: '34, 211, 238' }
    };
    return palette[themeName] || palette.dark;
  };

  const getBgType = (roleStr) => {
    const r = roleStr.toLowerCase();
    if (r.match(/web|front|back|stack|dev|software/)) return 'web';
    if (r.match(/data|ai|machine|python|analytics/)) return 'data';
    if (r.match(/cyber|security|hacker|pentest/)) return 'cyber';
    if (r.match(/design|ui|ux|art|creative|product/)) return 'design';
    if (r.match(/game|unity|3d|unreal/)) return 'game';
    if (r.match(/civil|architecture|structural|cad|construction/)) return 'civil';
    if (r.match(/bio|medical|health|genetic|pharma/)) return 'bio';
    if (r.match(/mech|auto|robotics|hardware|engine/)) return 'mech';
    return 'web';
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const colors = getThemeColors(theme);
    const bgType = getBgType(role || 'web');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      const density = window.innerWidth < 768 ? 0.5 : 1;
      
      if (bgType === 'web') {
        for (let i = 0; i < 80 * density; i++) particles.push(new WebParticle(canvas));
      } else if (bgType === 'data' || bgType === 'cyber') {
        for (let i = 0; i < 40 * density; i++) particles.push(new DigitalRain(canvas, bgType === 'cyber'));
      } else if (bgType === 'design') {
        for (let i = 0; i < 12; i++) particles.push(new DesignOrb(canvas));
      } else if (bgType === 'game') {
        for (let i = 0; i < 40 * density; i++) particles.push(new GameShape(canvas));
      } else if (bgType === 'civil') {
        particles.push(new CivilGrid(canvas));
      } else if (bgType === 'bio') {
        for (let i = 0; i < 30 * density; i++) particles.push(new BioCell(canvas));
      } else if (bgType === 'mech') {
        for (let i = 0; i < 15 * density; i++) particles.push(new MechGear(canvas));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (bgType === 'web') {
        ctx.strokeStyle = `rgba(${colors.p}, 0.1)`;
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
            if (dist < 140) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      particles.forEach(p => {
        p.update(canvas);
        p.draw(ctx, colors, canvas);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, role]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;

import {
  Component,
  AfterViewInit,
  OnDestroy,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number; // offset para el efecto de pulso
}

const N_PARTICLES = 45;
const MAX_DIST = 165;
const SPEED = 0.38;

@Component({
  selector: 'app-bg-lines',
  standalone: true,
  template: `<canvas #canvas></canvas>`,
  styles: [`
    canvas {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }
  `],
})
export class BgLinesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') private canvasRef!: ElementRef<HTMLCanvasElement>;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private raf!: number;
  private time = 0;
  private scrollProgress = 0;
  private particles: Particle[] = [];

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.onResize();
    this.loop();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.raf);
  }

  @HostListener('window:resize')
  onResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.initParticles();
  }

  @HostListener('window:scroll')
  onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = window.scrollY / Math.max(max, 1);
  }

  private initParticles() {
    const { width, height } = this.canvas;
    this.particles = Array.from({ length: N_PARTICLES }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: 1.2 + Math.random() * 1.8,
      pulse: Math.random() * Math.PI * 2,
    }));
  }

  private loop = () => {
    this.update();
    this.draw();
    this.time += 0.012;
    this.raf = requestAnimationFrame(this.loop);
  };

  private update() {
    const { width, height } = this.canvas;
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width)  p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }
  }

  private draw() {
    const { ctx, canvas, time, particles } = this;
    const w = canvas.width;
    const h = canvas.height;

    // Fondo blanco limpio
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);

    // Vignette sutil en las esquinas para dar profundidad
    const vignette = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, h * 0.85);
    vignette.addColorStop(0, 'rgba(255,255,255,0)');
    vignette.addColorStop(1, 'rgba(230,238,255,0.18)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, w, h);

    const col = this.lerpColor(this.scrollProgress);
    const { r, g, b } = col;
    const colorStr = `${r},${g},${b}`;
    const glowColor = `rgba(${colorStr},0.55)`;

    // ── Líneas de conexión ──────────────────────────────────
    ctx.save();
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > MAX_DIST) continue;

        const alpha = (1 - dist / MAX_DIST) * 0.08;
        ctx.beginPath();
        ctx.lineWidth = (1 - dist / MAX_DIST) * 0.7;
        ctx.strokeStyle = `rgba(${colorStr},${alpha})`;
        ctx.shadowBlur = 0;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
    ctx.restore();

    // ── Nodos / partículas ──────────────────────────────────
    ctx.save();
    for (const p of particles) {
      const pulse = p.r + Math.sin(time + p.pulse) * 0.5;

      // Halo exterior difuso
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulse * 3);
      gradient.addColorStop(0, `rgba(${colorStr},0.07)`);
      gradient.addColorStop(1, `rgba(${colorStr},0)`);
      ctx.beginPath();
      ctx.arc(p.x, p.y, pulse * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Núcleo del nodo
      ctx.beginPath();
      ctx.arc(p.x, p.y, pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${colorStr},0.28)`;
      ctx.shadowBlur = 0;
      ctx.fill();
    }
    ctx.restore();
  }

  // Azul → violeta → naranja según scroll progress (0 → 1)
  private lerpColor(t: number): { r: number; g: number; b: number } {
    const stops = [
      { r: 29,  g: 78,  b: 216 }, // azul corporativo
      { r: 249, g: 115, b: 22  }, // naranja acento
    ];
    const seg = (stops.length - 1) * t;
    const i = Math.min(Math.floor(seg), stops.length - 2);
    const f = seg - i;
    const a = stops[i], b = stops[i + 1];
    return {
      r: Math.round(a.r + (b.r - a.r) * f),
      g: Math.round(a.g + (b.g - a.g) * f),
      b: Math.round(a.b + (b.b - a.b) * f),
    };
  }
}

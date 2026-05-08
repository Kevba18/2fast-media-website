type OscillatorOptions = {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
};

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type CanvasSettings = {
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
};

const settings: CanvasSettings = {
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

class Oscillator {
  private phase: number;
  private offset: number;
  private frequency: number;
  private amplitude: number;

  constructor(options: OscillatorOptions = {}) {
    this.phase = options.phase ?? 0;
    this.offset = options.offset ?? 0;
    this.frequency = options.frequency ?? 0.001;
    this.amplitude = options.amplitude ?? 1;
  }

  update() {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class Line {
  private spring: number;
  private friction: number;
  private nodes: Point[];

  constructor(spring: number, position: Pick<Point, "x" | "y">) {
    this.spring = spring + 0.1 * Math.random() - 0.05;
    this.friction = settings.friction + 0.01 * Math.random() - 0.005;
    this.nodes = Array.from({ length: settings.size }, () => ({
      x: position.x,
      y: position.y,
      vx: 0,
      vy: 0,
    }));
  }

  update(position: Pick<Point, "x" | "y">) {
    let spring = this.spring;
    let node = this.nodes[0];

    node.vx += (position.x - node.x) * spring;
    node.vy += (position.y - node.y) * spring;

    for (let index = 0; index < this.nodes.length; index++) {
      node = this.nodes[index];

      if (index > 0) {
        const previous = this.nodes[index - 1];
        node.vx += (previous.x - node.x) * spring;
        node.vy += (previous.y - node.y) * spring;
        node.vx += previous.vx * settings.dampening;
        node.vy += previous.vy * settings.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= settings.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let index = 1; index < this.nodes.length - 2; index++) {
      const current = this.nodes[index];
      const next = this.nodes[index + 1];
      x = 0.5 * (current.x + next.x);
      y = 0.5 * (current.y + next.y);
      ctx.quadraticCurveTo(current.x, current.y, x, y);
    }

    const current = this.nodes[this.nodes.length - 2];
    const next = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(current.x, current.y, next.x, next.y);
    ctx.stroke();
    ctx.closePath();
  }
}

export function renderCanvas(canvasId = "canvas") {
  const canvasElement = document.getElementById(canvasId);

  if (!(canvasElement instanceof HTMLCanvasElement)) {
    return () => {};
  }

  const canvas = canvasElement;
  const context = canvas.getContext("2d");

  if (!context) {
    return () => {};
  }

  const ctx = context;
  let animationFrame = 0;
  let running = true;
  const position = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  const oscillator = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  let lines = createLines(position);

  function createLines(target: Pick<Point, "x" | "y">) {
    return Array.from(
      { length: settings.trails },
      (_, index) => new Line(0.45 + (index / settings.trails) * 0.025, target),
    );
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function render() {
    if (!running) {
      return;
    }

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},100%,50%,0.025)`;
    ctx.lineWidth = 10;

    for (const line of lines) {
      line.update(position);
      line.draw(ctx);
    }

    animationFrame = window.requestAnimationFrame(render);
  }

  function updatePosition(event: MouseEvent | TouchEvent) {
    if ("touches" in event) {
      if (event.touches[0]) {
        position.x = event.touches[0].pageX;
        position.y = event.touches[0].pageY;
      }
      return;
    }

    position.x = event.clientX;
    position.y = event.clientY;
  }

  function start(event: MouseEvent | TouchEvent) {
    updatePosition(event);
    lines = createLines(position);
    render();
  }

  function pause() {
    running = false;
    window.cancelAnimationFrame(animationFrame);
  }

  function resume() {
    if (!running) {
      running = true;
      render();
    }
  }

  resizeCanvas();
  render();

  document.addEventListener("mousemove", updatePosition, { passive: true });
  document.addEventListener("touchmove", updatePosition, { passive: true });
  document.addEventListener("mousemove", start, { once: true, passive: true });
  document.addEventListener("touchstart", start, { once: true, passive: true });
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", resume);
  window.addEventListener("blur", pause);

  return () => {
    pause();
    document.removeEventListener("mousemove", updatePosition);
    document.removeEventListener("touchmove", updatePosition);
    document.removeEventListener("mousemove", start);
    document.removeEventListener("touchstart", start);
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("focus", resume);
    window.removeEventListener("blur", pause);
  };
}

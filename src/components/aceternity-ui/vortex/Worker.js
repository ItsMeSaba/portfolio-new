import { createNoise3D } from "simplex-noise";

// Constants
const HALF_PI = 0.5 * Math.PI;
const TAU = 2 * Math.PI;
const TO_RAD = Math.PI / 180;

// Utility functions
const rand = (n) => n * Math.random();
const randRange = (n) => n - rand(2 * n);
const fadeInOut = (t, m) => {
  let hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};
const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

// Particle system state
let particleProps;
let center = [0, 0];
let tick = 0;
let noise3D;
let baseHue = 200;
let hueDirection = 1;
let mouseCoords = { x: null, y: null };
let isMouseDown = false;
let canvas;
let ctx;
let animationId;

// Configuration
let config = {
  particleCount: 700,
  particlePropCount: 9,
  rangeY: 100,
  baseTTL: 200,
  rangeTTL: 150,
  baseSpeed: 0,
  rangeSpeed: 1,
  baseRadius: 1,
  rangeRadius: 2,
  rangeHue: 100,
  noiseSteps: 3,
  xOff: 0.00125,
  yOff: 0.00125,
  zOff: 0.0005,
  backgroundColor: "#000000",
};

function initParticles() {
  tick = 0;
  const particlePropsLength = config.particleCount * config.particlePropCount;
  particleProps = new Float32Array(particlePropsLength);

  for (let i = 0; i < particlePropsLength; i += config.particlePropCount) {
    initParticle(i);
  }
}

function initParticle(i) {
  let x, y, vx, vy, life, ttl, speed, radius, hue;

  x = rand(center[0] * 2);
  y = center[1] + randRange(config.rangeY);
  vx = 0;
  vy = 0;
  life = 0;
  ttl = config.baseTTL + rand(config.rangeTTL);
  speed = config.baseSpeed + rand(config.rangeSpeed);
  radius = config.baseRadius + rand(config.rangeRadius);
  hue = baseHue + rand(config.rangeHue);

  particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
}

function updateParticle(i) {
  let i2 = 1 + i,
    i3 = 2 + i,
    i4 = 3 + i,
    i5 = 4 + i,
    i6 = 5 + i,
    i7 = 6 + i,
    i8 = 7 + i,
    i9 = 8 + i;
  let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;

  x = particleProps[i];
  y = particleProps[i2];
  n =
    noise3D(x * config.xOff, y * config.yOff, tick * config.zOff) *
    config.noiseSteps *
    TAU;
  vx = lerp(particleProps[i3], Math.cos(n), 0.5);
  vy = lerp(particleProps[i4], Math.sin(n), 0.5);
  life = particleProps[i5];
  ttl = particleProps[i6];
  speed = particleProps[i7];
  x2 = x + vx * speed;
  y2 = y + vy * speed;
  radius = particleProps[i8];
  hue = particleProps[i9];

  // Repulsion logic
  const mouseRadius = isMouseDown ? 150 : 100;
  const mouseX = mouseCoords.x;
  const mouseY = mouseCoords.y;

  if (mouseX !== null && mouseY !== null) {
    const dx = x - mouseX;
    const dy = y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseRadius) {
      const angle = Math.atan2(dy, dx);
      const repulsionStrength = 10;

      if (isMouseDown) {
        vx -= Math.cos(angle) * repulsionStrength;
        vy -= Math.sin(angle) * repulsionStrength;
      } else {
        const spinStrength = 0.005;
        const newVx = -dy * repulsionStrength * spinStrength;
        const newVy = dx * repulsionStrength * spinStrength;

        vx += newVx;
        vy += newVy;
      }
    }
  }

  drawParticle(x, y, x2, y2, life, ttl, radius * 1.2, hue);

  life++;

  particleProps[i] = x2;
  particleProps[i2] = y2;
  particleProps[i3] = vx;
  particleProps[i4] = vy;
  particleProps[i5] = life;

  (checkBounds(x, y) || life > ttl) && initParticle(i);
}

function drawParticle(x, y, x2, y2, life, ttl, radius, hue) {
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineWidth = radius;
  ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

function checkBounds(x, y) {
  return x > canvas.width || x < 0 || y > canvas.height || y < 0;
}

function renderGlow() {
  ctx.save();
  ctx.filter = "blur(8px) brightness(150%)";
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();

  ctx.save();
  ctx.filter = "blur(4px) brightness(150%)";
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();
}

function renderToScreen() {
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();
}

function animate() {
  tick++;

  // Update baseHue based on tick
  if (tick % 2 === 0) {
    baseHue += hueDirection;
    if (baseHue >= 250) hueDirection = -1;
    if (baseHue <= 0) hueDirection = 1;
  }

  // Skip every 3rd frame
  if (tick % 3 !== 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw particles
    for (
      let i = 0;
      i < config.particleCount * config.particlePropCount;
      i += config.particlePropCount
    ) {
      updateParticle(i);
    }

    renderGlow();
    renderToScreen();
  }

  // Continue animation loop
  animationId = requestAnimationFrame(animate);
}

// Message handling
self.onmessage = (event) => {
  const { type, data } = event.data;

  console.log("Worker Received Message", type);
  // self.postMessage({ type: "message", data: "Hello from worker" });

  switch (type) {
    case "init":
      try {
        console.log("===>", data);
        canvas = data.canvas;
        ctx = canvas.getContext("2d");
        center[0] = 0.5 * data.width;
        center[1] = 0.5 * data.height;

        if (data.config) {
          config = { ...config, ...data.config };
        }

        noise3D = createNoise3D();
        initParticles();
        animate();
      } catch (error) {
        console.error("Worker Error", error);
        self.postMessage({
          type: "error",
          data: {
            message: error.message,
            stack: error.stack,
          },
        });
      }

      break;

    case "mouseMove":
      mouseCoords = data;
      break;

    case "mouseDown":
      isMouseDown = true;
      break;

    case "mouseUp":
      isMouseDown = false;
      break;

    case "resize":
      center[0] = 0.5 * data.width;
      center[1] = 0.5 * data.height;
      break;

    case "continue":
      // This is handled by the animate function now
      break;

    case "cleanup":
      if (animationId) {
        clearTimeout(animationId);
        animationId = null;
      }
      break;
  }
};

// Cleanup when worker is terminated
self.addEventListener("beforeunload", () => {
  if (animationId) {
    clearTimeout(animationId);
  }
});

<template>
  <canvas
    ref="canvasRef"
    class="fixed inset-0 w-full h-full pointer-events-none z-0"
    aria-hidden="true"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let ctx = null
let animationFrameId = null
let particles = []
const mouse = { x: null, y: null, radius: 120 }
let width = 0
let height = 0

// Color options that fit Gengar and the developer portfolio aesthetic
const colors = [
  'rgba(139, 92, 246, 0.45)',  // Violet
  'rgba(217, 70, 239, 0.45)',  // Fuchsia
  'rgba(99, 102, 241, 0.45)',  // Indigo
  'rgba(168, 85, 247, 0.45)',  // Purple (Gengar body vibe)
]

class Particle {
  constructor() {
    this.reset()
    // Start at a random position initially
    this.x = Math.random() * width
    this.y = Math.random() * height
  }

  reset() {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.size = Math.random() * 2.5 + 1.2
    this.speedX = (Math.random() - 0.5) * 0.45
    this.speedY = (Math.random() - 0.5) * 0.45
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.opacity = Math.random() * 0.5 + 0.3
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    // Wrap around borders
    if (this.x < 0) this.x = width
    if (this.x > width) this.x = 0
    if (this.y < 0) this.y = height
    if (this.y > height) this.y = 0

    // Mouse interactive reaction (gently push particles away)
    if (mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x
      const dy = this.y - mouse.y
      const distance = Math.hypot(dx, dy)

      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius
        const angle = Math.atan2(dy, dx)
        // Move particle away from mouse with a smooth spring back
        this.x += Math.cos(angle) * force * 1.8
        this.y += Math.sin(angle) * force * 1.8
      }
    }
  }

  draw() {
    if (!ctx) return
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.shadowBlur = 8
    ctx.shadowColor = this.color
    ctx.fill()
    ctx.restore()
  }
}

function handleResize() {
  if (!canvasRef.value) return
  const canvas = canvasRef.value
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
  
  // Re-initialize particles relative to screen size
  const particleCount = Math.floor((width * height) / 13000)
  particles = Array.from({ length: Math.min(particleCount, 120) }, () => new Particle())
}

function handleMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function handleMouseLeave() {
  mouse.x = null
  mouse.y = null
}

function drawLines() {
  if (!ctx) return
  const maxDistance = 110
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const p1 = particles[i]
      const p2 = particles[j]
      const dx = p1.x - p2.x
      const dy = p1.y - p2.y
      const dist = Math.hypot(dx, dy)

      if (dist < maxDistance) {
        // Opacity drops as particles get further away
        const alpha = (1 - dist / maxDistance) * 0.12
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})` // light purple line
        ctx.lineWidth = 0.8
        ctx.stroke()
      }
    }
  }
}

function animate() {
  if (!ctx) return
  ctx.clearRect(0, 0, width, height)

  particles.forEach(p => {
    p.update()
    p.draw()
  })

  drawLines()
  animationFrameId = requestAnimationFrame(animate)
}

// Media query to check if user prefers reduced motion
let prefersReducedMotion = false

onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion = mediaQuery.matches

  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')

  handleResize()

  if (!prefersReducedMotion) {
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    animate()
  } else {
    // Just draw a static beautiful layout of particles without animation loop
    particles.forEach(p => p.draw())
    drawLines()
  }
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>
/* Ensure the canvas sits underneath everything */
canvas {
  mix-blend-mode: screen;
}
</style>

<template>
  <div class="min-h-screen bg-slate-950 relative" @mousemove="onMouseMove">

    <!-- ── Interactive parallax orbs ── -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div
        class="absolute -top-1/4 -left-1/4 w-[900px] h-[900px] rounded-full bg-violet-600/[0.07] blur-[160px] will-change-transform"
        :style="{ transform: `translate(${mx * 28}px, ${my * 22}px)` }"
      ></div>
      <div
        class="absolute top-1/2 -right-1/4 w-[700px] h-[700px] rounded-full bg-purple-700/[0.07] blur-[140px] will-change-transform"
        :style="{ transform: `translate(${mx * -22}px, ${my * 18}px)` }"
      ></div>
      <div
        class="absolute -bottom-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-indigo-800/[0.05] blur-[150px] will-change-transform"
        :style="{ transform: `translate(${mx * 16}px, ${my * -20}px)` }"
      ></div>
      <div
        class="absolute top-2/3 left-1/2 w-[400px] h-[400px] rounded-full bg-fuchsia-900/[0.06] blur-[120px] will-change-transform"
        :style="{ transform: `translate(${mx * -30}px, ${my * 26}px)` }"
      ></div>
    </div>

    <!-- ── Particle Background ── -->
    <ParticleBackground />

    <!-- ── Dot grid overlay ── -->
    <div class="fixed inset-0 dot-grid opacity-40 pointer-events-none z-0" aria-hidden="true"></div>

    <NavBar />

    <main class="relative z-10">
      <HeroSection />
      <ProjectsGrid />
      <FunFacts />
      <ContactSection />
    </main>

    <footer class="relative z-10 border-t border-white/5 py-8 text-center text-slate-500 text-sm">
      <p>
        Diseñado y construido con
        <span class="text-violet-400 font-mono text-xs">Vue 3 + Tailwind CSS</span>
        por Kevin Garzón — {{ new Date().getFullYear() }}
      </p>
      <p class="mt-1 text-xs text-slate-600">
        Ninguna API fue lastimada durante el desarrollo de este portafolio.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import NavBar        from './components/NavBar.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import HeroSection   from './components/HeroSection.vue'
import ProjectsGrid  from './components/ProjectsGrid.vue'
import FunFacts      from './components/FunFacts.vue'
import ContactSection from './components/ContactSection.vue'
import { initScrollReveal } from './composables/useScrollReveal.js'

const mx = ref(0)
const my = ref(0)

let rafId = null
let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0

function lerp(a, b, t) { return a + (b - a) * t }

function tick() {
  currentX = lerp(currentX, targetX, 0.05)
  currentY = lerp(currentY, targetY, 0.05)
  mx.value = +currentX.toFixed(4)
  my.value = +currentY.toFixed(4)
  rafId = requestAnimationFrame(tick)
}

function onMouseMove(e) {
  targetX = (e.clientX / window.innerWidth  - 0.5)
  targetY = (e.clientY / window.innerHeight - 0.5)
}

onMounted(() => {
  rafId = requestAnimationFrame(tick)
  nextTick(initScrollReveal)
})
</script>

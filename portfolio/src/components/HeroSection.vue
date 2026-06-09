<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    aria-label="Presentación"
  >
    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

      <!-- ── LEFT: text ── -->
      <div class="text-center lg:text-left">

        <!-- Status badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-violet-500/10 border border-violet-500/30 text-violet-300
                    text-sm font-medium mb-8 animate-fade-in">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></span>
          Disponible para proyectos freelance
        </div>

        <!-- Heading -->
        <h1 class="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 animate-fade-up">
          ¡Hola! Soy<br />
          <span class="text-gradient">Kevin Garzón</span>
        </h1>



        <!-- Role -->
        <p class="text-base md:text-lg text-violet-300 font-medium mb-5 animate-fade-up-slow">
          Ingeniero de Software (7° Semestre) · Fullstack Developer &amp; Dev asistido por IA
        </p>

        <!-- Description -->
        <p class="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-up-slow">
          Transformo lógica compleja en código limpio, robusto y altamente escalable.
          Básicamente, escribo APIs que no se caen y peleo con arquitecturas de software
          para que tú no tengas que hacerlo. Fanático del desarrollo eficiente y de
          optimizar cosas,
          <em class="not-italic text-violet-400 font-medium">incluyendo mi tiempo de sueño.</em>
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-slow">
          <a href="#projects" class="btn-primary inline-flex items-center justify-center gap-2 group">
            Ver Proyectos
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-garzon07560/"
            target="_blank" rel="noopener noreferrer"
            class="btn-ghost inline-flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap gap-6 justify-center lg:justify-start mt-12 animate-fade-in">
          <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
            <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
            <p class="text-xs text-slate-500 mt-0.5">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- ── RIGHT: floating terminal ── -->
      <div class="hidden lg:block animate-float" aria-hidden="true">
        <div class="glass-card rounded-2xl overflow-hidden shadow-[0_0_70px_rgba(139,92,246,0.2)]
                    ring-1 ring-violet-500/10">
          <!-- Title bar -->
          <div class="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
            <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
            <span class="ml-3 text-slate-500 text-xs font-mono">kevin.config.ts</span>
          </div>

          <!-- Animated code lines -->
          <pre class="p-6 text-sm font-mono leading-[1.8] overflow-x-auto select-none"><div
  v-for="(line, i) in codeLines"
  :key="i"
  class="code-line whitespace-pre"
  :style="{ '--ln': i }"
  v-html="line !== '' ? line : '&nbsp;'"
></div></pre>
        </div>

        <!-- Tech chips -->
        <div class="flex flex-wrap gap-2 mt-4 justify-end">
          <span v-for="chip in chips" :key="chip.text" :class="['badge text-xs', chip.cls]">
            {{ chip.text }}
          </span>
        </div>
      </div>

    </div>


  </section>
</template>

<script setup>
import GengarSprite from './GengarSprite.vue'

const stats = [
  { value: '3+',  label: 'Proyectos en producción' },
  { value: '86',  label: 'Tests automatizados'     },
  { value: '94%', label: 'Cobertura de código'     },
]

const chips = [
  { text: 'Clean Architecture', cls: 'bg-violet-500/10 border-violet-500/30 text-violet-300' },
  { text: 'TDD',                cls: 'bg-green-500/10  border-green-500/30  text-green-300'  },
  { text: 'Fullstack',          cls: 'bg-blue-500/10   border-blue-500/30   text-blue-300'   },
]

const v = (c, t) => `<span class="${c}">${t}</span>`
const kw  = (t) => v('text-violet-400', t)
const key = (t) => v('text-green-300', t)
const str = (t) => v('text-amber-300', `'${t}'`)
const op  = (t) => v('text-slate-400', t)
const br  = (t) => v('text-slate-300', t)
const cm  = (t) => v('text-slate-600', t)
const arr = (items) => `${br('[')}${items.map(str).join(`${v('text-slate-500', ',')} `)}${br(']')}`

const codeLines = [
  `${kw('const')} ${v('text-blue-300', 'kevin')} ${op('=')} ${br('{')}`,
  `  ${key('role')}${op(':')}       ${str('Fullstack Developer')}${v('text-slate-500', ',')}`,
  `  ${key('semester')}${op(':')}   ${v('text-amber-300', '7')}${v('text-slate-500', ',')}`,
  `  ${key('coffee')}${op(':')}     ${v('text-amber-300', 'Infinity')}${v('text-slate-500', ',')}`,
  `  ${key('bugs')}${op(':')}       ${v('text-amber-300', '0')}  ${cm('// "optimism"')}`,
  ``,
  `  ${key('frontend')}${op(':')}  ${arr(['Vue 3', 'TypeScript', 'Tailwind'])}${v('text-slate-500', ',')}`,
  `  ${key('backend')}${op(':')}   ${arr(['FastAPI', 'Python', 'PostgreSQL'])}${v('text-slate-500', ',')}`,
  `  ${key('devops')}${op(':')}    ${arr(['Docker', 'Vercel', 'Git'])}${v('text-slate-500', ',')}`,
  `${br('}')}`,
  ``,
  `${cm('// Output: ')}${v('text-green-400', 'code that actually works')}`,
  `${kw('export default')} ${v('text-blue-300', 'kevin')}${op(';')}${v('text-white animate-blink', '▌')}`,
]
</script>

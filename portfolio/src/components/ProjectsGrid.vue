<template>
  <section id="projects" class="relative py-24 px-6 overflow-hidden" aria-labelledby="projects-heading">

    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-16 reveal" data-delay="0">
        <span class="badge bg-violet-500/10 border-violet-500/30 text-violet-400 mb-4">Portafolio</span>
        <h2 id="projects-heading" class="section-title mt-2">Proyectos Destacados</h2>
        <p class="section-subtitle max-w-xl mx-auto">
          Código real. Arquitecturas reales. Pruebas reales. Sin trucos.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="glass-card glass-card-hover group flex flex-col overflow-hidden reveal"
          :data-delay="index + 1"
        >
          <!-- Top accent bar -->
          <div :class="['h-1 w-full rounded-t-2xl bg-gradient-to-r', project.accentGradient]" aria-hidden="true"></div>

          <div class="flex flex-col flex-1 p-6 gap-5">
            <!-- Number + emoji -->
            <div class="flex items-start justify-between">
              <span class="text-3xl" role="img" :aria-label="project.emojiLabel">{{ project.emoji }}</span>
              <span class="font-mono text-slate-700 text-sm font-bold select-none">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>

            <!-- Title -->
            <div>
              <h3 class="text-lg font-bold text-white leading-snug group-hover:text-violet-300 transition-colors duration-200">
                {{ project.title }}
              </h3>
              <p class="text-slate-500 text-xs mt-1 font-mono">{{ project.type }}</p>
            </div>

            <!-- Description -->
            <p class="text-slate-400 text-sm leading-relaxed flex-1">{{ project.description }}</p>

            <!-- Tech badges -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.stack" :key="tech.label" :class="['badge text-xs', tech.cls]">
                {{ tech.label }}
              </span>
            </div>

            <!-- Highlight -->
            <div v-if="project.highlight" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
              <svg class="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="text-xs text-slate-300">{{ project.highlight }}</span>
            </div>

            <!-- Buttons -->
            <div class="flex gap-3 pt-1">
              <a
                :href="project.github"
                target="_blank" rel="noopener noreferrer"
                class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                       bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40
                       text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 cursor-pointer"
                :aria-label="`Ver código de ${project.title} en GitHub`"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                Código
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank" rel="noopener noreferrer"
                class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                       bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 hover:border-violet-400
                       text-violet-300 hover:text-white text-sm font-medium transition-all duration-200 cursor-pointer"
                :aria-label="`Ver demo de ${project.title}`"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Demo
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- GitHub CTA -->
      <div class="text-center mt-14 reveal" data-delay="4">
        <a
          href="https://github.com/KevinSGD"
          target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-slate-400 hover:text-violet-300
                 text-sm font-medium transition-colors duration-200 group"
        >
          Ver más en GitHub
          <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
               fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    emoji: '🏆', emojiLabel: 'Trofeo',
    title: 'Pokémon Tournament Management System',
    type: 'REST API · Backend',
    description: 'Un backend de nivel empresarial diseñado bajo principios de Clean Architecture. Integra de forma asíncrona la PokeAPI con caché local, genera brackets algorítmicos de eliminación directa y cuenta con una suite automatizada de 86 pruebas. Código tan limpio que da miedo.',
    stack: [
      { label: 'FastAPI',            cls: 'bg-teal-500/10   border-teal-500/30   text-teal-300'   },
      { label: 'Clean Architecture', cls: 'bg-violet-500/10  border-violet-500/30 text-violet-300' },
      { label: 'Pytest',             cls: 'bg-yellow-500/10  border-yellow-500/30 text-yellow-300' },
      { label: 'Docker',             cls: 'bg-blue-500/10    border-blue-500/30   text-blue-300'   },
    ],
    highlight: '86 tests · 94.59% cobertura de código',
    accentGradient: 'from-teal-500 via-violet-500 to-purple-600',
    github: 'https://github.com/KevinSGD', demo: null,
  },
  {
    emoji: '📱', emojiLabel: 'Móvil',
    title: 'Pokédex Estratégica & Simulador de Daño',
    type: 'Frontend App · Kanto Edition',
    description: 'Aplicación frontend interactiva y 100% estática. Procesa tipos elementales, estadísticas base y potencia de movimientos a la velocidad del rayo. Cero latencia, cero APIs caídas. Ideal para cuando necesitas saber si ese Thunderbolt va a noquear al Charizard rival.',
    stack: [
      { label: 'Vue 3',        cls: 'bg-green-500/10  border-green-500/30  text-green-300'  },
      { label: 'Tailwind CSS', cls: 'bg-sky-500/10    border-sky-500/30    text-sky-300'    },
      { label: 'Local JSON',   cls: 'bg-orange-500/10 border-orange-500/30 text-orange-300' },
      { label: 'Vercel',       cls: 'bg-slate-500/10  border-slate-400/30  text-slate-300'  },
    ],
    highlight: 'Desplegado en Vercel · 0ms de latencia',
    accentGradient: 'from-green-500 via-emerald-500 to-teal-500',
    github: 'https://github.com/KevinSGD', demo: null,
  },
  {
    emoji: '📅', emojiLabel: 'Calendario',
    title: 'Sistema de Programación Académica',
    type: 'Fullstack · Optimización',
    description: 'Arquitectura completa que utiliza algoritmos de optimización para automatizar y resolver colisiones en horarios universitarios. Nació de la desesperación real de ver choques de materias. Backend robusto y frontend reactivo. También conocido como "TesisOMuerte".',
    stack: [
      { label: 'FastAPI',                   cls: 'bg-teal-500/10   border-teal-500/30   text-teal-300'   },
      { label: 'Vue 3',                      cls: 'bg-green-500/10  border-green-500/30  text-green-300'  },
      { label: 'Algoritmos Optimización',    cls: 'bg-orange-500/10 border-orange-500/30 text-orange-300' },
    ],
    highlight: 'Resuelve colisiones de horarios en tiempo real',
    accentGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    github: 'https://github.com/KevinSGD', demo: null,
  },
]
</script>

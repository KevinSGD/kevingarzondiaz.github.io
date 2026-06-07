<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 shadow-lg'
        : 'bg-transparent'
    ]"
  >
    <nav
      class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      aria-label="Navegación principal"
    >

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8 list-none m-0 p-0">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group"
          >
            {{ link.label }}
            <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <!-- CTA — now scrolls to #contact -->
      <a
        href="#contact"
        class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg
               bg-violet-600/20 border border-violet-500/30 text-violet-300
               hover:bg-violet-600/40 hover:border-violet-400 hover:text-white
               text-sm font-medium transition-all duration-200 cursor-pointer"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        Contáctame
      </a>

      <!-- Mobile menu toggle -->
      <button
        class="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menú"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            :d="mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>
    </nav>

    <!-- Mobile dropdown -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-white/5 px-6 py-4 flex flex-col gap-4"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-slate-300 hover:text-white text-sm py-1 transition-colors"
          @click="mobileOpen = false"
        >{{ link.label }}</a>
        <a href="#contact" class="text-violet-400 text-sm py-1 font-medium" @click="mobileOpen = false">
          Contáctame
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled    = ref(false)
const mobileOpen  = ref(false)

const navLinks = [
  { href: '#projects', label: 'Proyectos' },
  { href: '#about',    label: 'Sobre mí'  },
  { href: '#contact',  label: 'Contacto'  },
]

const handleScroll = () => { scrolled.value = window.scrollY > 20 }

onMounted(()  => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

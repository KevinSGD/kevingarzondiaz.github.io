<template>
  <section id="about" class="relative py-24 px-6 overflow-hidden" aria-labelledby="about-heading">

    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-16 reveal" data-delay="0">
        <span class="badge bg-violet-500/10 border-violet-500/30 text-violet-400 mb-4">Easter Egg</span>
        <h2 id="about-heading" class="section-title mt-2">
          Sobre mí
          <span class="text-slate-500 font-normal text-2xl ml-2">(Sin filtros)</span>
        </h2>
        <p class="section-subtitle max-w-lg mx-auto">
          Todo lo que los CVs corporativos no te van a contar jamás.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid gap-6 md:grid-cols-3 mb-16">
        <div
          v-for="(fact, index) in facts"
          :key="fact.title"
          class="glass-card glass-card-hover p-6 flex flex-col gap-4 group reveal"
          :data-delay="index + 1"
        >
          <div
            :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center text-2xl',
              'ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110',
              fact.iconBg,
            ]"
            role="img" :aria-label="fact.iconLabel"
          >{{ fact.icon }}</div>

          <div>
            <h3 class="text-white font-semibold text-base mb-1">{{ fact.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ fact.body }}</p>
          </div>

          <div class="mt-auto pt-3 border-t border-white/5">
            <span :class="['text-xs font-mono', fact.tagCls]">{{ fact.tag }}</span>
          </div>
        </div>
      </div>

      <!-- Terminal quote -->
      <div class="glass-card p-6 max-w-2xl mx-auto text-center reveal" data-delay="4">
        <p class="font-mono text-sm text-slate-400">
          <span class="text-violet-400">$</span>
          <span class="text-green-400 ml-2">kevin</span>
          <span class="text-slate-600"> --describe-self</span>
        </p>
        <p class="mt-3 text-slate-300 text-sm italic leading-relaxed">
          "Un developer que cree genuinamente que un buen sistema de tipos
          y una cobertura de tests del 90%+ son actos de amor hacia el
          siguiente programador que lea el código."
        </p>
        <p class="mt-2 text-slate-600 font-mono text-xs">
          <span class="text-green-500">[OK]</span> exit code 0
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const facts = [
  {
    icon: '', iconLabel: 'Rayo de energía', iconBg: 'bg-yellow-500/10',
    title: 'Multitasking de nivel épico',
    body: 'Puedo estructurar un sistema modular asíncrono con testing estricto y debatir sobre las mejores mecánicas competitivas de la cuarta generación de Pokémon en la misma tarde. A veces en la misma hora.',
    tag: 'performance: O(∞)', tagCls: 'text-yellow-500/70',
  },
  {
    icon: '', iconLabel: 'Taza de café', iconBg: 'bg-amber-500/10',
    title: 'Fórmula de Combustible',
    body: 'Mi código es 50% lógica abstracta, 40% asistencia agéntica avanzada y 10% café/té de dudosa procedencia. El 40% restante está en proceso de audit.',
    tag: 'fuel: coffee required', tagCls: 'text-amber-500/70',
  },
  {
    icon: '', iconLabel: 'Herramientas', iconBg: 'bg-violet-500/10',
    title: 'Filosofía de Desarrollo',
    body: 'Si no tiene pruebas automatizadas, es solo un deseo, no software. Esta frase la imprimo mentalmente en cada PR que reviso y cada función que escribo.',
    tag: 'tests: non-negotiable', tagCls: 'text-violet-400/70',
  },
]
</script>

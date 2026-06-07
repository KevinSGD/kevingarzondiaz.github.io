<template>
  <section id="contact" class="relative py-28 px-6 overflow-hidden" aria-labelledby="contact-heading">

    <div class="relative z-10 max-w-3xl mx-auto text-center">

      <span class="badge bg-violet-500/10 border-violet-500/30 text-violet-400 mb-6 inline-flex reveal" data-delay="0">
        Contacto
      </span>

      <h2
        id="contact-heading"
        class="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight reveal"
        data-delay="1"
      >
        ¿Tienes un proyecto<br />
        <span class="text-gradient">que no se debe caer?</span>
      </h2>

      <p class="text-slate-400 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto reveal" data-delay="2">
        Estoy disponible para colaboraciones, proyectos freelance o simplemente para charlar
        sobre arquitecturas de software y por qué el testing es sagrado.
        <span class="text-violet-400">Respondo antes de que tu API haga timeout.</span>
      </p>

      <!-- Primary buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12 reveal" data-delay="3">
        <a
          href="mailto:kstevegarzon@gmail.com"
          class="group btn-primary inline-flex items-center justify-center gap-3"
          aria-label="Enviar correo a Kevin Garzón"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Escríbeme un email
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-garzon07560/"
          target="_blank" rel="noopener noreferrer"
          class="btn-ghost inline-flex items-center justify-center gap-3"
          aria-label="Perfil de Kevin Garzón en LinkedIn"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      </div>

      <!-- Secondary links -->
      <div class="flex flex-wrap gap-4 justify-center reveal" data-delay="4">
        <a
          href="https://github.com/KevinSGD"
          target="_blank" rel="noopener noreferrer"
          class="flex items-center gap-2.5 px-5 py-3 rounded-xl
                 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40
                 text-slate-300 hover:text-white text-sm font-medium
                 transition-all duration-200 cursor-pointer group"
          aria-label="Perfil de GitHub: KevinSGD"
        >
          <svg class="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          GitHub
        </a>
        <a
          href="mailto:kstevegarzon@gmail.com"
          class="flex items-center gap-2.5 px-5 py-3 rounded-xl
                 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40
                 text-slate-300 hover:text-white text-sm font-medium
                 transition-all duration-200 cursor-pointer group"
          aria-label="Enviar email a Kevin Garzón"
        >
          <svg class="w-4 h-4 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Email directo
        </a>
      </div>

      <!-- Email chip -->
      <div class="mt-14 glass-card p-5 inline-block reveal" data-delay="5">
        <p class="font-mono text-sm text-slate-400">
          <span class="text-violet-400">kstevegarzon</span>
          <span class="text-slate-600">@</span>
          <span class="text-green-400">gmail.com</span>
        </p>
      </div>

    </div>
  </section>
</template>

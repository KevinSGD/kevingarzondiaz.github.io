<template>
  <svg
    :class="['w-6 h-6', colorClass]"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
  <!-- Backend / API layers -->
  <template v-if="name === 'layers'">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l7.5-3.75 7.5 3.75M6.75 12l7.5 3.75 7.5-3.75M6.75 16.5l7.5 3.75 7.5-3.75" />
  </template>

  <!-- Stats / damage calculator -->
  <template v-else-if="name === 'chart'">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </template>

  <!-- Academic scheduling -->
  <template v-else-if="name === 'calendar'">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h.008v.008H9V12zm3 0h.008v.008H12V12zm3 0h.008v.008H15V12z" />
  </template>

  <!-- Multitasking -->
  <template v-else-if="name === 'bolt'">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </template>

  <!-- Coffee -->
  <template v-else-if="name === 'coffee'">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 8v8a2 2 0 002 2h6a2 2 0 002-2V8M6 8V6a2 2 0 012-2h6a2 2 0 012 2v2M6 8h10" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M16 10h1.5a2.5 2.5 0 010 5H16" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 4c.3 1 .5 1.5.5 2" />
  </template>

  <!-- Testing philosophy -->
  <template v-else-if="name === 'checklist'">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </template>
  </svg>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  colorClass: { type: String, default: 'text-slate-300' },
})
</script>

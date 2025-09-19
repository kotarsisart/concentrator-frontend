<script setup lang="ts">
const items = [
  { title: 'Sharper focus', text: 'Sustain attention for longer sessions.' },
  { title: 'Calm energy',   text: 'No jitters, no spikes — smooth baseline.' },
  { title: 'Flow-ready',    text: 'Enter deep work faster and keep it.' },
]
</script>

<template>
  <section class="py-16 md:py-24 bg-surface-2 text-ink">
    <div class="mx-auto max-w-[1280px] px-6">
      <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight">Benefits</h2>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <article
          v-for="(b,i) in items" :key="i"
          class="bg-surface rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-elev)]"
        >
          <h3 class="text-xl font-semibold">{{ b.title }}</h3>
          <p class="mt-2 text-ink-muted">{{ b.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<template>
  <section class="py-16 md:py-24 bg-availability-bg">
    <div class="mx-auto max-w-[1280px] px-6">
      <div class="rounded-[var(--radius-xl)] bg-surface p-6 md:p-8 shadow-[var(--shadow-elev)] border border-availability-accent/30">
        <div class="md:flex md:items-center md:justify-between gap-6">
          <div>
            <h2 class="text-2xl md:text-4xl font-extrabold text-ink">Availability</h2>
            <p class="mt-2 text-ink-muted">
              Next batch ships within 7–10 days. Limited units per region.
            </p>
          </div>
          <button
            class="mt-6 md:mt-0 inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-xl)]
                   bg-availability-accent text-white font-semibold hover:brightness-95 transition"
          >
            Try to buy
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <Card title="Reviewing Bocchi the Rock" timestamp="6 hours ago">
    <div class="w-full aspect-[4/3] rounded-lg overflow-hidden">
      <img src="/public/dummy.jpeg" alt="Cat Band" class="w-full h-full object-cover" />
    </div>
    <p class="mt-2">
      One of the standout features is the animation style, which seamlessly merges classic anime
      aesthetics with vibrant concert scenes...
    </p>
  </Card>

  <Card
    title="Unraveling the Horrors of Bloodborne - A Lovecraftian Masterpiece"
    timestamp="12 hours ago"
  >
    <p class="mt-2">
      From the outset, Bloodborne sets a chilling tone with its Gothic architecture, eldritch
      horrors, and oppressive atmosphere. The Lovecraftian influence is palpable...
    </p>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/elements/cards/CardBase.vue'
</script>

<template>
  <main class="h-full">
    <component :is="$route.meta.layout || 'div'">
      <RouterView />
    </component>
  </main>
</template>

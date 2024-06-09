<template>
  <button
    @click="emit('click')"
    :type="type"
    :class="customClass"
    class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  },
  text: {
    type: String,
    required: true
  },
  customClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])
</script>

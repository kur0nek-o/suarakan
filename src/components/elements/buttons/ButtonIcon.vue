<template>
  <button
    @click="emit('click')"
    :type="type"
    :class="[customClass, variantClass]"
    class="inline-flex items-center border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    <slot></slot>
    {{ text }}
    <slot name="after"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { PropType } from 'vue'

const props = defineProps({
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
  },
  variant: {
    type: String as PropType<'standard' | 'rounded'>,
    default: 'standard'
  }
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'rounded':
      return 'rounded-full'
    default:
      return 'rounded-md'
  }
})

const emit = defineEmits(['click'])
</script>

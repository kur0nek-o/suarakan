<template>
  <input
    :type="type"
    :name="name"
    :id="name"
    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    :placeholder="placeholder"
    v-model="model"
  />
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  name: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'text' | 'email' | 'password'>,
    default: 'text'
  }
})

const model = defineModel()
</script>

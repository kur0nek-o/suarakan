<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>

    <div class="mt-1">
      <input
        :type="type"
        :name="name"
        :id="name"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        :placeholder="placeholder"
        v-model="model"
        :autofocus="autofocus"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'text' | 'email' | 'password'>,
    default: 'text'
  },
  autofocus: {
    type: Boolean,
    default: false
  }
})

const model = defineModel()
</script>

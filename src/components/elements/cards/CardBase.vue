<template>
  <div class="border rounded-lg shadow-md p-4 mb-4 bg-white w-full max-w-[700px] cursor-pointer">
    <div class="card-header flex items-center mb-2">
      <img src="/public/profile.jpeg" alt="Avatar" class="w-9 h-9 rounded-full" />
      <div class="ml-2">
        <h5 class="text-base font-semibold">Username</h5>
        <p class="text-xs text-slate-500">{{ timestamp }}</p>
      </div>
    </div>
    <div class="card-content">
      <h4 class="text-lg font-semibold mb-3">{{ title }}</h4>
      <slot></slot>
    </div>
    <div class="card-footer flex justify-between items-center mt-2">
      <div class="flex items-center space-x-3">
        <!-- Up vote button -->
        <button class="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
          <PhArrowFatUp class="h-5 w-5 text-gray-500 hover:text-gray-700" />
          <span>Upvote</span>
        </button>

        <!-- Down vote button -->
        <button class="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
          <PhArrowFatDown class="h-5 w-5 text-gray-500 hover:text-gray-700" />
          <span>Downvote</span>
        </button>

        <!-- Comment button -->
        <button class="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
          <PhChat class="h-5 w-5 text-gray-500 hover:text-gray-700" />
          <span>Comment</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhArrowFatUp, PhArrowFatDown, PhChat } from '@phosphor-icons/vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* Styling for the icon buttons */
button span {
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
}

button:hover {
  cursor: pointer;
}
</style>

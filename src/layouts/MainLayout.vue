<template>
  <nav class="w-full bg-white shadow-sm relative">
    <div class="container mx-auto p-2">
      <div class="flex justify-between items-center gap-x-5">
        <div>
          <h1 class="text-3xl font-bold">LOGO</h1>
        </div>

        <div class="hidden sm:block sm:w-full md:w-96">
          <div class="relative">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              autocomplete="off"
              type="text"
              class="block w-full rounded-full border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-slate-50"
              placeholder="Cari..."
            />
          </div>
        </div>

        <div class="flex items-center gap-x-2">
          <ButtonBase text="Log in" variant="rounded" />

          <MagnifyingGlassIcon
            class="h-6 w-6 cursor-pointer sm:hidden"
            @click="isShowSearchInput = !isShowSearchInput"
          />

          <ButtonIcon text="Post" variant="rounded">
            <template>
              <PlusIcon class="-ml-0.5 mr-0.5 h-5 w-5" aria-hidden="true" />
            </template>
          </ButtonIcon>

          <div
            class="h-10 w-10 rounded-full overflow-hidden cursor-pointer hover:ring-offset-2 hover:ring-2 hover:ring-indigo-500"
          >
            <img
              class="w-full object-cover"
              src="data:image/jpeg;base64,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"
              alt="Profile picture"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute w-full p-3 bg-slate-100 shadow-md sm:hidden" v-if="isShowSearchInput">
      <div class="block w-full">
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            autocomplete="off"
            type="text"
            class="block w-full rounded-full border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-slate-50"
            placeholder="Cari..."
          />
        </div>
      </div>
    </div>
  </nav>

  <aside class="space-y-1 w-72 py-3 px-5 bg-white min-h-screen">
    <a
      v-for="item in navigation"
      :key="item.name"
      :href="item.href"
      :class="[
        item.current
          ? 'bg-indigo-600 text-white'
          : 'text-gray-600 hover:bg-indigo-50 hover:text-gray-900',
        'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
      ]"
      :aria-current="item.current ? 'page' : undefined"
    >
      <component
        :is="item.icon"
        :class="[
          item.current ? 'text-white' : 'text-gray-400 group-hover:text-gray-500',
          'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
        ]"
        aria-hidden="true"
      />
      <span class="truncate">{{ item.name }}</span>
    </a>
  </aside>

  <!-- <div>
    <slot></slot>
  </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ButtonBase, ButtonIcon } from '@/components/elements/buttons'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/20/solid'

import type { Ref } from 'vue'

const isShowSearchInput: Ref<boolean> = ref(false)

import { HomeIcon } from '@heroicons/vue/24/outline'

const navigation = [{ name: 'Beranda', href: '#', icon: HomeIcon, current: true }]
</script>

<template>
  <nav class="w-full bg-white shadow-sm relative">
    <div class="container mx-auto p-2">
      <div class="flex justify-between items-center gap-x-5">
        <RouterLink to="/">
          <h1 class="text-3xl font-bold">LOGO</h1>
        </RouterLink>

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
          <div class="hidden">
            <ButtonBase text="Log in" variant="rounded" />
          </div>

          <MagnifyingGlassIcon
            class="h-6 w-6 cursor-pointer sm:hidden"
            @click="isShowSearchInput = !isShowSearchInput"
          />

          <ButtonIcon text="Post" variant="rounded">
            <template>
              <PlusIcon class="-ml-0.5 mr-0.5 h-5 w-5" aria-hidden="true" />
            </template>
          </ButtonIcon>

          <div class="relative">
            <!-- Profile picture -->
            <div
              class="h-10 w-10 rounded-full overflow-hidden cursor-pointer hover:ring-offset-2 hover:ring-2 hover:ring-indigo-500"
              @click="isPopoverOpen = !isPopoverOpen"
            >
              <img class="w-full object-cover" src="/public/profile.jpeg" alt="Profile picture" />
            </div>

            <!-- Pop over content -->
            <div
              v-if="isPopoverOpen"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Settings</a
                >
                <RouterLink
                  to="/login"
                  class="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-900"
                  role="menuitem"
                  >Sign out</RouterLink
                >
              </div>
            </div>
          </div>

          <div class="flex md:hidden">
            <button
              @click="isAsideOpen = !isAsideOpen"
              class="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg
                class="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
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

  <div class="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] h-full">
    <aside
      class="space-y-1 w-72 py-3 px-5 bg-white h-full fixed md:relative transition-transform transform md:translate-x-0 -translate-x-full"
      :class="{ '-translate-x-full': !isAsideOpen, 'translate-x-0': isAsideOpen }"
    >
      <RouterLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.href"
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
      </RouterLink>
    </aside>

    <div class="flex justify-center h-full p-5">
      <div>
        <slot></slot>
      </div>
    </div>

    <!-- Grid kosong untuk penyeimbang -->
    <div class="hidden lg:block w-72"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ButtonBase, ButtonIcon } from '@/components/elements/buttons'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/20/solid'

import type { Ref } from 'vue'

const isShowSearchInput: Ref<boolean> = ref(false)
const isAsideOpen: Ref<boolean> = ref(false)
const isPopoverOpen: Ref<boolean> = ref(false)

import { HomeIcon } from '@heroicons/vue/24/outline'

const navigation = [{ name: 'Beranda', href: '/', icon: HomeIcon, current: true }]
</script>

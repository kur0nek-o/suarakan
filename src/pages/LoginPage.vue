<template>
  <div class="flex min-h-screen justify-center items-center">
    <div class="space-y-6">
      <h1 class="text-center font-bold text-2xl">LOGO</h1>

      <form action="" class="p-4 bg-white rounded-xl w-72 shadow space-y-3">
        <InputLabel label="Username" name="username" :autofocus="true" />

        <div>
          <div class="flex justify-between items-center">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <a href="#" class="text-xs text-blue-500">Lupa password?</a>
          </div>

          <div class="mt-1">
            <InputBase type="password" name="password" />
          </div>
        </div>

        <RouterLink
          to="/"
          type="button"
          class="w-full justify-center rounded-md inline-flex items-center border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Log in
        </RouterLink>
      </form>

      <p class="text-center text-sm">
        Belum punya akun?
        <RouterLink to="/sign-up"><span class="text-blue-500">Sign up</span></RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InputBase, InputLabel } from '@/components/forms/inputs'
</script>

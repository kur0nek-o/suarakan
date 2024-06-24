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

        <ButtonBase text="Log in" type="submit" custom-class="w-full justify-center" />
      </form>

      <p class="text-center text-sm">
        Belum punya akun?
        <RouterLink to="/sign-up"><span class="text-blue-500">Sign up</span></RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/elements/buttons/ButtonBase.vue'

import { InputBase, InputLabel } from '@/components/forms/inputs'
</script>

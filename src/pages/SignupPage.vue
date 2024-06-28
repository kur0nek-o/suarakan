<template>
  <div class="flex min-h-screen justify-center items-center">
    <div class="space-y-6">
      <h1 class="text-center font-bold text-2xl">LOGO</h1>

      <form action="" class="p-4 bg-white rounded-xl w-72 shadow space-y-3">
        <InputLabel label="Email" name="email" type="text" :autofocus="true" />

        <InputLabel label="Username" name="username" />

        <InputLabel label="Password" name="password" type="password" />

        <ButtonBase text="Sign up" type="submit" custom-class="w-full justify-center" />
      </form>

      <p class="text-center text-sm">
        Sudah punya akun?
        <RouterLink to="/login"><span class="text-blue-500">Log in</span></RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/elements/buttons/ButtonBase.vue'

import { InputLabel } from '@/components/forms/inputs'
</script>

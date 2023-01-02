<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <p>{{ isDark }}</p>
  <button @click="toggleDark()"/>
</template>
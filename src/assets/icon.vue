<script setup lang="ts">
const props = defineProps({
  name: String,
  style: Object
})

const baseURL = '../../public/image/types/'
</script>

<template>
  <div>
      <img :style="props.style" :src="baseURL+props.name+'.svg'">
  </div>
</template>

<style scoped>
div {
  display: flex;
}
</style>
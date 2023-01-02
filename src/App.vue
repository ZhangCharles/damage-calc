<script setup lang="ts">
import { useDark } from '@vueuse/core';
const isDark = useDark()
</script>

<template>
  <el-container>
    <el-aside data-tauri-drag-region width="68px">

    </el-aside>
    <el-main class="main">
      <RouterView></RouterView>
    </el-main>
  </el-container>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.main {
  background-color: var(--el-bg-color);
  height: 100vh;
}
.el-menu {
  width: 68px;
  height: 100vh;
}

.menu-img {
  height: 48px;
}
</style>

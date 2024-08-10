<script setup>
import SidebarHeader from './SidebarHeader.vue'
import SidebarContent from './SidebarContent.vue'
</script>

<template>
  <div class="box" style="height: 100vh;overflow: hidden;position: fixed;top: 0.5rem">
    <SidebarHeader />

    <SidebarContent />
  </div>
</template>
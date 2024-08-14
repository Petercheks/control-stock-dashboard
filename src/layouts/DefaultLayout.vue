<script setup>
import SidebarArea from '../components/sidebar/SidebarArea.vue'
</script>

<template>
  <main>
    <section class="columns">
      <div class="column is-one-fifth">
        <SidebarArea />
      </div>

      <div class="column is-flex">
        <section class="is-fullheight" style="width: 100%;">
          <slot></slot>
        </section>
      </div>
    </section>
  </main>
</template>
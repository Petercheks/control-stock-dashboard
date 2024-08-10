<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  item: {
    type: Object,
    required: true
  },
})
</script>

<template>
  <li class="p-2">
    <RouterLink :to="item.to" class="p-0">
      <span class="icon-text">
        <span class="icon">
          <FontAwesomeIcon :icon="item.icon" />
        </span>
        <span class="ml-2">{{ item.label }}</span>
      </span>
    </RouterLink>
  </li>
</template>
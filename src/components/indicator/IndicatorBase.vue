<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  indicator: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="notification" :class="indicator.bulma_class">
    <div class="columns is-vcentered is-flex is-justify-content-center">
      <div class="column is-one-quarter is-flex is-justify-content-center">
        <span v-if="indicator.icon" class="icon">
          <FontAwesomeIcon :icon="indicator.icon" size="2xl" />
        </span>
      </div>
      <div class="column">
        <span class="title"> {{ indicator.value }} {{ indicator.measure_unit }}</span>
        <p class="subtitle is-6">{{ indicator.text }}</p>
      </div>
    </div>
  </div>
</template>
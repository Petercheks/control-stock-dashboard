<script setup>
import { reactive } from 'vue'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import IndicatorBase from '@/components/indicator/IndicatorBase.vue'

const indicators = reactive([
  {
    id: 'productos-indicator',
    icon: faTruckFast,
    value: 27000,
    measure_unit: 'unds',
    text: 'Productos en stock',
    bulma_class: 'is-warning is-light',
  },
  {
    id: 'productos-indicator',
    icon: faTruckFast,
    value: 27000,
    measure_unit: 'unds',
    text: 'Productos en stock',
    bulma_class: 'is-info is-light',
  },
  {
    id: 'productos-indicator',
    icon: faTruckFast,
    value: 27000,
    measure_unit: 'unds',
    text: 'Productos en stock',
    bulma_class: 'is-success is-light',
  },
])
</script>

<template>
  <div class="columns mt-4">
    <div
      class="column"
      v-for="indicator in indicators"
      :key="`indicator-colum-${indicator.id}`"
    >
      <IndicatorBase
        :indicator="indicator"
      />
    </div>
  </div>
</template>
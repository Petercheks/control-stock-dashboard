<script setup>
import {onMounted, ref} from 'vue'
import {faSackDollar, faTruckFast, faVault} from '@fortawesome/free-solid-svg-icons'
import IndicatorBase from '@/components/indicator/IndicatorBase.vue'
import Toast from "@/toast.js";
import Api from "@/api.js";
import emitter from "@/emitter.js";

const indicators = ref([])

const getIndicators = async () => {
  try {
    const { data } = await Api.get('/articles')

    indicators.value = [
      {
        id: 'productos-indicator',
        icon: faTruckFast,
        value: data.reduce((acc, product) => acc + product.units, 0),
        measure_unit: 'unds',
        text: 'Productos en stock',
        bulma_class: 'is-warning is-light',
      },
      {
        id: 'investment-indicator',
        icon: faSackDollar,
        value: data.reduce((acc, product) => acc + product.purchase_price, 0),
        measure_unit: '$',
        text: 'Capital invertido',
        bulma_class: 'is-info is-light',
      },
      {
        id: 'profit-indicator',
        icon: faVault,
        value: data.reduce((acc, product) => acc + product.sale_price, 0),
        measure_unit: '$',
        text: 'Precio de venta',
        bulma_class: 'is-success is-light',
      },
    ]
  } catch (error) {
    await Toast.fire({
      icon: 'error',
      title: 'Error al obtener los indicadores'
    })
  }
}

onMounted(() => {
  emitter.on('refresh-indicators', () => {
    getIndicators()
  })

  getIndicators()
})
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
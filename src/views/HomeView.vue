<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import IndicatorsHome from '@/components/indicator/IndicatorsHome.vue'
import ProductTable from '@/components/products/ProductTable.vue'
import CategoryTable from '@/components/categories/CategoryTable.vue'
import CategoryCard from '@/components/categories/CategoryCard.vue'
import {onMounted, reactive} from "vue";
import emitter from "@/emitter.js";

const modal = reactive({
  name: null,
  props: {},
})

onMounted(() => {
  emitter.on('open-modal', ($_modal) => {
    modal.name = $_modal.name
    modal.props = $_modal.props
  })

  emitter.on('close-modal', () => {
    modal.name = null
    modal.props = {}
  })
})
</script>

<template>
  <DefaultLayout>
    <div class="container">
      <IndicatorsHome />

      <div class="columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="../assets/clustered-bar-chart.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="../assets/clustered-bar-chart.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>


      <CategoryCard>
        <CategoryTable />
      </CategoryCard>

      <ProductTable />

      <component :is="modal.name" v-bind="modal.props"></component>
    </div>
  </DefaultLayout>
</template>


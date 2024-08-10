<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import IndicatorsHome from '@/components/indicator/IndicatorsHome.vue'
import ProductTable from '@/components/products/ProductTable.vue'
import CategoryTable from '@/components/categories/CategoryTable.vue'
import CategoryCard from '@/components/categories/CategoryCard.vue'
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
    </div>
  </DefaultLayout>
</template>


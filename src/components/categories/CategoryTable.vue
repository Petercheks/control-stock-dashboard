<script setup>
import { onMounted, ref } from 'vue'
import Api from '@/api.js'
import CategoryRow from '@/components/categories/CategoryRow.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const categories = ref([]);
const isLoading = ref(false);

const getCategories = async () => {
  try {
    const { data } = await Api.get('/categories')
    categories.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  isLoading.value = true

  await getCategories()

  isLoading.value = false
})
</script>

<template>
  <button class="button is-success mb-5 mt-2">
    Agregar Categoria
  </button>
  <table class="table is-striped is-fullwidth is-hoverable">
    <thead>
    <tr>
      <th scope="col">Cod.</th>
      <th scope="col">Nombre</th>
      <th scope="col">Productos Vinculados</th>
      <th scope="col">Creado el</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <template v-if="isLoading">
      <tr>
        <td colspan="5">
          <div class="notification has-text-centered">
            <span class="icon">
              <FontAwesomeIcon :icon="faSpinner" spin size="2xl" style="color: #63E6BE;" />
            </span>
          </div>
        </td>
      </tr>
    </template>
    <template v-else>
      <template v-if="categories.length > 0">
        <CategoryRow
          v-for="category in categories"
          :category="category"
          :key="category.id"
        />
      </template>
      <template v-else>
        <tr>
          <td colspan="5">
            <div class="notification">
              <p class="has-text-centered">No hay categorias registradas</p>
            </div>
          </td>
        </tr>
      </template>
    </template>
    </tbody>
  </table>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import emitter from "@/emitter.js";
import ModalFormProduct from "@/components/products/modals/ModalFormProduct.vue";
import {onMounted, ref} from "vue";
import Toast from "@/toast.js";
import Api from "@/api.js";
import ProductRow from "@/components/products/ProductRow.vue";

const products = ref([])
const isLoading = ref(false)

const openModalProduct = () => {
  emitter.emit('open-modal', {
    name: ModalFormProduct,
    props: {},
  })
}

const getProducts = async () => {
  isLoading.value = true

  try {
    const { data } = await Api.get('/articles')
    products.value = data
  } catch (error) {
    await Toast.fire({
      icon: 'error',
      title: 'Error al obtener los productos'
    })
  }

  isLoading.value = false
}

onMounted(() => {
  emitter.on('refresh-products', () => {
    getProducts()
  })

  getProducts()
})
</script>

<template>
  <div class="box is-rounded">
    <button class="button is-success mb-5 mt-2" @click="openModalProduct">
      Agregar Producto
    </button>

    <table class="table is-striped is-fullwidth is-hoverable">
      <thead>
      <tr>
        <th scope="col">Codigo</th>
        <th scope="col">Articulo</th>
        <th scope="col">Categoria</th>
        <th scope="col">Cant. Disponible</th>
        <th scope="col">Precio de compra</th>
        <th scope="col">Precio de venta</th>
        <th scope="col">Margen de ganancia</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <template v-if="isLoading">
        <tr>
          <td colspan="7">
            <div class="notification has-text-centered">
            <span class="icon">
              <FontAwesomeIcon :icon="faSpinner" spin size="2xl" style="color: #63E6BE;" />
            </span>
            </div>
          </td>
        </tr>
      </template>
      <template v-else>
        <template v-if="products.length > 0">
          <ProductRow
              v-for="product in products"
              :product="product"
              :key="product.id"
          />
        </template>
        <template v-else>
          <tr>
            <td colspan="7">
              <div class="notification">
                <p class="has-text-centered">No hay productos registradas</p>
              </div>
            </td>
          </tr>
        </template>
      </template>
      </tbody>
    </table>
  </div>
</template>